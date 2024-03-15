<script setup>
import {ref,reactive,computed,nextTick,onMounted} from 'vue'
import {useFormStore} from '@/stores/modules/formInfo'

const formData=useFormStore().formData

const getDate = (type) => {
    const date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    if (type === 'start') {
        year = year-1
    } else if (type === 'end') {
        year = year +2
    }
    month = month > 9 ? month : '0' + month
    day = day > 9 ? day : '0' + day
    return `${year}-${month}-${day}`
}


/**
 * date:展示的开始时间
 * 
 * end:展示的结束时间
 */
let date=ref(getDate())
let end=ref(getDate())

var vv=0
/**
 * startDate:用于表示仪表盘范围最早时间
 * 
 * endDate:用于表示仪表盘范围最晚时间
 */
const startDate=computed(()=>{
    return getDate('start');
})
const endDate=computed(()=> {
    return getDate('end');
})

const bindDateChange = (e,type,value) => {

    if(type=='start' && judgeTime(e.detail.value,end.value)){
        date.value = e.detail.value
        formData.recruitmentPeriod.startDate=date.value
        return
    }
    if(type=='end' && judgeTime(date.value,e.detail.value)){
        console.log(typeof date.value);
        end.value=e.detail.value
        formData.recruitmentPeriod.endDate=end.value
        return
    }

    //验证
    if (type === 'start') {
        console.log("value",date.value,value); 
        uni.showToast({
            icon:"none",
            title:"不能比结束时间晚噢~",
            duration:1000
        })
        date.value='2000-10-01'
        nextTick(() => {
            date.value = value;
        });
        // console.log("value",value);
        return
    } else {
        uni.showToast({
            icon:"none",
            title:"不能比开始时间早噢~",
            duration:1000
        })
        end.value='2000-10-01'
        nextTick(() => {
            end.value = value;
        });

        return

    }
}
/**
 * 
 * @param {*更改的开始时间} start 
 * @param {*更改的结束时间} end 
 * 
 * 函数用于判断开始时间与结束时间的逻辑正确性
 */
const judgeTime=(start,end)=>{
    //格式化为时间戳
    const startTime= new Date(start).getTime();
    const endTime=new Date(end).getTime();

    if(startTime>endTime){
        return false
    }
    if(endTime<startTime){
        return false
    }
    return true
}

onMounted(()=>{
    if(formData.recruitmentPeriod.startDate!==''){
        date.value=formData.recruitmentPeriod.startDate
    }
    if(formData.recruitmentPeriod.endDate!==''){
        end.value=formData.recruitmentPeriod.endDate
    }
})

</script>

<template>
<view class="time-select">
    <view class="tip">请选择你的招聘时间范围</view>
    <view class="small-tip">时间范围越短，<span style="color: rgb(205, 15, 160);">优先度</span> 越高噢~</view>
	<view class="uni-list">
			<view class="uni-list-cell" style="color: rgb(74, 149, 0);">
				<view class="uni-list-cell-left" >
					开始招聘时间：
				</view>
				<view class="uni-list-cell-db">
					<picker mode="date" :value="date" :start="startDate" :end="endDate"  @change="bindDateChange($event,'start',date)">
						<view class="uni-input">{{date}}</view>
					</picker>
				</view>
			</view>
	</view>
    <view class="uni-list">
			<view class="uni-list-cell" style="color: rgb(165, 0, 0);">
				<view class="uni-list-cell-left" >
					结束招聘时间：
				</view>
				<view class="uni-list-cell-db">
					<picker mode="date" :value="end" :start="startDate" :end="endDate" @change="bindDateChange($event,'end',end)">
						<view class="uni-input">{{end}}</view>
					</picker>
				</view>
			</view>
	</view>
</view>
</template>

<style lang="scss">
.tip{
    text-align: center;
    font-size: 6vw;
    margin: 5vw;
}
.small-tip{
    font-size: 4vw;
    font-weight: bold;
    background-color: rgb(247, 250, 247);
    padding: 4vw 5vw;
    border-radius: 2vw;
    margin: 2vw 5vw;
}
.uni-list{
    font-size: 4.5vw;
    margin: 5vh 3vw;
    padding-left: 4vw;
    margin-bottom: 8vh;
    border-left: 1vw solid rgb(148, 39, 39);

    .uni-list-cell-left{
        font-weight: bold;
        padding-left: 2vw;
    }
    .uni-list-cell-db{
        padding-left: 2vw ;
    }
}
</style>
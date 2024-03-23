<script setup>
import {ref,reactive} from 'vue'
import topTitle from '@/components/topTitle.vue'

const daySelected=ref(0)
const dayList=reactive([false,false,false,false,false,false,false])
const day=reactive(['一','二','三','四','五','六','日'])
const freeTime=reactive([{
    dayofweek:"",
    timeSelectedList:[]
},{
    dayofweek:"",
    timeSelectedList:[]
},{
    dayofweek:"",
    timeSelectedList:[]
},{
    dayofweek:"",
    timeSelectedList:[]
},{
    dayofweek:"",
    timeSelectedList:[]
},{
    dayofweek:"",
    timeSelectedList:[]
},{
    dayofweek:"",
    timeSelectedList:[]
},])

const initFreeTime=()=>{
    day.forEach((e,index)=>{
        freeTime[index].dayofweek=e
        freeTime[index].timeSelectedList=[]
    })
}
initFreeTime()



let left=ref(3)
const week=reactive([])
const initWeek=(start,end)=>{
    for(let i=start;i<=end ; i++){
        week.push(i)
    }
}
initWeek(1,16)

const timeList=reactive([])
const time = reactive([])
const initTime = (start, end) => {
    let timeStr = ''
    for (let i = start; i <= end; i++) {
        timeStr = i + ':00' + '-' + i + ':30'
        time.push(timeStr)
        timeStr = ''
        timeStr = i + ':30' + '-' + (i + 1) + ':00'
        time.push(timeStr)
        timeList.push(false)
    }
}
initTime(8, 22)


const checkIsSpare=()=>{
    freeTime.forEach((e,index)=>{
        if(e.timeSelectedList.length>0){
            dayList[index]=true
        }else{
            dayList[index]=false
        }
    })
}
checkIsSpare()

const selectBox=(index)=>{
   uni.vibrateShort()
    daySelected.value=index
    left.value=3+(index*14)
    //切换后先清空再还原
    for (let i = 0; i < timeList.length; i++) {
        timeList[i]=false
    }
    //加载缓存
    if(freeTime[index].timeSelectedList.length>0){
        let arr=freeTime[index].timeSelectedList
        for (let i = 0; i < arr.length; i++) {
            let timeIndex=time.indexOf(arr[i])  
            timeList[timeIndex]=true         
        }
    }
    checkIsSpare()
}

const selectedTime=(index)=>{
   console.log(" time[index]", time[index]);
    if(timeList[index]){
        freeTime[daySelected.value].timeSelectedList=
        freeTime[daySelected.value].timeSelectedList.filter((e)=>{
            return e!==time[index]
        })
        timeList[index]=false
    }else{
        freeTime[daySelected.value].timeSelectedList.push(time[index])
        timeList[index]=true
    }
    checkIsSpare()
}


</script>
<template>
    <topTitle top-title="请选择您的空闲时间" />
    <view class="box">
        <!-- <view class="select-all">
            全选
            <checkbox
                :value="true"
                :checked="true"
            />
        </view> -->
        <!-- <view class="week-select">
            <view class="week" v-for="(w,index) in week" :key="index">第{{ w }}周</view>
        </view> -->
    </view>

  <view class="day-select">
    <view class="selected" :style="{'left':left+'vw'}"></view>
    <view class="day" v-for="(d,index) in day" :key="index" :class="{'active':dayList[index]}" @click="selectBox(index)">{{ d }}</view>
  </view>
  <view class="time-select">
    
  </view>

    <view>
	    <scroll-view  scroll-y="true" class="scroll-Y" @scrolltoupper="upper"
		@scrolltolower="lower" @scroll="scroll" :show-scrollbar="true">
            <view class="time scroll-view-item" v-for="(t,index) in time" :key="index" :class="{'active':timeList[index]}" @click="selectedTime(index)">{{ t }}</view>
	    </scroll-view>
    </view>
</template>



<style lang="scss">
.scroll-Y {
    margin: 0 auto;
        width: 95vw;
		height: 55vh;
        display: flex;
        text-align: center;
        border: 1vw solid #dedede;
        border-radius: 3vw;
        padding: 2vh 0;
    .scroll-view-item {
        display: inline-block;
		text-align: center;
		font-size: 36rpx;
	}
    .time{
        width: 35vw;
        font-size: 4vw;
        margin: 0.5vh 3vw; 
        padding: 1vh 2vw;
        text-align: center;
        border-radius: 0.5vw;  
        background-color: #e5e7eb;

        color: #000000;
    }
    .active{
        transition: all 0.3s;
        background-color: #000000;
        color: #fff;
    }
	}
.box{
    .select-all{
        font-size: 4vw;
        margin-left: 3vw;
        margin-bottom: 3vh;
}
}
.week-select{
    display: flex;
    flex-wrap: wrap;
    font-size: 4vw;
    justify-content: center;
    .week{
        width: 18vw;
        text-align: center;
        margin: 1vh 2vw;
        padding: 2vw;
        border-radius: 5vw;
        background-color: #e5e7eb;
    }

}
.day-select{
    position: relative;
    display: flex;
    justify-content: center;
    margin: 3vh 0;
    .day{
        text-align: center;
        width: 10vw;
        height: 10vw;
        line-height: 10vw;
        margin: 0 2vw;
        border-radius: 50%;
        background-color: #e5ebe8;
    }
    .selected{
        position: absolute;
        border: 1vw solid #000000;
        width: 10vw;
        height: 10vw;
        left: 3vw;
        z-index: -2;
        transition: all 0.3s;
        &::after{
            content: "";
            height: 12vw;
            width: 6vw;
            background-color: #ffffff;
            position: absolute;
            transform: translate(50%,-50%);
            top: 50%;
            right: 50%;
            z-index: -1;
        }
        &::before{
            content: "";
            height: 6vw;
            width: 12vw;
            background-color: #ffffff;
            position: absolute;
            transform: translate(50%,-50%);
            top: 50%;
            right: 50%;
            z-index: -1;
        }
    }
    .active{
        background-color: #000000;
        color: #fff;
    }
}

.time-select{
    display: flex;
    flex-direction: column;

}

</style>


<script setup>
import {ref,reactive} from 'vue'


const day=reactive(['一','二','三','四','五','六','天'])

const week=reactive([])
const initWeek=(start,end)=>{
    for(let i=start;i<=end ; i++){
        week.push(i)
    }
}
initWeek(1,16)

const time = reactive([])
const initTime = (start, end) => {
    let timeStr = ''
    for (let i = start; i <= end; i++) {
        timeStr = i + ':00' + '-' + i + ':30'
        time.push(timeStr)
        timeStr = ''
        timeStr = i + ':30' + '-' + (i + 1) + ':00'
        time.push(timeStr)
    }
}
initTime(8, 22)

</script>
<template>
    
    <view class="box">
        <view class="select-all">
            全选
            <checkbox
                :value="true"
                :checked="true"
            />
        </view>
        <view class="week-select">
        <view class="week" v-for="(w,index) in week" :key="index">第{{ w }}周</view>
    </view>
    </view>

  <view class="day-select">
    <view class="day" v-for="(d,index) in day" :key="index">星期{{ d }}</view>
  </view>
  <view class="time-select">
    <view class="time" v-for="(t,index) in time" :key="index">{{ t }}</view>
  </view>
</template>



<style lang="scss">

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
    display: flex;
    justify-content: center;
    margin: 3vh 0;
    .day{
        text-align: center;
        padding: 1vh 1vw;
        background-color: #e5e7eb;
    }
}

.time-select{
    display: flex;
    flex-direction: column;
    .time{
        border: #808080 solid 0.1vw; 
        margin: 1vh 5vw; 
        padding: 2vh 3vw;
      text-align: center;
      border-radius: 3vw;  
      background-color: #000000;
      color: #fff;
    }
}

</style>


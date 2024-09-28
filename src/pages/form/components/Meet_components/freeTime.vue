<script setup>
import { ref, reactive, onMounted } from 'vue'
import topTitle from '@/components/topTitle.vue'
import { useFormStore } from '@/stores/modules/formInfo'

const emit = defineEmits(['allow-next'])

const freeTime = useFormStore().applyformData.freeTime // pinia原始数据
const newDayList = reactive([])
const newTimeList = reactive([])
const daySelected = ref(0)
let left = ref(3)

// 初始化newDayList
// [{ day:'一', isActive: false }]
function initNewDayList() {
    const dayList = ['一', '二', '三', '四', '五', '六', '日']
    dayList.forEach((day, index)=>{
      newDayList[index] = {
        day,
        isActive: false
      }
    })
}
initNewDayList()

// 初始化newTimeList
// [{ time:'8:00-8:30', isSelected: false }]
function initNewTimeList() {
  const timeList = ((start, end)=>{
      let timeList = []
      for (let i = start; i < end; i++) {
          let frontHalf =  i + ':' + '00' + '-' + i + ':' + '30'
          let lastHalf = i + ':' + '30' + '-' + (i+1) + ':' + '00'
          timeList.push(frontHalf, lastHalf)
      }
      return timeList
  })(8, 24) // 生成 8点 - 24点 的时间表
  timeList.forEach((time, index)=>{
    newTimeList[index] = {
      time,
      isSelected: false
    }
  })
}
initNewTimeList()


// (当页面没有缓存时) 初始化pinia存储表
const initFreeTime = () => {
  newDayList.forEach((dItem, index) => {
    freeTime[index] = {
      dayofweek: dItem.day,
      timeSelectedList: []
    }
  })
}

// (当页面有缓存时) 获取第一个存在缓存的dayIndex显示
const showCache = () => {
  let flag = true
  // 为所有存在值的day绑定isActive = true
  freeTime.forEach((item, index)=> {
      if(item.timeSelectedList.length > 0){
          newDayList[index].isActive = true
          if(flag){
            daySelected.value = index
            flag = false
          }
      }
  })
  daySelected.value = flag ? 0 : daySelected.value // 确保在都没有选择时选择第一个
  selectDay(daySelected.value)
}


// 判断day中对应的列表是否为空
const checkIsSpare = () => {
  let isSpare = true
  isSpare = freeTime.every(item => item.timeSelectedList.length === 0)
  emit('allow-next', !isSpare)
}

// 选择Day
const selectDay = (index) => {
  uni.vibrateShort()
  daySelected.value = index
  left.value = 3 + index * 14
  // 切换后先清空再还原
  newTimeList.forEach(tItem => tItem.isSelected = false)
  // 加载缓存
  let cacheTimeList = freeTime[index].timeSelectedList
  if(cacheTimeList.length){
      newDayList[index].isActive = true
      for (let i = 0; i < cacheTimeList.length; i++) {
          newTimeList.forEach(tItem => {
              if(tItem.time === cacheTimeList[i]) tItem.isSelected = true
          })
      }
  }
  checkIsSpare()
}

// 选择Time
const selectedTime = (index) => {
  let dayShow = daySelected.value
  // 选择
  if(!newTimeList[index].isSelected){
      newTimeList[index].isSelected = true
      freeTime[dayShow].timeSelectedList.push(newTimeList[index].time)
      newDayList[dayShow].isActive = true
  }
  // 取消选择
  else{
      newTimeList[index].isSelected = false
      freeTime[dayShow].timeSelectedList =
      freeTime[dayShow].timeSelectedList.filter(time => time !== newTimeList[index].time)
      if(!freeTime[dayShow].timeSelectedList.length) newDayList[dayShow].isActive = false
  }
  checkIsSpare()
}

onMounted(() => {
  if (freeTime.length == 0) {
    initFreeTime()
  } else {
    showCache()
  }
})
</script>

<template>
  <top-title top-title="请选择您的空闲时间" />
  <view class="day-select">
    <view class="selected" :style="{ left: left + 'vw' }"></view>
    <view
      class="day"
      v-for="(dItem, index) in newDayList"
      :key="index"
      :class="{ active: dItem.isActive }"
      @click="selectDay(index)"
      >{{ dItem.day }}</view
    >
  </view>

  <view class="time-select"></view>

  <view>
    <scroll-view
      scroll-y="true"
      class="scroll-Y"
      @scrolltoupper="upper"
      @scrolltolower="lower"
      @scroll="scroll"
      :show-scrollbar="true"
    >
      <view
        class="time scroll-view-item"
        v-for="(tItem, index) in newTimeList"
        :key="index"
        :class="{ active: tItem.isSelected }"
        @click="selectedTime(index)"
        >{{ tItem.time }}</view
      >
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
  .time {
    width: 35vw;
    font-size: 4vw;
    margin: 0.5vh 3vw;
    padding: 1vh 2vw;
    text-align: center;
    border-radius: 0.5vw;
    background-color: #e5e7eb;

    color: #000000;
  }
  .active {
    transition: all 0.3s;
    background-color: #000000;
    color: #fff;
  }
}
.box {
  .select-all {
    font-size: 4vw;
    margin-left: 3vw;
    margin-bottom: 3vh;
  }
}
.week-select {
  display: flex;
  flex-wrap: wrap;
  font-size: 4vw;
  justify-content: center;
  .week {
    width: 18vw;
    text-align: center;
    margin: 1vh 2vw;
    padding: 2vw;
    border-radius: 5vw;
    background-color: #e5e7eb;
  }
}
.day-select {
  position: relative;
  display: flex;
  justify-content: center;
  margin: 3vh 0;
  .day {
    text-align: center;
    width: 10vw;
    height: 10vw;
    line-height: 10vw;
    margin: 0 2vw;
    border-radius: 50%;
    background-color: #e5ebe8;
  }
  .selected {
    position: absolute;
    border: 1vw solid #000000;
    width: 10vw;
    height: 10vw;
    left: 3vw;
    z-index: -2;
    transition: all 0.3s;
    &::after {
      content: '';
      height: 12vw;
      width: 6vw;
      background-color: #ffffff;
      position: absolute;
      transform: translate(50%, -50%);
      top: 50%;
      right: 50%;
      z-index: -1;
    }
    &::before {
      content: '';
      height: 6vw;
      width: 12vw;
      background-color: #ffffff;
      position: absolute;
      transform: translate(50%, -50%);
      top: 50%;
      right: 50%;
      z-index: -1;
    }
  }
  .active {
    background-color: #000000;
    color: #fff;
  }
}

.time-select {
  display: flex;
  flex-direction: column;
}
</style>


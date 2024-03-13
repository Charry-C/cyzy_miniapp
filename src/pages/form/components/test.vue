<template>
    <view class="content">
        <div>
            开始
        </div>
        <div>
            <picker mode="date" :value="startTime" @change="(e) => dateSelect(e.detail.value,'start')">
                <view>{{startTime}}</view>
            </picker>
        </div>
        <div>
            结束
        </div>
        <div>
            <picker mode="date" :value="endTime" @change="(e) => dateSelect(e.detail.value,'end')">
                <view>{{endTime}}</view>
            </picker>
        </div>
    </view>
</template>

<script setup>
    //#region import
    import { reactive, toRefs, onMounted, ref } from 'vue';
    //#endregion import
    
    //#region ref变量
    let startTime = ref();
    let endTime = ref();
    //#endregion ref变量
    

    //#region method
    function getCurrentTime() {
        let currentDate = new Date();
        let year = currentDate.getFullYear().toString().padStart(4, '0');
        let month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        let day = currentDate.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
    function dateSelect(selectDate,type){
        console.log(selectDate,type);
        if(type === "start"){
            // 选择时间比结束时间早
            if(!isLater(selectDate,endTime.value)){
                startTime.value = selectDate;
            }
        }else if(type === "end"){
            // 选择时间比开始时间晚
            if(isLater(selectDate,startTime.value)){
                endTime.value = selectDate;
            }
        }
        console.log(startTime.value,endTime.value);
    }
    function isLater(start,end){
        if(new Date(start) > new Date(end)) return true;
        return false;
    }

    function init() {
        let currentTime = getCurrentTime();
        startTime.value = currentTime;
        endTime.value = currentTime;
    }
    //#endregion method

    //#region init
    init();
    //#endregion init
</script>
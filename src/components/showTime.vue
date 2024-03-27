<script setup>
import { useFormStore } from '@/stores/modules/formInfo'

const time=[]
//初始化time选择列表
const rowTitle = (start, end) => {
    let timeStr = ''
    for (let i = start; i <= end; i++) {
        timeStr = i + ':00' + '-' + i + ':30'
        time.push(timeStr)
        timeStr = ''
        timeStr = i + ':30' + '-' + (i + 1) + ':00'
        time.push(timeStr)
    }
}
rowTitle(8, 23)

//初始化day选择列表
const day=['一','二','三','四','五','六','日']


const formData=useFormStore().applyformData



</script>

<template>
    <view class="show-time-box">
        <view class="column-title">
            <view class="tip">Time</view>
            <view class="unit-column-title" v-for="(columnTitle,index) in day" :key="index">{{ columnTitle }}</view>
        </view>
  	    <scroll-view  scroll-y="true" class="scroll-Y" @scrolltoupper="upper"
		@scrolltolower="lower" @scroll="scroll" :show-scrollbar="true">
        
            <view class="table-box" >

                <view class="row-title">
                    <view class="unit-row-title" v-for="(rowTitle,index) in time" :key="index">
                        {{rowTitle.replace('-',' ')}}
                    </view>
                </view>
                <view class="table-content" >
                    <view class="unit-column-content" v-for="(columnTitle,i) in day" :key="i">
                        <view class="unit-content" v-for="(rowTitle,j) in time" :key="j" :class="{'light':formData.freeTime[i].timeSelectedList.includes(rowTitle) }"></view>
                    </view>
                </view>
            </view>
	    </scroll-view>
    </view>
</template>



<style lang="scss">
.show-time-box{
    border: 0.5vw solid #d5d5d5;
    border-radius: 3vw;
    overflow: hidden;

    .column-title{
            height: 5vh;
            width: 100%;
            display: flex;
            .unit-column-title{
                flex: 1;
                height: 5vh;
                background-color: rgb(242, 242, 242);
                border-right: 1px solid #fff;
                text-align: center;
                line-height: 5vh;
                font-size: 4vw;

            }
            .tip{
                width: 10vw;
                height: 5vh;
                line-height: 5vh;
                text-align: center;
                font-size: 3vw;
                font-weight: bold;
                background-color: rgb(242, 242, 242);
                border-bottom: 1px solid #fff;
                border-right: 1px solid #fff;
            }
        }
    .scroll-Y {
        margin: 0 auto;
        width: 100%;
        height: 65vh;

    .table-box {
        display: flex;
        flex-wrap: wrap;

        .row-title{
            width: 10vw;
            background-color: #f0f0f0;
            border-right: 1px solid #fff;
            .unit-row-title{
                height: 15vh;
                border-bottom: 1px solid #fff;
                font-size: 3vw;
                line-height: 7.5vh;
                text-align: center;
            }
        }
        .table-content{
            display: flex;
            flex:8;
            width: 80vw;
            .unit-column-content{
                width: calc(100%/7);
                border-right: 1px solid #fff;
                .unit-content{
                    height: 15vh;
                    width: 100%;
                    background-color: #ffffff;
                    border-bottom: 1px solid #fff;
                   
                }
                &:nth-child(1){
                    .light{
                        background-color: rgb(255, 0, 183);
                    }
                }
                &:nth-child(2){
                    .light{
                        background-color: rgb(21, 255, 0);
                    }
                }

                &:nth-child(3){
                    .light{
                        background-color: rgb(255, 140, 0);
                    }
                }

                &:nth-child(4){
                    .light{
                        background-color: blue;
                    }
                }

                &:nth-child(5){
                    .light{
                        background-color: rgb(136, 0, 255);
                    }
                }

                &:nth-child(6){
                    .light{
                        background-color: rgb(255, 230, 0);
                    }
                }

                &:nth-child(7){
                    .light{
                        background-color: rgb(255, 0, 0);
                    }
                }



            }
        }
	}
    }
}
        

</style>
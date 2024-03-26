<script setup>

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


const day=['一','二','三','四','五','六','日']


</script>

<template>
  	    <scroll-view  scroll-y="true" class="scroll-Y" @scrolltoupper="upper"
		@scrolltolower="lower" @scroll="scroll" :show-scrollbar="true">
            <view class="table-box">
                <view class="column-title">
                    <view class="unit-column-title" v-for="(columnTitle,index) in day" :key="index">{{ columnTitle }}</view>
                </view>
                <view class="row-title">
                    <view class="unit-row-title" v-for="(rowTitle,index) in time" :key="index">
                        {{rowTitle.replace('-',' ')}}
                    </view>
                </view>
                <view class="table-content">
                    <view class="unit-column-content">
                        <view class="unit-content"></view>
                    </view>
                </view>
            </view>
	    </scroll-view>
</template>



<style lang="scss">
.scroll-Y {
        margin: 0 auto;
        width: 95vw;
        height: 65vh;
        border: 1vw solid #dedede;
    .table-box {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        .column-title{
            height: 5vh;
            width: 100%;
            background-color: rgb(255, 255, 255);
            display: flex;
            padding-left: 10vw;
            .unit-column-title{
                flex: 1;
                height: 5vh;
                background-color: rgb(242, 242, 242);
                border-right: 1px solid #fff;
                text-align: center;
                line-height: 5vh;
                font-size: 4vw;
            }
        }
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
                background-color: #dcdcdc;
                border-right: 1px solid #fff;
                .unit-content{
                    height: 15vh;
                    width: 100%;
                    background-color: rgb(178, 178, 178);
                    border-bottom: 1px solid #fff;
                }
            }
        }
	}
    }
</style>
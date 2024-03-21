<script setup>


</script>

<template>
    <view class="alblum-box root">
        <view class="title">社团相册</view>
        <swiper class="swiper" circular :indicator-dots="false" :autoplay="true" :interval="3000"
				:duration="1000" >
				<swiper-item>
					<view class="swiper-item" style="background-color: pink;">A</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item" style="background-color: greenyellow;">B</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item" style="background-color: blueviolet;">C</view>
				</swiper-item>
			</swiper>
    </view>
  
</template>



<style lang="scss">
.root{
    --bigFont:5.3vw;
    --middleFont:4vw;
    --samllFont:3.3vw
}
.alblum-box{
    border-bottom: 0.1vw solid #e8e8e8;
    padding: 3vw;
    margin: 0 2vw;
    .title{
        font-weight: bold;
        font-size: var(--bigFont);
        margin-bottom: 1vh;
    }
    .swiper {
            height: 300rpx;
        }
        .swiper-item {
            display: block;
            height: 300rpx;
            line-height: 300rpx;
            text-align: center;
        }
        .uni-bg-red{
            background-color: orange;
        }
}
</style>
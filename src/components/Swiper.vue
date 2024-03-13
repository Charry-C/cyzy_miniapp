<template>
	<view>
		<view class="uni-margin-wrap">
			<swiper class="swiper" 
            circular :indicator-dots="true"
             :autoplay="true"
              :interval="2000"
              indicator-color="rgba(0,0,0,0.2)"
              indicator-active-color="rgb(255, 0, 242)"
				:duration="500"
            @change="getIndex"
                >
				<swiper-item>
					<view class="swiper-item uni-bg-red">A123</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green">B213</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue">C231</view>
				</swiper-item>
			</swiper>
		</view>
		
	</view>
</template>
<script setup>
import {ref} from 'vue'
const activeIndex=ref(0)

function getIndex(e){
    console.log('触发轮播图change事件   ',e.detail);
}

</script>
<style>
	.uni-margin-wrap {
		width: 690rpx;
		width: 100%;
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
	.swiper-list {
		margin-top: 40rpx;
		margin-bottom: 0;
	}
	.uni-common-mt {
		margin-top: 60rpx;
		position: relative;
	}
	.info {
		position: absolute;
		right: 20rpx;

	}
	.uni-padding-wrap {
		width: 550rpx;
		padding: 0 100rpx;
	}
</style>    
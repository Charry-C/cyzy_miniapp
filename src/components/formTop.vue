<script setup>
const props=defineProps(['step','stepSum','kind'])
</script>

<template>
	<view class="top">
		<view class="step">
			{{props.step}}/{{props.stepSum}}
		</view>
		<view class="kind">{{ props.kind }}</view>
	</view>
</template>



<style lang="scss">
	.top{
		background-color: #ffffff;
		width: 100vw;
		position: fixed;
		top: 0;
		z-index: 999;
		display: flex;
		align-items: center;
		font-size: 3.7vw;
		.step{
			margin: 3vw 4vw;
		}
	}
</style>
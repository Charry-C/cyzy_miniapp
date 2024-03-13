<script setup>
import KindSelect from './components/KindSelect.vue';
import TitleForm from './components/TitleForm.vue';
import RecruitDep from './components/RecruitDep.vue'
import TagSelect from './components/TagSelect.vue';
import CampusSelect from './components/CampusSelect.vue';
import TimeSelect from './components/TimeSelect.vue';
import UploadPic from './components/UploadPic.vue';
import ConfirmForm from './components/ConfirmForm.vue'

import {ref,computed} from 'vue'


let step=ref(1)
// let a=ref(0)
// setInterval(()=>{
// 	a.value++
// },20)

const goNext=()=>{
	// a.value+=10
	if(step.value%8==0){
		step.value=1
	}else{
		step.value = step.value+1;
	}
}

const goBack=()=>{
	if(step.value==1){
		step.value=8
	}else{
		step.value = step.value-1;
	}
}


let isallow=computed(()=>{

})


</script>

<template>
	<view class="form">
		<view class="top">
		<view class="step">
			{{step}}/8
		</view>
		<view class="kind">招募发布</view>
	</view>
	
	<view class="form-con">
		<template v-if="step===1">
  			<KindSelect />
		</template>
		<template v-if="step===2">
			<TitleForm />
		</template>
		<template v-if="step===3">
			<RecruitDep />
		</template>
		<template v-if="step===4">
			<TagSelect />
		</template>
		<template v-if="step===5">
			<CampusSelect />
		</template>
		<template v-if="step===6">
			<TimeSelect />
		</template>
		<template v-if="step===7">
			<UploadPic />
		</template>
		<template v-if="step===8">
			<ConfirmForm />
		</template>
	</view>


	<view class="bottom-step">
		<view class="step-prog">
			<progress class="progress" :percent="step/8*100"  activeColor="#14a800" stroke-width="3" active="true" active-mode="forwards" duration="10"  />
		</view>
		<view class="step-box">
			<view class="back bottom-btn" @click="goBack">BACK</view>
			<view class="next bottom-btn" @click="goNext">NEXT</view>
		</view>
	</view>
	</view>

</template>

<style lang="scss">
//
.form{
	height: 100vh;
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
	.form-con{
		padding: 12vw 0 20vw 0;
	}
	.bottom-step{
		position: fixed;
		bottom: 0;
		z-index: 999;
		margin-top: 7vw;
		.step-box{
			background-color: #ffffff;
			display: flex;
			width: 100vw;
			margin: 0 auto;
			padding: 3vw 3vw;
			padding-bottom: 3vw;
			justify-content: space-between;

			.bottom-btn{
				font-size: 4.5vw;
				padding: 1.5vw 3vw;
				border-radius: 1vw;
			}
			.back{
				background-color: rgb(255, 255, 255);
				border: 1px solid #ccc;
			}
			.next{
				color: #fff;
				background-color: green;
			}
		}
	}
}
</style>
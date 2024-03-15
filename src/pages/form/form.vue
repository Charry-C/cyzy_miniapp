<script setup>
import KindSelect from './components/KindSelect.vue';
import TitleForm from './components/TitleForm.vue';
import RecruitDep from './components/RecruitDep.vue'
import TagSelect from './components/TagSelect.vue';
import CampusSelect from './components/CampusSelect.vue';
import TimeSelect from './components/TimeSelect.vue';
import UploadPic from './components/UploadPic.vue';
import ConfirmForm from './components/ConfirmForm.vue'
import Contact from './components/Contact.vue';
import {ref,reactive,computed} from 'vue'
import {useFormStore} from '@/stores/modules/formInfo.js'


//# utils-->pinia FormStore
const formStore=useFormStore()
console.log("111",formStore.formData);

//# region variate
let step=ref(1)
let stepSum=ref(9)
let allowList=reactive([
	{
		step:1,
		allowNext:false
	},
	{
		step:2,
		allowNext:false
	},
	{
		step:3,
		allowNext:false
	},
	{
		step:4,
		allowNext:false
	},
	{
		step:5,
		allowNext:false
	},
	{
		step:6,
		allowNext:true
	},
	{
		step:7,
		allowNext:false
	},
	{
		step:8,
		allowNext:true
	},
	{
		step:9,
		allowNext:true
	},
])
//# endregion variate


//# region method
const goNext=()=>{
	if(step.value%stepSum.value==0){
		step.value=1
	}else{
		step.value = step.value+1;
	}
}

const goBack=()=>{
	if(step.value==1){
		step.value=stepSum.value
	}else{
		step.value = step.value-1;
	}
}


const isAllow=(value)=>{
	console.log('get-allow',value);
	allowList[step.value-1].allowNext=value
}

//# endregion method


//# region computed


//# endregion computed


</script>

<template>
	<view class="form">
		<view class="top">
		<view class="step">
			{{step}}/{{stepSum}}
		</view>
		<view class="kind">招募发布</view>
	</view>
	
	<view class="form-con">
  			<KindSelect @get-allow="isAllow" v-if="step===1"/>
			<TitleForm @get-allow="isAllow" v-if="step===2"/>
			<RecruitDep @get-allow="isAllow"  v-if="step===3"/>
			<TagSelect @get-allow="isAllow" v-if="step===4"/>
			<CampusSelect @get-allow="isAllow" v-if="step===5"/>
			<TimeSelect @get-allow="isAllow" v-if="step===6"/>
			<Contact @get-allow="isAllow" v-if="step===7"/>
			<UploadPic @get-allow="isAllow" v-if="step===8"/>
			<ConfirmForm @get-allow="isAllow" v-if="step===9"/>
	</view>


	<view class="bottom-step">
		<view class="step-prog">
			<progress class="progress" :percent="step/stepSum*100"  activeColor="#14a800" stroke-width="3" active="true" active-mode="forwards" duration="10"  />
		</view>
		<view class="step-box">
			<view class="back bottom-btn" :style="{'visibility': step === 1 ? 'hidden' : 'visible'}" @click="goBack">BACK</view>
			<view class="next bottom-btn" @click="goNext" :class="{'disabled':!allowList[step-1].allowNext}">NEXT</view>
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
			.disabled{
				background-color: rgb(168, 168, 168);
			}
		}
	}
}
</style>
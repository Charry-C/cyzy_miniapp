<script setup>
import {ref} from 'vue'
import formTop from '@/components/formTop.vue';
import formProgress from '@/components/formProgress.vue';
import PersonalContact from './Meet_components/perContact.vue';
import TalentForm from './Meet_components/TalentForm.vue';
import salaryForm from './Meet_components/salaryForm.vue'

let step=ref(1)
let stepSum=ref(5)
let kind=ref('求职发布')


//# region method
const goNext=()=>{
	// a.value+=10
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


</script>

<template>
    <formTop :step="step" :step-sum="stepSum" :kind="kind"/>
    <view class="con">
        <PersonalContact v-if="step==1" />
        <TalentForm v-if="step==2"/>
		<salaryForm v-if="step==3"/>

    </view>
    <view class="bottom-step">
			<formProgress :step="step" :step-sum="stepSum" />
			<view class="step-box">
				<view class="back bottom-btn" @click="goBack">BACK</view>
				<view class="next bottom-btn" @click="goNext">NEXT</view>
				
			</view>
		</view>
</template>


<style lang="scss">

.con{
    margin-top: 20vw;
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

</style>
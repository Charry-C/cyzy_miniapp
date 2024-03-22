<script setup>
import {reactive, ref} from 'vue'
import formTop from '@/components/formTop.vue';
import formProgress from '@/components/formProgress.vue';
import PersonalContact from './Meet_components/perContact.vue';
import TalentForm from './Meet_components/TalentForm.vue';
import salaryForm from './Meet_components/salaryForm.vue'
import perDesc from './Meet_components/perDesc.vue'
import typeSelect from './Meet_components/typeSelect.vue'
import campusSelect from './Meet_components/campusSelect.vue'
import confirmForm from './Meet_components/confirmForm.vue';
import { useFormStore } from '@/stores/modules/formInfo';
import freeTime from './Meet_components/freeTime.vue'
const formData=useFormStore()

let step=ref(1)
let stepSum=ref(7)
let kind=ref('求职发布')
let allowList=reactive([
	{
		step:"step1",
		value:false
	},
	{
		step:"step2",
		value:false
	},
	{
		step:"step13",
		value:false
	},
	{
		step:"step4",
		value:false
	},
	{
		step:"step5",
		value:false
	},
	{
		step:"step6",
		value:false
	},
	{
		step:"step7",
		value:false
	},
])

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

const editComponet=(value)=>{
	step.value=value
	if(step.value==1){
		formData.reSet(formData.applyformData)
	}
}

const allowNext=(isAllow)=>{
	allowList[step.value-1].value=isAllow
	console.log(allowList);
	let flag=true
	for (let i = 0; i < allowList.length-1; i++) {
		if(!allowList[i].value){
			flag=false
			break
		}
	}
	allowList[allowList.length-1].value=flag
}


</script>

<template>
    <formTop :step="step" :step-sum="stepSum" :kind="kind"/>
    <view class="con">
		<freeTime v-if="step==1" />
		<typeSelect v-if="step==8"  @allow-next="allowNext"/>
        <TalentForm v-if="step==2" @allow-next="allowNext"/>
		<perDesc v-if="step==3" @allow-next="allowNext" />
		<salaryForm v-if="step==4" @allow-next="allowNext"/>
        <PersonalContact v-if="step==5" @allow-next="allowNext" />
		<campusSelect v-if="step==6" @allow-next="allowNext" />
		<confirmForm v-if="step==7" @edit-componet="editComponet" @allow-next="allowNext" />
    </view>
    <view class="bottom-step">
			<formProgress :step="step" :step-sum="stepSum" />
			<view class="step-box">
				<view class="back bottom-btn" @click="goBack" >BACK</view>
				<view class="next bottom-btn" @click="goNext" :class="{'disabled':!allowList[step-1].value}">NEXT</view>
				
			</view>
		</view>
</template>


<style lang="scss">

.con{
    margin-top: 8vh;
	padding-bottom: 12vh;
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
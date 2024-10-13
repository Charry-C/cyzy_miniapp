<script setup>
import formTop from '@/components/formTop.vue';
import formProgress from '@/components/formProgress.vue';
import KindSelect from './Recruit_compoents/KindSelect.vue';
import TitleForm from './Recruit_compoents/TitleForm.vue';
import RecruitDep from './Recruit_compoents/RecruitDep.vue'
import TagSelect from './Recruit_compoents/TagSelect.vue';
import CampusSelect from './Recruit_compoents/CampusSelect.vue';
import TimeSelect from './Recruit_compoents/TimeSelect.vue';
import UploadPic from './Recruit_compoents/UploadPic.vue';
import ConfirmForm from './Recruit_compoents/ConfirmForm.vue'
import Contact from './Recruit_compoents/Contact.vue';
import {ref,reactive,computed} from 'vue'
import {useFormStore} from '@/stores/modules/formInfo.js'


//# utils-->pinia FormStore
const formStore=useFormStore()
console.log("111",formStore.formData);

//# region variate
let step=ref(1)
let stepSum=ref(9)
let kind=ref('招募发布')
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
])

let sendAllow=ref(false)
//# endregion variate


//# region method
const goNext=()=>{
	if(step.value==allowList.length){
		sendAllow.value=allowList.every((e)=>{
			return e.allowNext==true
		})
	}

	if(allowList[step.value-1].allowNext){
		step.value = step.value+1;
	}
	else{
		uni.showToast({
		icon:"error",
		title:"请完整填写表单"
		})
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

const editComponent=(val)=>{
	step.value=val
}

const sendForm=()=>{
	if(sendAllow.value){
		uni.showToast({
		icon:"success",
		title:"发送成功"
	})
	}else{
		uni.showToast({
		icon:"warn",
		title:"请完善表单再发布"
	})
	}
}

//# endregion method


//# region computed


//# endregion computed


</script>

<template>
	<view class="form">
		<formTop :step="step" :step-sum="stepSum" :kind="kind"/>

		<view class="form-con">
				<KindSelect @get-allow="isAllow" @edit-componet="editComponent" v-if="step===1"/>
				<TitleForm @get-allow="isAllow" @edit-componet="editComponent" v-if="step===2"/>
				<RecruitDep @get-allow="isAllow" @edit-componet="editComponent"  v-if="step===3"/>
				<TagSelect @get-allow="isAllow" @edit-componet="editComponent" v-if="step===4"/>
				<CampusSelect @get-allow="isAllow" @edit-componet="editComponent" v-if="step===5"/>
				<TimeSelect @get-allow="isAllow" @edit-componet="editComponent" v-if="step===6"/>
				<Contact @get-allow="isAllow" @edit-componet="editComponent" v-if="step===7"/>
				<UploadPic @get-allow="isAllow" @edit-componet="editComponent" v-if="step===8"/>
				<ConfirmForm @get-allow="isAllow" @edit-componet="editComponent" v-if="step===9"/>
		</view>


		<view class="bottom-step">
			<formProgress :step="step" :step-sum="stepSum" />
			<view class="step-box">
				<view class="back bottom-btn" :style="{'visibility': step === 1 ? 'hidden' : 'visible'}" @click="goBack">BACK</view>
				<view class="next bottom-btn" @click="goNext" :class="{'disabled':!allowList[step-1].allowNext}" v-if="step<stepSum">NEXT</view>
				<view class="next bottom-btn" @click="sendForm" :class="{'disabled':!sendAllow}" v-if="step==stepSum">Send</view>
			</view>
		</view>
	</view>

</template>

<style lang="scss">
//
.form{
	height: 100vh;

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

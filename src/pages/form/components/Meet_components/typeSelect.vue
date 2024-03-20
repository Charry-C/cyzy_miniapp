<script setup>
import {onMounted, reactive,ref,nextTick} from 'vue'
import topTitle from '@/components/topTitle.vue';
import selectBox from '@/components/selectBox.vue';
import { useFormStore } from '@/stores/modules/formInfo';

let formData=useFormStore().applyformData
const emit =defineEmits(['allow-next'])

const list=reactive([{
	title:"技术型",
	value:false,
	tip:"诚心为团队社团提供技术支持"
},{
	title:"代工跑腿型",
	value:false,
	tip:"一心为财子财女们提供代工跑腿服务"
},])




//检查函数
const checkForm=()=>{
	if(formData.applyType==''){
		console.log("typeselect:nogogo");
		emit('allow-next',false)
	}else{
		console.log("typeselect:gogo");
		emit('allow-next',true)
		console.log("formData.applyType",formData.applyType);
		const selectedItem=list.filter((e)=>{
			return e.title==formData.applyType
		})
		selectedItem[0].value=true
	}

}

const selectedBox=(selectedIndex)=>{
    uni.vibrateShort()
	list.forEach((e,index)=>{
		e.value=false
		if(selectedIndex==index){
			e.value=true
			formData.applyType=e.title
		}
	})
	checkForm()
}

onMounted(()=>{
	checkForm()
})

</script>

<template>
    <topTitle topTitle="请选择您要推荐自己的选型" />
	<selectBox  :box-list="list" @check-box="selectedBox"/>
  
</template>



<style lang="scss">

</style>
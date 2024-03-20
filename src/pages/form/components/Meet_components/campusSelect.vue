<script setup>
import {onMounted, reactive,ref} from 'vue'
import selectBox from '@/components/selectBox.vue';
import topTitle from '@/components/topTitle.vue';
import { useFormStore } from '@/stores/modules/formInfo';

const emit=defineEmits(['allow-next'])
const formData=useFormStore().applyformData
const list=reactive([
    {
	    title:"佛山校区",
	    value:false,
    },
    {
	    title:"广州校区",
	    value:false,
    },
    {
	    title:"校区不限",
	    value:false,
    },
])

const checkAllow=()=>{
	//检查缓存
	if(formData.applyCampus){
		list.forEach((e)=>{
			if(e.title==formData.applyCampus){
				e.value=true
			}
		})
		emit('allow-next',true)
	}else{
		emit('allow-next',false)
	}
}


const selectedBox=(selectedIndex)=>{
    uni.vibrateShort()
	list.forEach((e,index)=>{
		e.value=false
		if(selectedIndex==index){
			e.value=true
			formData.applyCampus=e.title
		}
	})
	emit('allow-next',true)
}

onMounted(()=>{
	checkAllow()
})
</script>

<template>
  <topTitle top-title="请选择您所在的校区" />
  <selectBox :box-list="list" @check-box="selectedBox" />
</template>


<style lang="scss">

</style>
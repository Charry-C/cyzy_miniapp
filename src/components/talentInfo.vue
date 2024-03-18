<script setup>
import {ref,reactive} from 'vue'
const bindPickerChange=(e)=>{
    index.value=e.detail.value
}

  const jobList=reactive([
    '数据分析师',
    'UI设计师',
    '前端开发工程师',
    '后端开发工程师',
    'AI开发工程师'
  ])

  const index=ref(0)
</script>

<template>
  
    <view class="talent-card">
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					职位:
				</view>
				<view class="uni-list-cell-db">
					<picker :range="jobList"  @change="bindPickerChange" :value="index">
						<view class="uni-input">{{ jobList[index] }}</view>
					</picker>
				</view>
			</view>
		</view>
    </view>
    <salaryForm />
    
</template>
  

  
  <style lang="scss">
  
  </style>
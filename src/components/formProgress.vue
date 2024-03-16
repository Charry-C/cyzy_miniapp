<script setup>
const props=defineProps(['step','stepSum'])
</script>
<template>
	<view class="step-prog">
		<progress class="progress" :percent="step/stepSum*100"  activeColor="#14a800" stroke-width="3" active="true" active-mode="forwards" duration="10"  />
	</view>
</template>


<style>

</style>
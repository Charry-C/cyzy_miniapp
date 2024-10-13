<script setup>
import topBackBar from "@/components/topBackBar.vue";
import { onLoad } from "@dcloudio/uni-app"
import { ref } from 'vue'
import recruitDetail from './Recruit_detail/recruitDetail.vue'
import meetDetail from './Meet_detail/meetDetail.vue';


let mode = ref()
onLoad((options) => {
  mode.value = options.mode
})


</script>

<template>
  <topBackBar />
  <view class="view con">
    <recruitDetail v-if="mode == 1" />
    <meetDetail v-if="mode == 2" />
  </view>

</template>

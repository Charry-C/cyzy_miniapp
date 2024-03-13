<script setup lang="ts">
import { useMemberStore } from '@/stores/modules/member'
import '@/utils/http'
import {http} from '@/utils/http'
import profileVue from './components/profile.vue'
const getData=async ()=>{
   const res=await http({
    method:'GET',
    url:"https://mock.apifox.com/m2/3949903-0-default/148200529"
  })
  console.log('获取数据',res);
  
}
const memberStore = useMemberStore()
</script>

<template>
  <!-- <view class="my">
    <view>会员信息：{{ memberStore.profile }}</view>
    <button
      @tap="
        memberStore.setProfile({
          nickname: '黑马先锋ss',

        })
      "
      size="mini"
      plain
      type="primary"
    >
      保存用户信息
    </button>
    <button @tap="memberStore.clearProfile()" size="mini" plain type="warn">清理用户信息</button>
    <button @tap="getData()" size="mini" plain type="warn">发送请求</button>
  </view> -->
  <profileVue />
  
</template>

<style lang="scss">
//
</style>

<script setup>
import { useMemberStore } from '@/stores/modules/member'
import '@/utils/http'
import { http } from '@/utils/http'
import profileVue from './components/profile.vue'
const getData = async () => {
  const res = await http({
    method: 'GET',
    url: "https://mock.apifox.com/m2/3949903-0-default/148200529"
  })
  console.log('获取数据', res);
}
const memberStore = useMemberStore()
</script>

<template>
  <profileVue />
</template>

<style lang="scss">
//</style>

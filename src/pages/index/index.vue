<script setup>
import tabCom from './components/tabCom.vue';
import navBar from '@/components/navBar.vue';
</script>

<template>
  <navBar title="财遇知音" :is-need-search="true" />
  <tabCom />
</template>

<style lang="scss">
//
page {
  height: 100%;
  overflow: hidden;
}
</style>

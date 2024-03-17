<script setup>
import { useFormStore } from '@/stores/modules/formInfo';
import RecruitForm from './components/RecruitForm.vue';
import MeetForm from './components/MeetForm.vue';

let formChoose=useFormStore().choose

</script>

<template>
  <RecruitForm v-if="formChoose==1"/>
  <MeetForm v-if="formChoose==2"/>
</template>


<style>

</style>
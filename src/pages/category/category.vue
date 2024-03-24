<script setup>
import { useFormStore } from '@/stores/modules/formInfo';
import VerifyStu from '@/components/VerifyStu.vue';
import {ref,onUnmounted,onMounted,nextTick} from 'vue'
//utils

const FormStore=useFormStore()


//#ref


const popup=ref()

//# method
const checkComfirm=(choose)=>{
  FormStore.choose=choose
  uni.navigateTo({ url:'../form/form'})
  
}

onMounted(()=>{
  console.log('guazaile');

})

onUnmounted(()=>{
  console.log('xiaochule');
})

</script>

<template>
  <view class="category">
    <view class="bg">财遇知音</view>
    <view class="select-form">
      <view class="go-box">
         <button class="go-form" @click="true==false?popup.open():checkComfirm(1)" >
					 发布队伍-寻财才
				</button>
      </view>
      <view class="go-box">
         <button class="go-form" @click="true==false?popup.open():checkComfirm(2)" >
          推荐自己-遇知音 
				</button>
        </view>
    </view>
    <uni-popup ref="popup" type="center" background-color="white" v-if="true">
      <VerifyStu @close-pop="popup.close()"/>
    </uni-popup>
  </view>
</template>

<style lang="scss">
//
.bg{
  text-align: center;
  width: 100%;
  line-height: 50vh;
  font-size: 10vw;
  color: #ffffff;
  font-weight: bold;
  height: 50vh;
  background-image: linear-gradient(180deg, rgba(0, 204, 255, 0.501) 0%, rgba(255, 255, 255, 0.464) 100%);

}
.select-form{
  display: flex;
  flex-direction: column;
  margin-top: 10vh;
  .go-box{
    position: relative;
    margin:5vh auto ;
    width: 80vw;
    height: 15vw;
    border-radius: 3vw;
    text-align: center;
    color: #fff;
    font-size: 5vw;
    font-weight: bolder;
    line-height: 15vw;
    &:nth-child(1){
      .go-form{
        background-color: #4d91ff;
        color: #fff;
        box-shadow: rgba(82, 177, 255, 0.658) 0px 4px 6px -1px, rgba(0, 93, 30, 0.404) 0px 2px 4px -1px;
      }
    }
    &:nth-child(2){
      .go-form{
      background-color: #14a800;
      box-shadow: rgba(0, 255, 119, 0.509) 0px 4px 6px -1px, rgba(132, 139, 0, 0.237) 0px 2px 4px -1px;
      color: #ffffff;
      }
    }
    .go-form{
      height: 100%;
      width: 100%;
      border-radius: 3vw;
      line-height: 15vw;

      &::before{
      content: ">";
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      margin-right: 3vw;
      font-size: 4vw;
    }
    }


    .icon{
      margin-top: 1vw;
    }
  }
}
</style>

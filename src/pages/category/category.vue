<script setup>

import VerifyStu from '@/components/VerifyStu.vue';
import {ref} from 'vue'
//#ref

const popup=ref()

//# method
const checkComfirm=()=>{
  
}

</script>

<template>
  <view class="category">
    <image src="../../static/images/center_bg.png"></image>
    <view class="select-form">
      <view>
         <button class="go-form" @click="popup.open()">
					 发布队伍-寻财才
				</button>
        </view>
      <view>
         <navigator url="navigate/navigate?title=navigate" hover-class="navigator-hover" class="go-form">
          推荐自己-遇知音 
				</navigator>
        </view>
    </view>
    <uni-popup ref="popup" type="center" background-color="white">
      <VerifyStu />
    </uni-popup>
  </view>
</template>

<style lang="scss">
//
image{
  height: 45vh;
}
.select-form{
  display: flex;
  flex-direction: column;
  margin-top: 8vh;
  view{
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
    .go-form{
      height: 100%;
      width: 100%;
      border-radius: 3vw;
    }
    &::before{
      content: ">";
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      margin-right: 3vw;
      font-size: 4vw;
    }
    &:nth-child(1){
    background-color: rgb(43, 226, 192);
    box-shadow: rgba(0, 188, 135, 0.658) 0px 4px 6px -1px, rgba(0, 93, 30, 0.404) 0px 2px 4px -1px;

    }
    &:nth-child(2){
    background-color: rgb(255, 243, 21);
    box-shadow: rgba(148, 198, 0, 0.509) 0px 4px 6px -1px, rgba(132, 139, 0, 0.237) 0px 2px 4px -1px;
    color: #000;

    }
    .icon{
      margin-top: 1vw;
    }
  }
}
</style>

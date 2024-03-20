<script setup>
import {ref,reactive,nextTick} from 'vue'
import topTitle from '@/components/topTitle.vue';
import topTitleDesc from '@/components/topTitleDesc.vue'

import warnTipVue from "@/components/warnTip.vue";


let salary=ref()
const warnTip=ref(false)
let i=1


//后续改进使用正则
const checkForm=(e)=>{
    nextTick(()=>{
           console.log("nextYtick");
        })
    let target=e.target.value
    if(target.indexOf(".")!==-1){
        console.log("asdas",target);
        let index=(target+'').indexOf(".")
        console.log("index",index);
        const float=(target).substring(index,index+3)
        console.log("float",float);
        target=parseInt(target)+float
    
        nextTick(()=>{
            salary.value=target
        })
        
        return
    }
    
    if(target.length>3){
        warnTip.value=true
        nextTick(()=>{
            salary.value=0
        })
        return
    }else{
        warnTip.value=false

    }

    salary.value=target
}


</script>

<template>
  <topTitle topTitle="现在,来填写一下您的期望报酬吧" />
  <topTitleDesc topTitleDesc="您可以参考一下别人报酬,不要太高噢,低一点更受欢迎~" />
  
    <view class="salary-box">

        <input
            type="digit"
            class="ipt"
            v-model="salary"
            placeholder="0.00"
            placeholder-class="input-placeholder"
            @input="checkForm($event)"
        />
        <view class="unit">￥/次</view>
    </view>
    <warnTipVue warnTip="需要控制在0.00-1000￥区间内" v-if="warnTip"/>
</template>


<style lang="scss">
.input-placeholder{
    line-height: 5.5vh;
}
.salary-box{
    display: flex;
    align-items: center;
    margin-top: 2vh;
    padding: 0 3vw;
    .ipt{
        border: 0.5vw solid #bcbcbc;
        border-radius: 2vw;
        height: 5.5vh;
        width: 30vw;
        padding-right: 2vw;
        text-align: right;
        font-size: 4vw;
        line-height: 5.5vw;
    }

}

</style>
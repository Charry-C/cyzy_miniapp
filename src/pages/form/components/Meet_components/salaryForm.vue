<script setup>
import {ref,reactive,nextTick} from 'vue'
import topTitle from '@/components/topTitle.vue';
import topTitleDesc from '@/components/topTitleDesc.vue'

import warnTipVue from "@/components/warnTip.vue";


let salary=ref()
const warnTip=ref(false)

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
        salary.value=target

        nextTick(()=>{
            a=2
        })
        
        return
    }
    


    if(target>500 || target<=0 || isNaN(target)){
        warnTip.value=true
        target=0
    }else{
        warnTip.value=false

    }

    console.log(21312);
    salary.value=target
}


</script>

<template>
  <topTitle topTitle="现在,来填写一下你的工资信息吧" />
  <topTitleDesc topTitleDesc="您可以参考一下别人薪资,不要太高噢,低一点更受欢迎~" />
  
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
    <warnTipVue warnTip="需要控制在0.00-500.00￥区间内" v-if="warnTip"/>
</template>


<style lang="scss">
.input-placeholder{
    line-height: 5.5vh;
}
.salary-box{
    display: flex;
    align-items: center;
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
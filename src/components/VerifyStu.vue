<script setup>
import {ref} from 'vue'
let verify=ref(false)
let emit=defineEmits(['close-pop'])

const submit=()=>{
    uni.vibrateShort()
    setTimeout(()=>{
        verify.value=true
        uni.navigateTo({ url:'../form/form'})
        emit('close-pop')
    },5000)
    
}


</script>

<template>
    <view class="verify-stu">
        <view class="tip">学生认证</view>
        <view class="small-tip">
            请进行学生认证，以便我们更好的确认您的身份真伪
        </view>
        <view class="stu-form">
           <input class="uni-input"  placeholder="请填写您的姓名" />
            <input class="uni-input"  placeholder="请填写您的学号" />
            <input class="uni-input"  placeholder="请填写您的手机号" />
        </view>
        <view class="verify-info">
            <button class="submit" @click="submit">
                提交认证
            </button>
            <view class="state" :class="{'acitve':verify}">
                {{verify==true?"已通过":"未通过"}}
            </view>
        </view>
  </view>
</template>

<style lang="scss">

.verify-stu{
    padding:8vw 5vw;
    .tip{
        font-size: 5vw;
        font-weight: bold;
        margin: 4vw 0;
    }
    .small-tip{
        font-size: 3.5vw;
        margin-bottom: 5vw;
    }
    .stu-form{
        margin-bottom: 10vw;
        .uni-input{
        margin: 3vw 0;
        height: 6vh;
        line-height: 6.5vh;
        padding: 0 2vw;
        font-size: 3.5vw;
        border: 0.5vw solid #ccc;
        border-radius: 1vw;
    }
    }
    .verify-info{
        display: flex;
        justify-content: space-between;
        align-items:flex-end;
        .submit{
            font-size: 3.8vw;
            margin: 0;
            background-color: #000;
            color: #fff;
            border-radius: 1vw;
            padding: 0vw 4vw;
        }
        .state{
            font-size: 3vw;
            background-color: rgb(193, 193, 193);
            // background-color: rgb(0, 145, 5);
            color: #fff;
            padding: 1vw 2vw;
            border-radius: 1vw;
        }
        .acitve{
        background-color: rgb(10, 207, 10);
        }

    }
}
</style>
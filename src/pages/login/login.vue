<script setup>
//
const logIn = function () {
  wx.login({
    success(res) {
      console.log(res.code);
      uni.switchTab({
        url: '/pages/index/index',
      })
    },
    fail() {

    }
  })
  wx.getUserInfo({
    withCredentials() {

    },
    success(res) {
      console.log(res);
    }
  })
}

</script>

<template>
  <view class="login">
    <input type="text" value="123">
    <input type="text" value="123">
    <button @click="logIn">登录</button>
  </view>
</template>

<style lang="scss">
.login {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 80vw;
  height: 30vh;
  background-color: aqua;
  transform: translate(-50%, 50%);
  top: 50%;
  left: 50%;
}

input {
  background-color: #fff;
}
</style>

<script setup>
    const {safeAreaInsets}=uni.getSystemInfoSync()

    const onLogout=()=>{
        uni.showModal({
            content:'真的要退出吗,真的吗真的吗',
            success:(res)=>{
                if(res.confirm){
                    console.log(1121);
                }else{
                    console.log(322222);
                }
            }
        })
    }
</script>


<template>
<view class="profile-box" :style="{paddingTop:safeAreaInsets.top*2+'px'}">
    <view class="avatar-box">
        <view class="avatar"></view>
        <view class="name">Charry</view>
    </view>
    <view class="detail-info">
        <view class="info-box">
            <view class="num">1</view>
            <view class="type">我的收藏</view>
        </view>
        <view class="info-box">
            <view class="num">2</view>
            <view class="type">我的求职</view>
        </view>
        <view class="info-box">
            <view class="num">3</view>
            <view class="type">我的招聘</view>
        </view>
    </view>
    
</view>
<view class="uni-info">
    <view class="item">招聘合作</view>
    <view class="item">关于财遇知音</view>
    <view class="item">意见反馈</view>
</view>


</template>

<style lang="scss"  >
.profile-box{
    color: #555151;
  // background-image: linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%);
  background-image: linear-gradient(180deg, #2bffd174 0%, #6afffa7c 50%,#ffffff15 100%,);
  padding-bottom: 4vw;
    .avatar-box{
        display: flex;
        align-items: center;
        font-size: 4.5vw;
        font-weight: bold;
        padding: 5vw;
        margin-left: 5vw;
        .avatar{
        width: 15vw;
        height: 15vw;
        margin-right: 3vw;
        background-color:rgb(255, 255, 255);
        border-radius: 50%;
        }
    }
    .detail-info{
        display: flex;
        justify-content: space-evenly;
        .info-box{
            text-align: center;
            padding: 4vw;
            .num{
                font-weight: bold;
                margin-bottom: 1vw;
            }   
            .type{
                font-size: 3vw;
            }   
            
        }
    }
}
.uni-info{
    .item{
        position: relative;
        font-size: 4vw;
        padding: 3vw;
        margin: 5vh;
        font-weight: bold;
        &::before{
      content: ">";
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      font-size: 3.8vw;
      color: #c1c0c0;
    }
    }
}
.logout{
    margin: 10vh auto;
    color: #fff;
    width: 70vw;
    background-color: #FFBBEC;
    padding: 2.5vw;
    border-radius:2vw;
    font-weight: bold;
    text-align: center;
    box-shadow: rgba(207, 2, 183, 0.25) 0px 4px 8px -2px, rgba(131, 1, 97, 0.08) 0px 0px 0px 1px;
}
</style>
<script setup>


const mock={
    name:"张同学",
    sex:"男",
    location:"佛山校区",
    avatar:""
}


</script>

<template >
    <view class="perinfo-box">
        <view class="avatar"></view>
       <view class="textInfo">
        <view class="name-box"><uni-icons type="contact"></uni-icons> {{mock.name}}</view>
        <view class="location"><uni-icons type="location-filled"></uni-icons> {{ mock.location }}</view>
       </view>
    </view>
</template>



<style lang="scss">
.perinfo-box{
    border-bottom: 0.1vw solid #e8e8e8;
    padding: 3vw;
    margin: 0 2vw;
    display: flex;
    align-items: center;
    .avatar{
        width: 15vw;
        height: 15vw;
        background-color: pink;
        border-radius: 50%;
        margin-right: 5vw;
    }
    .textInfo{
        font-weight: bold;
        font-size: 4.5vw;

    }


}

</style>
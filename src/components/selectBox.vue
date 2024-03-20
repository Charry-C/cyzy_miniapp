<script setup>
    const props=defineProps(['boxList'])
    const emits=defineEmits(['check-box'])
</script>

<template>
    <view class="select-box">
        <view class="select-box-item" :class="{ 'active-select': item.value }"  v-for="(item,index) in boxList" :key="index"  @click="()=>emits('check-box',index)">
            <view class="box-title">
                <view class="item-title">{{ item.title }}</view>
                <label class="radio"><radio :checked="item.value" /></label>
            </view>
            <view class="small-tip" v-if="item.tip" >
                {{ item.tip }}
            </view>
        </view>
  </view>
</template>



<style lang="scss">
.select-box{
    display: flex;
    flex-direction: column;
    padding: 0 3vw;
    justify-content: space-between;
    .select-box-item{
        border: 0.5vw solid #ebebeb;
        width: 95vw;
        padding: 7vw 5vw 10vw 5vw;
        margin: 3vw auto;
        border-radius: 1.5vw;

        .box-title{

            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 3vh;
            .item-title{
                font-size: 5vw;
                font-weight: bold;
            }
        }
        .small-tip{
            margin-top: 10vh;
        }

    }
    .active-select{
            border: 0.5vw solid #108a00;
            background-color: #f7faf7;
        }
}

</style>
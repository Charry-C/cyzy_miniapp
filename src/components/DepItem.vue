<script setup>
//
const props = defineProps({
  num: Number,
});

</script>

<template>
  <view class="dep-item">
    <input class="uni-input"  :placeholder="`部门${num}名称`"  @click="add"/>
    <view class="uni-textarea">
		<textarea class="textarea"  placeholder=" 部门介绍\n \n1.部门任务\n2.部门活动\n3.部分福利" ></textarea>
	</view>
  </view>
</template>

<style lang="scss">
.dep-item{
    // position: relative;
    // left: 0;
    // background-color: #000000;
    .uni-input{
        height: 6vh;
        line-height: 6.5vh;
        padding: 0 2vw;
        font-size: 3.5vw;
        border: 0.5vw solid #ccc;
        border-radius: 1vw;
    }
    .uni-textarea{
        margin: 2vw auto;
        display: flex;
         justify-content: center;
        .textarea{
            white-space: pre-wrap;
            width: 100%;
            line-height: 5vw;
            padding: 2vw;
            font-size: 3.5vw;
            border-radius: 1vw;
            border: 0.5vw solid #ccc;
        }
    }

}
</style>
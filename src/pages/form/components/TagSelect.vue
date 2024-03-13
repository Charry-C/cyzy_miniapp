<script setup>
//
import {reactive} from 'vue'

let tagList=reactive([
    "免早",
    "积累技能",
    "脱单",
    "定期团建",
    "社交能力",
    "收获快乐",
    "师兄师姐热心",
    "积累人脉",   
])
let tagSelected=reactive([])


const selectTag=(tag)=>{
    if(tagSelected.length<4){
        console.log(tag);
        tagSelected.push(tag)
        let tagIndex=tagList.indexOf(tag);
        tagList.splice(tagIndex,1)
    }else{
        uni.showToast({
            icon:'none',
            title:'最多选择4个标签'
        })
    }
}

const cancelSelect=(tag)=>{
    console.log(tag);
    tagList.push(tag)
    let tagIndex=tagSelected.indexOf(tag);
    tagSelected.splice(tagIndex,1)
}

</script>

<template>
  <view class="tag-select">
    <view class="tip">
        选择你们社团的标签吧~
    </view>
    <view class="my-select-box"  v-if=" tagSelected.length!==0 "  >
        <view class="my-select-title">
            社团的标签
        </view>
        <view class="my-select-list">
            <view class="my-tag" v-for="mytag in tagSelected" :key="mytag" @click="cancelSelect(mytag)" >{{ mytag }}</view>
        </view>
    </view>
    <view class="tag-list-box">
        <view class="tag-list-title">
            精选标签
        </view>
        <view class="tag-list">
            <view class="tag" v-for="tag in tagList" :key="tag" @click="selectTag(tag)">{{ tag }}</view>
        </view>
    </view>
  </view>
</template>

<style lang="scss">
//
.tag-select{
    padding: 0 3vw;
    .tip{
        font-size: 6vw;
        margin: 10vw auto;
        text-align: center;
    }
    .my-select-box{
        margin-bottom: 3vh;
        .my-select-title{
            font-size: 4.5vw;
            font-weight: bold;
        }
        .my-select-list{
            .my-tag{
                display: inline-block;
                border-radius: 5vw;
                margin: 2vw;
                background-color: #18a808;
                color: #fff;
                padding: 2vw 3vw;
            }
        }
    }
    .tag-list-box{
        .tag-list-title{
            font-size: 4.5vw;
            font-weight: bold;
        }
        .tag-list{
            .tag{
                display: inline-block;
                border-radius: 5vw;
                margin: 2vw;
                background-color: #000;
                color: #fff;
                padding: 2vw 3vw;
            }
        }
    }
}
</style>
<script setup>
import {ref } from 'vue'
import '@/static/cssStyle/iconfont.css'
const props=defineProps(['titleShowObj'])

const mock={
    clubName:"数学建模研究社",
    // gameName:"三创赛",
    tagList:['免早','福利多多','培训多多'],
}

</script>

<template>
    <view class="title-show-box root">
        <view class="club-name">
            {{ mock.clubName }}
        </view>
        
        <view class="game-name" v-if="mock.gameName">
            <view style="font-weight: normal; display: inline-block;"><uni-icons type="medal" size="25"></uni-icons>参与比赛：</view>{{ mock.gameName }}
        </view>
        <view class="tag-list">
            <view class="tag" v-for="(tag,index) in mock.tagList" :key="index">{{ tag }}</view>
        </view>
    </view>
  
</template>



<style lang="scss">
.root{
    --bigFont:8vw;
    --middleFont:4vw;
    --samllFont:3.3vw
}
.title-show-box{
    border-bottom: 0.1vw solid #e8e8e8;
    padding: 3vw;
    padding-top: 0vh;
    margin: 0 2vw;
    .club-name{
        font-size: var(--bigFont);
        font-weight: bold;
        margin: 1vh 0vw;
    }
    .game-name{
        font-size: var(--middleFont);
        font-weight: bold;
        margin: 1vh 0vw;
    }
    .tag-list{
        .tag{
            display: inline-block;
            background-color: #f1f1f1;
            padding: 0.3vh 1.5vw;
            border-radius: 1vw;
            margin: 0.5vh 1vw;
            font-size: var(--samllFont);
            color: #2c2c2c;
        }
    }
}

</style>
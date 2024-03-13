<script setup>
// import Swiper from '@/components/Swiper.vue';
import { onLoad } from "@dcloudio/uni-app"
import {ref, reactive} from 'vue'
import { getCardInfoApi } from "@/services/index"

const getCardInfo=async ()=>{
  const cardInfo=await getCardInfoApi()
  console.log("首页卡片数据",cardInfo.data.data);
  return cardInfo.data.data
}

const cardData=reactive([])

onLoad(async()=>{
  const data = await getCardInfo();
  console.log("data",data);
  cardData.push(...data); // 使用concat方法合并数组
  console.log(cardData);
	})


  const triggered=ref(false)

  async function refreshData(){
  triggered.value=true
  const data = await getCardInfo();
  console.log("data",data);
  cardData.unshift(...data); 
  console.log(123);
  triggered.value=false
  console.log(triggered.value);
  }



//获取屏幕安全距离
const {safeAreaInsets}=uni.getSystemInfoSync()
console.log(safeAreaInsets);


const tabIndex=ref(0)
const scrollVal=ref(0)


function changeTab(tab){
  tabIndex.value=tab
  scrollVal.value=tab*uni.getWindowInfo().screenWidth
}

function scroll(e) {
  const w=uni.getWindowInfo().screenWidth
  console.log(e.detail);
    if(e.detail.deltaX<0 && e.detail.scrollLeft>120){
      changeTab(1)
      console.log(11111);
    }else if(e.detail.deltaX<0 && e.detail.scrollLeft<=120){
      changeTab(0)
      console.log(2222);

    }
    if(e.detail.deltaX>0 && e.detail.scrollLeft>153){
      changeTab(1)
      console.log(3333);
    }else if(e.detail.deltaX>0 && e.detail.scrollLeft<=153){
      changeTab(0)
      console.log(4444);

    }
	}


</script>

<template>
  <view class="top-box" :style="{paddingTop:safeAreaInsets.top+'px'}" >
      <view class="team-name">财遇知音</view>
      <view class="uni-form-item uni-column">
        <uni-search-bar class="uni-mt-10" radius="100" placeholder="搜索关键词" clearButton="auto" cancelButton="none" />
			</view>
  </view>
  <view class="tab-box">
        <view @click="changeTab(0)"  :class="{ 'selected': tabIndex === 0 }">遇知音</view>
        <view @click="changeTab(1)" :class="{ 'selected': tabIndex === 1 }">寻财才</view>
    </view>

    <scroll-view class="scroll-view_H con-box" show-scrollbar="false" scroll-with-animation="true" scroll-x="true" @scroll="scroll" :scroll-left="scrollVal">
              <view id="demo1" class="scroll-view-item_H" >
                <scroll-view class="tab-con" scroll-y="true" refresher-enabled @refresherrefresh="refreshData(0)" :refresher-triggered="triggered">
                  <!-- <view class="card" v-for="info in cardData" :key="info.recruit_card_id">
                    <view class="title">{{info.title}}</view>
                    <view class="kind">{{info.kind}}</view>
                    <view class="tag-list">
                      <view class="tag" v-for="tag in info.tag" :key="tag">{{tag}}</view>
                    </view>
                    <view class="detail-info">
                      <view class="publisher">
                        <view class="avatar"></view>
                        <view>{{info.publisher}}</view>
                      </view>
                      <view class="location">{{info.campus}}</view>
                    </view>
                  </view> -->
                  <view class="card" >
                    <view class="title">数学建模研究社</view>
                    <view class="kind">社团</view>
                    <view class="tag-list">
                      <view class="tag">师兄师姐热心</view>
                      <view class="tag">免早</view>
                      <view class="tag">积累比赛经验</view>
                    </view>
                    <view class="detail-info">
                      <view class="publisher">
                        <view class="avatar"></view>
                        <view>陈泽驰</view>
                      </view>
                      <view class="location">佛山校区</view>
                    </view>
                  </view>
                  <view class="card" >
                    <view class="title">财遇知音</view>
                    <view class="kind">三创赛</view>
                    <view class="tag-list">
                      <view class="tag">团队合作能力强</view>
                      <view class="tag">技术强</view>
                      <view class="tag">比赛经验丰富</view>
                      <view class="tag">团队认真负责</view>
                    </view>
                    <view class="detail-info">
                      <view class="publisher">
                        <view class="avatar"></view>
                        <view>Charry</view>
                      </view>
                      <view class="location">佛山校区</view>
                    </view>
                  </view>
                  <view class="card" >
                    <view class="title">田径队</view>
                    <view class="kind">社团</view>
                    <view class="tag-list">
                      <view class="tag">更高</view>
                      <view class="tag">更快</view>
                      <view class="tag">更强</view>
                    </view>
                    <view class="detail-info">
                      <view class="publisher">
                        <view class="avatar"></view>
                        <view>Tim</view>
                      </view>
                      <view class="location">佛山校区</view>
                    </view>
                  </view>
                </scroll-view>
              </view>

              <view id="demo2" class="scroll-view-item_H" >
                <scroll-view class="tab-con" scroll-y="true" refresher-enabled>
                  <view class="card" >
                    <view class="title">前端工程师</view>
                    <view class="kind">技术者</view>
                    <view class="tag-list">
                      <view class="tag">代码能力强</view>
                      <view class="tag">有责任心</view>
                      <view class="tag">回复快</view>
                    </view>
                    <view class="detail-info">
                      <view class="publisher">
                        <view class="avatar"></view>
                        <view>Charryc777</view>
                      </view>
                      <view class="location">广州校区</view>
                    </view>
                  </view>
                  <view class="card" >
                    <view class="title">UI设计师</view>
                    <view class="kind">技术者</view>
                    <view class="tag-list">
                      <view class="tag">设计优雅</view>
                      <view class="tag">有责任心</view>
                      <view class="tag">交付速度快</view>
                    </view>
                    <view class="detail-info">
                      <view class="publisher">
                        <view class="avatar"></view>
                        <view>Andy</view>
                      </view>
                      <view class="location">不限校区</view>
                    </view>
                  </view>
                  <view class="card" >
                    <view class="title">后端工程师</view>
                    <view class="kind">技术者</view>
                    <view class="tag-list">
                      <view class="tag">代码能力强</view>
                      <view class="tag">有责任心</view>
                    </view>
                    <view class="detail-info">
                      <view class="publisher">
                        <view class="avatar"></view>
                        <view>Lucy</view>
                      </view>
                      <view class="location">佛山校区</view>
                    </view>
                  </view>
                </scroll-view>
              </view>
      </scroll-view>



</template>

<style lang="scss">
//
page{
  display: flex;
  flex-direction: column;
  height: 100%;
}

// scroll-view{
//   height: auto ;
// }
::-webkit-scrollbar {
    display: none;  /* 隐藏滚动条 */
    }

.selected{
  padding-bottom: 0.5vh;
  border-bottom: 1vw solid #22d3ff;
}


.top-box{
  padding: 2vw;
  background-color: #A9C9FF;
  background-image: linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%);

  .team-name{
    padding: 3vw;
    font-weight: bolder;
    font-size: 6vw;
    color: #fff;
  }
}

.tab-box{
    display: flex;
    padding: 3vw 2vw;
    justify-content: space-around;
    font-size: 4vw;
    font-weight: bolder;
        }


.con-box,
.scroll-view_H{
  white-space: nowrap;
		width: 100%;
	.scroll-view-item_H {
    display: inline-block;
		width: 100%;
    height: 100%;
    .tab-con{
      display: flex;
      flex-direction: column;
      height: 100%;
      .card{
      padding: 3vw;
      margin:0 2vw;
      margin-bottom: 3vw;
      border-radius: 3vw;
      box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
      &:nth-child(1){
        margin-top: 3vw;
      }
      .title{
        font-size: 4.8vw;
        font-weight: bolder;
        margin-bottom: 2vw;
      }
      .kind{
        font-size: 3.5vw;
        margin-bottom: 2vw;
      }
      .tag-list{
        display: flex;
        margin-bottom: 3vw;
        .tag{
          background-color: #f8f8f8;
          margin: 0 1vw;
          font-size: 3vw;
          padding: 1vw 1vw;
          border-radius: 1vw;
          color: #2c068a;
        }
      }
      .detail-info{
        display: flex;
        font-size: 3.3vw;
        justify-content: space-between;
        align-items: center;
        .publisher{
          display: flex;
          align-items: center;
          .avatar{
            width: 10vw;
            height:10vw;
            margin-right: 2vw;
            background-color: #22d3ff;
            border-radius: 50%;
          }
        }
      }
    }
    }

	}

  }




</style>

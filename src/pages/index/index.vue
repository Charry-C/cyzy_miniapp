<script setup>
  import { onLoad } from "@dcloudio/uni-app"
  import {ref, reactive} from 'vue'
  import { getRecruitCardInfoApi,getMeetCardInfoApi } from "@/api/page_index"

  // 变量定义
  const cardData=reactive([])
  const triggered=ref(false)
  const tabIndex=ref(0)
  const currentIndex=ref(0)

  // 获取屏幕安全距离
  const { safeAreaInsets }=uni.getSystemInfoSync()

  // 获取数据函数
  const getRecruitCardInfo=async ()=>{
    const recruitCardInfo=await getRecruitCardInfoApi()
    console.log("首页卡片数据",recruitCardInfo.data.data);
    return recruitCardInfo.data.data
  }
  const getMeetCardInfo=async ()=>{
    const meetCardInfo=await getMeetCardInfoApi()
    console.log("首页卡片数据",meetCardInfo.data.data);
    return meetCardInfo.data.data
  }

  // 刷新数据
  async function refreshData(){
    triggered.value=true
    const data = await getRecruitCardInfo();
    console.log("data",data);
    cardData.unshift(...data);
    console.log(123);
    triggered.value=false
    console.log(triggered.value);
  }

  // swiper切换 与 tab切换对应逻辑
  function changeTab(tab){
    tabIndex.value=tab
    currentIndex.value = tabIndex.value
  }
  function onSwiperChange(event){
      let { current } = event.target
      tabIndex.value = current
  }

  // 前往卡片详情页
  const goDetail=(mode)=>{
    uni.navigateTo({ url:'../detail/detail?mode='+mode})
  }

  // 进入小程序获取数据
  onLoad(async()=>{
    const recruitData = await getRecruitCardInfo();
    const meetData=await getMeetCardInfo()
    console.log("recruitData",recruitData,"meetData",meetData);
    cardData.push(...recruitData); // 使用concat方法合并数组
  })
</script>

<template>
  <view class="top-box" :style="{paddingTop:safeAreaInsets.top+'px'}" >
      <view class="team-name">财遇知音</view>
      <view class="uni-form-item uni-column">
        <uni-search-bar class="uni-mt-10" bgColor="#fff" textColor="#656565"	  radius="100" placeholder="搜索关键词" clearButton="auto" cancelButton="none" />
			</view>
  </view>
  <view class="tab-box">
        <view @click="changeTab(0)"  :class="{ 'selected': tabIndex === 0 }">遇知音</view>
        <view @click="changeTab(1)" :class="{ 'selected': tabIndex === 1 }">寻财才</view>
    </view>
    <scroll-view  class="scroll-view_H con-box">
      <swiper class="swiper"
          :duration="200"
          :current = "currentIndex"
          @change="onSwiperChange"
          >
          <swiper-item>
            <view id="demo1" class="scroll-view-item_H" >
                <scroll-view class="tab-con" scroll-y="true" refresher-enabled @refresherrefresh="refreshData(0)" :refresher-triggered="triggered">
                  <view class="card" v-for="info in cardData" :key="info.recruit_card_id">
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
                  </view>
                  <view class="card" @click="goDetail(1)">
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
                        <view>陈同学</view>
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
                        <view>陈同学</view>
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
                        <view>陈同学</view>
                      </view>
                      <view class="location">佛山校区</view>
                    </view>
                  </view>
                </scroll-view>
              </view>
          </swiper-item>
          <swiper-item>
            <view id="demo2" class="scroll-view-item_H" >
                <scroll-view class="tab-con" scroll-y="true" refresher-enabled>

                  <view class="card"  @click="goDetail(2)">
                    <view class="title">前端开发工程师</view>
                    <view class="kind">技术者</view>
                    <view class="description">
                        我是一个技术很强的前端工程师,我能胜任各种各样的页面开发我是一个技术很强的前端工程师,我能胜任各种各样的页面开发我是一个技术很强的前端工程师,我能胜任各种各样的页面开发
                    </view>
                    <view class="detail-info">
                      <view class="publisher">
                        <view class="avatar"></view>
                        <view>李同学</view>
                      </view>
                      <view class="location">广州校区</view>
                    </view>
                  </view>
                  <view class="card" >
                    <view class="salary"><view class="icon">￥</view>5</view>
                    <view class="title">代拿外卖</view>
                    <view class="kind">代工跑腿型</view>
                    <view class="description">
                        我的配送速度很快,周三周五中午可以为大家代拿快递和外卖,有需要的可以联系我
                    </view>
                    <view class="detail-info">
                      <view class="publisher">
                        <view class="avatar"></view>
                        <view>王同学</view>
                      </view>
                      <view class="location">佛山校区</view>
                    </view>
                  </view>
                  <view class="card" >
                    <view class="salary"><view class="icon"></view></view>
                    <view class="title">数据分析师</view>
                    <view class="kind">技术者</view>
                    <view class="description">
                        我精通python，学习了numpy、pandas、matplotlib等数据分析的库的使用，我获得过数据分析大赛一等奖，数模国赛国奖
                    </view>
                    <view class="detail-info">
                      <view class="publisher">
                        <view class="avatar"></view>
                        <view>张同学</view>
                      </view>
                      <view class="location">广州校区</view>
                    </view>
                  </view>
                </scroll-view>
              </view>
          </swiper-item>
        </swiper>
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
  border-radius: 0.5vw;
  color: #22d3ff;
}


.top-box{
  padding: 2vw;
  background-image: linear-gradient(180deg, rgba(0, 204, 255, 0.501) 0%, rgba(255, 255, 255, 0.464) 100%);
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

.con-box{
  scroll-snap-type: both mandatory;
}

.con-box,
.scroll-view_H{
  white-space: nowrap;
		width: 100%;
	.scroll-view-item_H {
    scroll-snap-stop: normal;
    scroll-snap-align: center;

    display: inline-block;
		width: 100%;
    height: 100%;
    .tab-con{
      display: flex;
      flex-direction: column;
      height: 100%;
      .card{
      padding: 3vh 4vw 1vh 4vw;
      margin:0 2vw;
      margin-bottom: 3vw;
      border-radius: 3vw;
      box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
      &:nth-child(1){
        margin-top: 3vw;
      }
      .salary{
        float: right;
        display: flex;
        --font:3vw;
        align-items:flex-end;
        font-weight: bold;
        font-size: 4vw;
        .icon{
        font-size: var(--font);
        }
      }
      .description{
        font-size: 3.5vw;
        padding: 0 3vw;
        margin: 1.2vh 0;
        color: #5a5a5a;
        white-space: pre-line;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
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
            width: 8vw;
            height:8vw;
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

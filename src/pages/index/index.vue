<script setup>
import { onLoad } from "@dcloudio/uni-app"
import { ref, reactive } from 'vue'
import { getRecruitCardInfoApi, getMeetCardInfoApi } from "@/api/page_index"
import showCard from "@/components/showCard.vue"

// 变量定义
const cardData = ref({})
const triggered = ref(false)
const tabIndex = ref(0)
const currentIndex = ref(0)


cardData.value = {
  recruitCardInfo: [
    {
      title: '数学建模研究社',
      kind: '社团',
      tags: ['师兄师姐热心', '免早', '积累比赛经验'],
      publisher: '陈同学',
      location: '佛山校区'
    },
    {
      title: '篮球俱乐部',
      kind: '兴趣小组',
      tags: ['强身健体', '团队合作', '比赛丰富'],
      publisher: '王同学',
      location: '深圳校区',
    },
    {
      title: '科研项目小组',
      kind: '科研类',
      tags: ['研究能力', '创新思维', '论文发表'],
      publisher: '刘同学',
      location: '中山校区',
    }
  ],
  meetCardInfo: [
    {
      title: '前端开发工程师',
      kind: '技术者',
      description: '我是一个技术很强的前端工程师，我能胜任各种各样的页面开发。', // 增加描述字段
      publisher: '李同学',
      location: '广州校区',
    },
    {
      title: 'UI设计师',
      kind: '设计类',
      description: '我擅长各种设计工具，具备丰富的设计经验，能够完成高质量的 UI 设计。',
      publisher: '张同学',
      location: '珠海校区',
    },
  ]
}


// 获取屏幕安全距离
const { safeAreaInsets } = uni.getSystemInfoSync()

// 获取数据函数
const getRecruitCardInfo = async () => {
  const recruitCardInfo = await getRecruitCardInfoApi()
  console.log("首页卡片数据", recruitCardInfo.data.data);
  return recruitCardInfo.data.data
}
const getMeetCardInfo = async () => {
  const meetCardInfo = await getMeetCardInfoApi()
  console.log("首页卡片数据", meetCardInfo.data.data);
  return meetCardInfo.data.data
}

// 刷新数据
async function refreshData() {
  triggered.value = true
  const data = await getRecruitCardInfo();
  console.log("data", data);
  cardData.unshift(...data);
  console.log(123);
  triggered.value = false
  console.log(triggered.value);
}

// swiper切换 与 tab切换对应逻辑
function changeTab(tab) {
  tabIndex.value = tab
  currentIndex.value = tabIndex.value
}
function onSwiperChange(event) {
  let { current } = event.target
  tabIndex.value = current
}

// 进入小程序获取数据
onLoad(async () => {
  const recruitData = await getRecruitCardInfo();
  const meetData = await getMeetCardInfo()
  console.log("recruitData", recruitData, "meetData", meetData);
  cardData.push(...recruitData); // 使用concat方法合并数组
})
</script>

<template>
  <view class="top-box" :style="{ paddingTop: safeAreaInsets.top + 'px' }">
    <view class="team-name">财遇知音</view>
    <view class="uni-form-item uni-column">
      <uni-search-bar class="uni-mt-10" bgColor="#fff" textColor="#656565" radius="100" placeholder="搜索关键词"
        clearButton="auto" cancelButton="none" />
    </view>
  </view>
  <view class="tab-box">
    <view @click="changeTab(0)" :class="{ 'selected': tabIndex === 0 }">遇知音</view>
    <view @click="changeTab(1)" :class="{ 'selected': tabIndex === 1 }">寻财才</view>
  </view>
  <scroll-view class="scroll-view_H con-box">
    <swiper class="swiper" :duration="200" :current="currentIndex" @change="onSwiperChange">
      <swiper-item>
        <view id="demo1" class="scroll-view-item_H">
          <scroll-view class="tab-con" scroll-y="true" refresher-enabled @refresherrefresh="refreshData(0)"
            :refresher-triggered="triggered">
            <showCard v-for="(info, index) in cardData.recruitCardInfo" :key="index" :data="info" mode="1">
              <template v-slot:content>
                <view class="tag-list">
                  <view class="tag" v-for="tag in info.tags" :key="tag">{{ tag }}</view>
                </view>
              </template>
            </showCard>
          </scroll-view>
        </view>
      </swiper-item>
      <swiper-item>
        <view id="demo2" class="scroll-view-item_H">
          <scroll-view class="tab-con" scroll-y="true" refresher-enabled>
            <showCard v-for="(info, index) in cardData.meetCardInfo" :key="index" :data="info" mode="2">
              <template v-slot:content>
                <view class="description">
                  {{ info.description }}
                </view>
              </template>
            </showCard>
          </scroll-view>
        </view>
      </swiper-item>
    </swiper>
  </scroll-view>
</template>

<style lang="scss">
//
page {
  display: flex;
  flex-direction: column;
  height: 100%;
}

// scroll-view{
//   height: auto ;
// }
::-webkit-scrollbar {
  display: none;
  /* 隐藏滚动条 */
}


.selected {
  padding-bottom: 0.5vh;
  border-bottom: 1vw solid #22d3ff;
  border-radius: 0.5vw;
  color: #22d3ff;
}


.top-box {
  padding: 2vw;
  background-image: linear-gradient(180deg, rgba(0, 204, 255, 0.501) 0%, rgba(255, 255, 255, 0.464) 100%);

  .team-name {
    padding: 3vw;
    font-weight: bolder;
    font-size: 6vw;
    color: #fff;
  }
}

.tab-box {
  display: flex;
  padding: 3vw 2vw;
  justify-content: space-around;
  font-size: 4vw;
  font-weight: bolder;
}

.con-box {
  scroll-snap-type: both mandatory;
}

.con-box,
.scroll-view_H {
  white-space: nowrap;
  width: 100%;

  .scroll-view-item_H {
    scroll-snap-stop: normal;
    scroll-snap-align: center;

    display: inline-block;
    width: 100%;
    height: 100%;

    .tab-con {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .tag-list {
      display: flex;
      margin-bottom: 3vw;

      // 插槽样式
      .tag {
        background-color: #f8f8f8;
        margin: 0 1vw;
        font-size: 3vw;
        padding: 1vw 1vw;
        border-radius: 1vw;
        color: #2c068a;
      }
    }

    .description {
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

  }

}
</style>

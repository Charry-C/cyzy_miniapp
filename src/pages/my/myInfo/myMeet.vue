<script setup>
import { ref, reactive } from 'vue';
import { useFormStore } from '@/stores/modules/formInfo';
import topBackBar from '@/components/topBackBar.vue';
import showCard from '@/components/showCard.vue';
const options = reactive([
  { text: "编辑", style: { backgroundColor: 'blue' } },
  { text: "删除", style: { backgroundColor: 'rgb(214, 0, 0)' } }
])
const cardData = ref({})
// mock
cardData.value = {
  meetCardInfo: [
    {
      id: new Date().getTime() + 1,
      title: '前端开发工程师',
      kind: '技术者',
      description: '我是一个技术很强的前端工程师，我能胜任各种各样的页面开发。', // 增加描述字段
      publisher: '李同学',
      location: '广州校区',
    },
    {
      id: new Date().getTime() + 2,
      title: 'UI设计师',
      kind: '设计类',
      description: '我擅长各种设计工具，具备丰富的设计经验，能够完成高质量的 UI 设计。',
      publisher: '张同学',
      location: '珠海校区',
    },
  ]
}
const bindClick = (e, id) => {
  if (e.content.text === '编辑') {
    // TODO 设置pinia中的值，然后设置完成后再跳转，其实就是使用await
    useFormStore().choose = 2
    uni.navigateTo({
      url: '/pages/form/form',
    })
  }
  if (e.content.text === '删除') {
    // TODO 需要一个删除的接口，传入id进行数据库的删除
    cardData.value.meetCardInfo = cardData.value.meetCardInfo.filter(item => item.id !== id)
  }
}

</script>

<template>
  <topBackBar />
  <view class="my-collect"> 我的求职 </view>
  <uni-swipe-action>
    <uni-swipe-action-item v-for="(info, index) in cardData.meetCardInfo" :right-options="options" show="true"
      @click="(e) => { bindClick(e, info.id) }">
      <showCard :key="index" :data="info" mode="1">
        <template v-slot:content>
          <view class="description">
            {{ info.description }}
          </view>
        </template>
      </showCard>
    </uni-swipe-action-item>
  </uni-swipe-action>
</template>

<style lang="scss">
.my-collect {
  text-align: center;
  font-size: 6vw;
  padding: 3vw 0 5vw 0;
  color: #22cbff;
  font-weight: 700;
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
</style>

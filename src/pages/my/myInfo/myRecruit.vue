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
      title: '篮球俱乐部',
      kind: '兴趣小组',
      tags: ['强身健体', '团队合作', '比赛丰富'],
      publisher: '王同学',
      location: '深圳校区',
    },
    {
      title: '数学建模研究社',
      kind: '社团',
      tags: ['师兄师姐热心', '免早', '积累比赛经验'],
      publisher: '陈同学',
      location: '佛山校区'
    },
    {
      title: '科研项目小组',
      kind: '科研类',
      tags: ['研究能力', '创新思维', '论文发表'],
      publisher: '刘同学',
      location: '中山校区',
    }
  ]
}
const bindClick = (e, id) => {
  if (e.content.text === '编辑') {
    // TODO 设置pinia中的值，然后设置完成后再跳转，其实就是使用await
    // 要设置好formID才去修改，只有当send才会触发修改
    useFormStore().choose = 1
    uni.navigateTo({
      url: '/pages/form/form',
    })
  }
  if (e.content.text === '删除') {
    // TODO 需要一个删除的接口，传入id进行数据库的删除
    cardData.value.recruitCardInfo = cardData.value.recruitCardInfo.filter(item => item.id !== id)
  }
}
</script>

<template>
  <topBackBar />
  <view class="my-collect"> 我的招募 </view>
  <uni-swipe-action>
    <uni-swipe-action-item v-for="(info, index) in cardData.recruitCardInfo" :right-options="options" show="true"
      @click="(e) => { bindClick(e, info.id) }">
      <showCard :key="index" :data="info" mode="1">
        <template v-slot:content>
          <view class="tag-list">
            <view class="tag" v-for="tag in info.tags" :key="tag">{{ tag }}</view>
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
</style>

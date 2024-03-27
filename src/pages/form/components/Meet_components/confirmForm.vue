<script setup>
//
import { ref } from 'vue'
import { useFormStore } from '@/stores/modules/formInfo';
import '@/static/cssStyle/iconfont.css'
import showTimeVue from '@/components/showTime.vue';
const formData=useFormStore().applyformData
const editIcon=ref('iconfont icon-edit')
const emit=defineEmits(['edit-componet'])

const goEdit=(step)=>{
    emit('edit-componet',step)
}


</script>

<template>
  <view class="confirm-form">

        <view class="form-item">
            <view class="title">
                求职选型
            </view>
            <view class="value">
                {{formData.applyType}}
            </view>
            <view class="edit" :class="editIcon" @click="goEdit(1)"></view>
        </view>
        <view class="form-item">
            <view class="title">
                {{ formData.applyType }}
            </view>
            <view class="value">
                {{ formData.applyPosition }}
            </view>
            <view class="edit" :class="editIcon" @click="goEdit(2)"></view>
        </view>
        <view class="form-item">
            <view class="title">
                个人介绍
            </view>
            <view class="value">
                {{ formData.perDescription }}
            </view>
            <view class="edit" :class="editIcon" @click="goEdit(3)"></view>
        </view>
        <view class="form-item">
            <view class="title">
                期待报酬
            </view>
            <view class="value">
                {{formData.salary}} RMB
            </view>
            <view class="edit" :class="editIcon" @click="goEdit(4)"></view>
        </view>
        <view class="form-item">
            <view class="title">
                联系方式
            </view>
            <view class="value">
                <template v-for="(item,index) in formData.contacts" :key="index">
                    <view class="form-item-title">{{ item.type }}</view>
                    <view class="form-item-value">{{ item.value }}</view>
                </template>
            </view>
            <view class="edit" :class="editIcon" @click="goEdit(5)"></view>
        </view>
        <view class="form-item">
            <view class="title">
                所在校区
            </view>
            <view class="value">
               {{formData.applyCampus}}
            </view>
            <view class="edit" :class="editIcon" @click="goEdit(6)"></view>
        </view>
        <view class="form-item">
            <view class="title">
                空闲时间
            </view>
            <view class="value" style="margin-top: 3vh;">
              <showTimeVue />
            </view>
            <view class="edit" :class="editIcon" @click="goEdit(7)"></view>
        </view>
  </view>
</template>

<style lang="scss" scoped>

.confirm-form{
    display: flex;
    flex-direction: column;
    margin: 0 3vw;
    border-radius: 5vw;
    border: 0.1vw solid #ececec;
    .form-item{
        position: relative;
        flex: 1;
        border-bottom: 0.1vw solid #ccc;
        padding: 5vw 5vw 3vw 5vw;
        &:nth-last-child(1){
            border: none;
        }
        .form-item-title{
            font-weight: bolder;
            font-size: 4vw;
        }
        .edit{
            position: absolute;
            width: 7vw;
            height: 7vw;
            background-color: rgb(24, 139, 68);
            border-radius: 50%;
            right: 2vw;
            top: 4vw;
            text-align: center;
            line-height: 7vw;
            color: white;
            font-weight: bold;
        }
    }
    .title{
    font-size: 5vw;
    font-weight: bold;
    margin-bottom: 2vw;
    }
}

</style>
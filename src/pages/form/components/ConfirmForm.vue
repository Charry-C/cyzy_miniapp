<script setup>
//
import {ref } from 'vue'
import { useFormStore } from '@/stores/modules/formInfo';
const formData=useFormStore().formData
import '@/static/cssStyle/iconfont.css'
import KindSelect from './KindSelect.vue';
import RecruitDep from './RecruitDep.vue';


const editIcon=ref('iconfont icon-edit')
const emit=defineEmits(['edit-componet'])

const goEdit=(step)=>{
    emit('edit-componet',step)
}



</script>

<template>
  <view class="confirm-form">
    <view class="info-box">
        <view class="form-item">
            <view class="title">
                招募类型
            </view>
            <view class="value">
                {{ formData.recruitmentType }}
            </view>
            <view class="edit" :class="editIcon" @click="goEdit(1)"></view>
        </view>
        <view class="form-item">
            <view class="title">
                社团名称
            </view>
            <view class="value">
                {{ formData.clubName }}
            </view>
            <view class="edit" :class="editIcon" @click="goEdit(2)"></view>
        </view>
        <view class="form-item">
            <view class="title">
                招聘部门
            </view>
            <view class="value">
                <template v-for="(item,index) in formData.clubDescription" :key="index">
                    <view class="form-item-title">{{ item.department }}</view>
                    <view class="form-item-value">{{ item.description }}</view>
                </template>
            </view>
            <view class="edit" :class="editIcon" @click="goEdit(3)"></view>
        </view>
        <view class="form-item">
            <view class="title">
                社团标签
            </view>
            <view class="value">
                <view class="tag" v-for="(tag,index) in formData.tags" :key="index">{{ tag }}</view>
            </view>
            <view class="edit" :class="editIcon" @click="goEdit(4)"></view>
        </view>
        <view class="form-item">
            <view class="title">
                招聘校区
            </view>
            <view class="value">
                {{ formData.recruitmentCampus }}
            </view>
            <view class="edit" :class="editIcon" @click="goEdit(5)"></view>
        </view>
        <view class="form-item">
            <view class="title">
                招募时间
            </view>
            <view class="value">
                <view class="time">
                    <view class="form-item-title">开始时间</view>
                    <view class="form-item-value">{{ formData.recruitmentPeriod.startDate }}</view>    
                </view>
                <view class="time">
                    <view class="form-item-title">结束时间</view>
                    <view class="form-item-value">{{ formData.recruitmentPeriod.endDate }}</view>    
                </view>
            </view>
            <view class="edit" :class="editIcon" @click="goEdit(6)"></view>
        </view>
        <view class="form-item">
            <view class="title">
                联系方式
            </view>
            <view class="value">
                <view class="contact">
                    <view class="form-item-title">微信号</view>
                    <view class="form-item-value">{{ formData.recruitmentContact.wechatID }}</view>
                </view>
                <view class="contact">
                    <view class="form-item-title">群二维码</view>
                    <view class="form-item-value" v-for="(img,index) in formData.recruitmentContact.groupQRCode" :key="index">{{ img }}</view>
                </view>
            </view>
            <view class="edit" :class="editIcon" @click="goEdit(7)"></view>
        </view>
        <view class="form-item">
            <view class="title">
                社团相册
            </view>
            <view class="value">
                <view class="album" v-for="(img,index) in formData.clubAlbum" :key="index">{{ img }}</view>
            </view>
            <view class="edit" :class="editIcon" @click="goEdit(8)"></view>
        </view>
        
    </view>
  </view>
</template>

<style lang="scss" scoped>

.confirm-form{
    margin: 0 3vw;
    border-radius: 5vw;
    border: 0.1vw solid #ececec;
    .form-item{
        position: relative;
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
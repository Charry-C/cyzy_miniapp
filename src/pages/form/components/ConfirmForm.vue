<script setup>
//
import Item from './Item.vue';
const data=[
    {
        title:"招募类型",
        value:"社团招募"
    },
    {
        title:"社团名称",
        value:"数学建模研究社"
    },
    {
        title:"学生认证",
        value:true
    },
    {
        title:"社团部门介绍",
        value:[
        {   
            title:"外联部",
            value:"外联部外联部外联部外联部外联部外联部外联部外联部外联部外联部外联部外联部外联部外联部外联部外联部外联部外联部"
        },
        {   
            title:"宣传部",
            value:"宣传部宣传部宣传部宣传部宣传部宣传部外联部外联部外联部外联部外联部外联部外联部外联部外联部外联部外联部外联部"
        },
        {   
            title:"学术部",
            value:"学术部学术部学术部学术部学术部学术部外联部外联部外联部外联部外联部外联部外联部外联部外联部外联部外联部外联部"
        },
        ]
    },
    {
        title:"选择标签",
        value:["免早","积累经验","学习技能"]
    },
    {
        title:"招募校区",
        value:"佛山校区"
    },
    {
        title:"时间范围",
        value:
        [
            {
                title:"开始时间",
                value:"2024-03-10"
            },
            {
                title:"结束时间",
                value:"2024-05-10"
            }
        ]
    },
    {
        title:"社团图片",
        value:[
            {
                title:"招募二维码",
                value:["二维码"],
            
            },
            {
                title:"社团相册",
                value:["照片1","照片2"]
            }
        ]
    },

    ]
// type:{
//         title:"招募类型",
//         value:"社团招募"
//     },
//     orgName:{
//         title:"社团名称",
//         value:"数学建模研究社"
//     },
//     stuAuth:{
//         title:"学生认证",
//         value:true
//     },
//     departInfo:{
//         title:"社团部门介绍",
//         value:[
//         {   
//             title:"外联部",
//             value:"外联部外联部外联部外联部外联部外联部"
//         },
//         {   
//             title:"宣传部",
//             value:"宣传部宣传部宣传部宣传部宣传部宣传部"
//         },
//         {   
//             title:"学术部",
//             value:"学术部学术部学术部学术部学术部学术部"
//         },
//     ]
//     },
//     selectedTag:{
//         title:"选择标签",
//         value:["免早","积累经验","学习技能"]
//     },
//     location:{
//         title:"招募校区",
//         value:"佛山校区"
//     },
//     rangeTime:{
//         title:"时间范围",
//         value:
//         [
//             {
//                 title:"开始时间",
//                 value:"2024-03-10"
//             },
//             {
//                 title:"结束时间",
//                 value:"2024-05-10"
//             }
//         ]
//     },
//     Img:{
//         title:"社团图片",
//         value:[
//         {
//             title:"招募二维码",
//             value:["二维码"],
//         },
//         {
//             title:"社团相册",
//             value:["照片1","照片2"]
//         }
//     ]
//     },
</script>

<template>
  <view class="confirm-form">
    <view class="info-box" v-for="(item,index) in data" :key="index">
        <item :item="item"/>
        <view class="edit"></view>
    </view>
  </view>
</template>

<style lang="scss">
.confirm-form{
    margin: 0 3vw;
    border-radius: 5vw;
    border: 0.1vw solid #ececec;
    .info-box{
        position: relative;
        border-bottom: 0.1vw solid #ccc;
        padding: 5vw 5vw 3vw 5vw;
        &:nth-last-child(1){
            border: none;
        }
        .edit{
            position: absolute;
            width: 7vw;
            height: 7vw;
            background-color: rgb(24, 139, 68);
            border-radius: 50%;
            right: 2vw;
            top: 4vw;
            
        }
    }
    .title{
    font-size: 5vw;
    font-weight: bold;
    margin-bottom: 2vw;
    }
}

</style>
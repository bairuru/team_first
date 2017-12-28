<template>
  <div>
       <div class="main">
        <div class="header">
           <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" style="background-color: #80b1e3;">
            <el-menu-item index="1" class="bold">个人博客</el-menu-item>
            <el-submenu v-for="(v, k) in titdata" :key="k" :index="v.onedata.id">
                 <template slot="title" @click="head(12)">{{v.onedata.cnname}}</template>
                <el-menu-item v-for="(val, k) in v.twodata" :index="val.id" :key="k">{{val.cnname}}</el-menu-item>
            </el-submenu>
            </el-menu>
        </div>
        <div class="section">
            <!-- <div class="banner"> <img src="../assets/images/banner/a1.jpg" alt=""></div> -->
            <p class="top">{{title}}</p>
           <div class="content">
                <div class="main-left">
                <router-view></router-view>
            </div>   
            <div class="main-right">
                <div class="right-top">
                    <p>全站搜索</p>
                    <div class="all-top"><p><el-input v-model="value" placeholder="请输入内容"></el-input></p><el-button type="primary" class="search" @click="searchCon(search)">搜索</el-button></div>
                </div>
                <div class="right-center">
                    <pai-hang></pai-hang>
                </div>
                <div class="right-bottom">
                    <new-articel></new-articel>
                </div>
               
            </div>
           </div>
        </div>
     </div>
  </div>
</template>

<script>
import axios from 'axios';
import bus from '../bus';
import paiHang from  './homelist/paihang';
import newArticel from './homelist/newarticel';
export default {
    name: 'home',
    components: {
        paiHang,
        newArticel
    }, 
    data () {
        return {
            value: '',
            title: '首页',
            search: '搜索',
            activeIndex: '1',
            titdata: []
        };
    },
    created () {
        axios.get('/api/api/front/article/getNav').then((res) => {
            this.titdata = res.data.data;
        })
    },
    methods: {
        handleSelect(key, keyPath) {
        console.log(key, keyPath);
        },
        searchCon (val) {
            this.title = val;
            bus.$emit('filter',this.value);
           
        },
        head (val) {
            console.log(val);
        }
    }
}
</script>

<style scoped>
.bold{
    font-size: 20px;
    color: #000;
}
.main{
    height: auto;
    margin: 0 60px;
}
.section{
    margin-top: 10px;
}
.banner{
    width: 100%;
    height: 240px;
}
.banner img{
    width: 100%;
    height: 100%;
}
.top{
    padding-left: 20px;
}
.content{
    width: 100%;
    /* display: flex; */
}
.main-left{
    width: 1100px;
    margin-top: 10px;
    float: left;   
    /* flex: 1;  */
}

.main-right{
    width: 360px;
    height: auto;
    float: right;
}
.right-top, .right-center, .right-bottom{
    padding: 10px;
    background-color: #fff7b5;
    border-radius: 5px;
    margin-bottom: 10px;
}
.all-top{
    display: flex;
    margin-top: 10px;
}

.right-top p, .right-center p, .right-bottom p{
    background-color: aqua;
    border-radius: 6px;
    width: 100%;
    height: 25px;
    text-align: center;
    color: #fff;
    line-height: 25px;
    font-weight: bold;
    font-size: 16px;
}
.search{
    margin-left: 10px;
}
.right-center ul li, .right-bottom ul li{
    height: 30px;
    line-height: 30px;
    padding-bottom: 5px;
}
.right-bottom ul li{
    height: 30px;
    border-bottom: 1px dashed #ccc;
    line-height: 30px;
    padding-bottom: 5px;
}
.right-center ul li span, .right-bottom ul li span{
    display: inline-block;
    width: 22px;
    height: 22px;
    line-height: 22px;
    text-align: center;
    border-radius: 50%;
    background-color: red;
    color: #fff; 
    position: relative;
    top: 3px;
}
.right-center ul li time, .right-bottom ul li time{
    float: right;
}
.right-center ul li time i{
    margin-right: 20px;
}
</style>

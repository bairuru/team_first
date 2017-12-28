<template>
  <div>
      <div class="detail">
        <h2>{{data.article_name}}</h2>
        <p class="message"><b>作者：</b><span>{{data.editer}}</span> <b>访问量：</b><span>{{data.LIST}}</span> <b>时间:</b><span>{{data.time}}</span></p>
        <p class="content">内容:<span>{{data.content}}</span></p>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'detail',
  data(){
    return{
      data: []
    }
  },
  created () {
    this.data=this.$route.params;
    console.log(this.data)
  }
}
</script>

<style scoped>
.detail{
  width: 1000px;
  height: auto;
  background-color: pink;
  border-radius: 7px;
}
.detail h2{
  text-align: center;
  padding: 10px;
  font-size: 24px;
}
.message b{
  font-size: 22px;
  margin-left: 30px;
}
.message span{
  margin-left: 30px;
}
.content{
  padding: 0 30px;
  margin-top: 20px;
  font-size: 20px;
}
</style>

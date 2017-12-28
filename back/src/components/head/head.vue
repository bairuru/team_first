<template>
  <div class="head">
    <P class="left">
      个人博客
    </P>
    <P class="right">
      当前登录账户：<span>{{name}}</span>
    </P>
  </div>
</template>

<script>
export default {
  computed:{
    name () {
      return localStorage.getItem('name')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scopedSlots>
.head{
  line-height: 52px;
  position: relative;
}
.left{
  position: absolute;
  top: 0;
  left: 10px;
}
.right{
  position: absolute;
  top: 0;
  right: 10px;
}
</style>

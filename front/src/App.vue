<template>
  <div id="app">
    <home></home>
    <!-- <div class="footer">Copyright @ 2013-2017</div> -->
  </div>
</template>

<script>
import Home from './components/Home'
export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
body, #app{
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  font-size: .12rem;
  display: flex;
  flex-direction: column;
  background-color: antiquewhite;
}
.footer{
  width: 100%;
  height: 20px;
  background-color: #fff7b5;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>

<template>
  <div>
    <p>最新文章</p>
    <ul v-for="(v, k) in ullist" :key="k">
        <li><span>{{v.id}}</span> {{v.content}} <time>{{v.time}}</time></li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'newactive',
    data () {
        return {
            ullist: [
                {
                    id: '1',
                    content: '111111111',
                    num: '10',
                    icon: 'fa fa-star',
                    time: '2017-12-11'
                },
                {
                    id: '2',
                    content: '111111111',
                    num: '11',
                    icon: 'fa fa-star',
                    time: '2017-12-11'
                },
                {
                    id: '3',
                    content: '111111111',
                    num: '12',
                    icon: 'fa fa-star',
                    time: '2017-12-11'
                }
            ]
        }
    }
}
</script>

<style scoped>
.right-bottom{
    padding: 10px;
    background-color: #fff7b5;
    border-radius: 5px;
    margin-bottom: 10px;
}
.right-bottom p{
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
.right-bottom ul li{
    height: 50px;
    line-height: 50px;
    padding-bottom: 5px;
}
.right-bottom ul li span{
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
.right-bottom ul li time{
    float: right;
}
</style>

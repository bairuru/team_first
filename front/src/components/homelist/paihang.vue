<template>
  <div>
    <p>点击排行</p>
    <ul v-for="(v, k) in ullist" :key="k">
        <li><span>{{v.id}}</span> {{v.content}} <time> <i :class="v.icon"></i>{{v.num}}</time></li>
    </ul>
  </div>
</template>

<script>
// import axios from 'axios';
export default {
    name: 'paihang',
    data () {
        return {
             ullist: [
                {
                    id: '1',
                    content: '111111111',
                    num: '20',
                    icon: 'fa fa-star'
                },
                {
                    id: '2',
                    content: '111111111',
                    num: '15',
                    icon: 'fa fa-star'
                },
                {
                    id: '3',
                    content: '111111111',
                    num: '12',
                    icon: 'fa fa-star'
                }
            ]
        }
    }
    // created () {
    //     axios ({
    //         url: '/paihang',
    //         method: 'GET'
    //     }).then((res) => {
    //         console.log(res);
    //     })
    // }
}
</script>

<style scoped>
.right-center{
    padding: 10px;
    background-color: #fff7b5;
    border-radius: 5px;
    margin-bottom: 10px;
}
.right-center p{
    background-color: aqua;
    border-radius: 6px;
    width: 100%;
    height: 28px;
    text-align: center;
    color: #fff;
    line-height: 28px;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 5px;
}
.right-center ul li{
    height: 50px;
    line-height: 50px;
    padding-bottom: 5px;
}
.right-center ul li span{
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
.right-center ul li time{
    float: right;
}
.right-center ul li time i{
    margin-right: 20px;
}
</style>

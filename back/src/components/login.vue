<template>
    <div class="login">
        <h1>个人博客</h1>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="用户名">
                <el-input v-model.lazy="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type='text' v-model.lazy="form.pwd"></el-input>
            </el-form-item>
            <el-button type="primary" id="log" @click="submit">登陆</el-button>
            <p>{{form.cont}}</p>
        </el-form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            data: [],
            form: {
                name: '',
                pwd: '',
                cont: ''
            }
        }
    },
    methods: {
        submit () {
            if(!this.form.name || !this.form.pwd){
                this.form.cont = '请输入用户名或密码';
            }else{
                for(let i in this.data){
                    if(this.form.name === this.data[i].name && this.form.pwd === this.data[i].password){
                        this.form.cont = '输入成功';
                        this.$router.push({name: 'all'})
                        localStorage.setItem('name', this.form.name )
                        return
                    }else{
                        this.form.cont = '请输入用户名或密码错误';
                    }
                }
            }
        }
    },
    created(){
        axios.get('/back/user/getUser').then((res)=>{
            this.data = res.data.data
        })
    }
}
</script>

<style scopedSlots>
.login{
    width: 500px;
    height: 300px;
    border: 1px solid #ccc;
    margin: 150px auto;
}
.login button{
    margin-left: 30px;
}
.login .el-input__inner{
    width: 200px;
}
.login p{
    text-align: center;
}
</style>

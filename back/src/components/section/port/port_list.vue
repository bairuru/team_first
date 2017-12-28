<template>
  <div>
      <h1>接口内容</h1>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="标题">
          <el-input v-model="form.name1"></el-input>
        </el-form-item>
        <el-form-item label="接口地址">
          <el-input v-model="form.name2"></el-input>
        </el-form-item>
        <el-form-item label="类型">
          <el-input v-model="form.region1"></el-input>
        </el-form-item>
        <el-form-item label="请求类型">
          <el-input v-model="form.region2"></el-input>
        </el-form-item>
        <el-form-item label="请求参数">
          <el-input type="textarea" v-model="form.desc1"></el-input>
        </el-form-item>
        <el-form-item label="相应数据">
          <el-input type="textarea" v-model="form.desc2"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button @click="goback">取消</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
    data() {
      return {
        data: [],
        id: '',
        form: {
          name1: '',
          name2: '',
          region1: '',
          region2: '',
          desc1: '',
          desc2: ''
        }
      }
    },
    methods: {
      onSubmit() {
        const obj={
          title: this.form.name1,
          url: this.form.name2,
          type: this.form.region1,
          sendparams: this.form.region2,
          getparams: this.form.desc1,
          backorfont: this.form.desc2,
          id:this.data.id
        }
        console.log(obj.id)
        Axios.post('/back/api/update', obj).then((data)=>{
          console.log(data)
          if(data.data.code == 1017){
            this.$message({
                showClose: true,
                message: '数据更改成功',
                type: 'success'
            })
        }else{
            this.$message({
                showClose: true,
                message: '数据更改失败',
                type: 'error'
            })
        }
        })
      },
      goback(){
        this.$router.go(-1)
      }
    },
    created(){
      console.log(this.$route.params.data)
      this.data=this.$route.params.data;
      this.form.name1= this.data.title;
      this.form.name2= this.data.url;
      this.form.region1= this.data.backorfont;
      this.form.region2= this.data.type;
      this.form.desc1= this.data.sendparams;
      this.form.desc2= this.data.getparams;        
    }
}
</script>

<style scoped>

</style>

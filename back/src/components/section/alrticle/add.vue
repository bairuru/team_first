<template>
  <div>
    <h1>添加文章</h1>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="文章标题">
          <el-input v-model="form.name1"></el-input>
        </el-form-item>
        <el-form-item label="一级类名">
          <el-select v-model="form.region1" placeholder="请选择" @change="getId('one')">
            <el-option v-for="(obj, k) in oneData" :key="k" :label="obj.cnname" :value="obj.enname"></el-option>
            <!-- <el-option label="运维" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option> -->
          </el-select>
        </el-form-item>
        <el-form-item label="二级类名">
          <el-select v-model="form.region2" placeholder="请选择" @change="getId('two')">
            <el-option v-for="(obj, k) in twoData" :key="k" :label="obj.cnname" :value="obj.enname"></el-option>
            <!-- <el-option label="运维" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option> -->
          </el-select>
        </el-form-item>
        <el-form-item label="是否显示">
          <el-radio-group v-model="form.resource1">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="是否推荐">
          <el-radio-group v-model="form.resource2">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="作者">
          <el-input v-model="form.name2"></el-input>
        </el-form-item>
        <el-form-item label="导读">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="压缩图">
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
      
  </div>
</template>

<script>
import Axios from 'axios'
export default {
    data() {
      return {
        oneId: '',
        towId: '',
        oneData: '',
        twoData: '',
        form: {
          name1: '',
          name2: '',          
          region1: '',
          region2: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource1: '',
          resource2: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      getId (jb) {
        if(jb == 'one'){
            this.oneData.forEach((obj, i) => {
            if(obj.enname == this.form.region1){
                this.oneId = obj.id;
            }
        });
        }else{
            this.twoData.forEach((obj, i) => {
                if(obj.enname == this.form.region2){
                    this.twoId = obj.id;
                    console.log(this.twoId);
                }
            });
        }           
    },
      onSubmit(){
        console.log(111)
        const obj ={
          enname: this.form.region1,
          article_name: this.form.name1,
          daodu: this.form.desc,
          editer: this.form.name2,
          content: '',
          oneId: this.oneId,
          towId: this.twoId 
        }
        Axios.post('/back/article/insertArticle', obj).then((data) => {
        console.log(data);
        if(data.data.code == 1213){
            this.$message({
                showClose: true,
                message: '文章插入成功',
                type: 'success'
            })
        }else{
            this.$message({
                showClose: true,
                message: '文章插入失败',
                type: 'error'
            })
        }
      })
      }
    },
    created () {
      Axios.get('/back/article/class').then((data) => {
          console.log(data.data.data.oneData);
          this.oneData = data.data.data.oneData;
          this.twoData = data.data.data.twoData;
      })       
    }
}
</script>

<style scopedSlots>
.el-upload-dragger{
  width: 300px;
  height: 150px;
}
</style>

<template>
  <div class="classmain">
    <h1>增加一级分类</h1>
    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <p>一级分类列表</p>
      <el-form-item label="一级中文名">
          <el-input v-model="ruleForm2.ch_name1"></el-input>
        </el-form-item>
      <el-form-item label="一级英文名">
          <el-input v-model="ruleForm2.en_name1"></el-input>
        </el-form-item>
      <p>二级分类列表</p>
      <el-form-item label="二级中文名">
          <el-input v-model="ruleForm2.ch_name2"></el-input>
      </el-form-item>
      <el-form-item label="二级英文名">
          <el-input v-model="ruleForm2.en_name3"></el-input>
        </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    name: 'index',
  data () {
    var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入英文名称'));
        }
      };
    return {
        ruleForm2: {
            ch_name1:"",
            en_name1:"",
            ch_name2:"",
            en_name2:""
        },
        rules2: {
          enname_one: [
            { validator: validatePass, trigger: 'blur' }
          ],
           enname_two: [
            { validator: validatePass, trigger: 'blur' }
          ],
         
        }
    }
  },
   methods: {
      submitForm(formName) {
         this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
        console.log(formName)
      }
    }
}
</script>

<style>

</style>

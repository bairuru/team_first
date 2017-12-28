<template>
  <div>
      <h1>增加接口</h1>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="标题">
          <el-input v-model="form.name1"></el-input>
        </el-form-item>
        <el-form-item label="接口地址">
          <el-input v-model="form.name2"></el-input>
        </el-form-item>
        <el-form-item label="类型">
          <el-select v-model="form.region1" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="请求类型">
          <el-select v-model="form.region2" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="请求参数">
          <el-input type="textarea" v-model="form.desc1"></el-input>
        </el-form-item>
        <el-form-item label="相应数据">
          <el-input type="textarea" v-model="form.desc2"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
export default {
    data() {
      return {
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
        console.log('submit!');
      }
    }
}
</script>

<style>

</style>
简约  11:08:54
<template>
  <div>
      <h1>增加接口</h1>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="标题">
          <el-input v-model="form.name1"></el-input>
        </el-form-item>
        <el-form-item label="接口地址">
          <el-input v-model="form.name2"></el-input>
        </el-form-item>
        <el-form-item label="类型">
          <el-select v-model="form.region1" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="请求类型">
          <el-select v-model="form.region2" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="请求参数">
          <el-input type="textarea" v-model="form.desc1"></el-input>
        </el-form-item>
        <el-form-item label="相应数据">
          <el-input type="textarea" v-model="form.desc2"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
export default {
    data() {
      return {
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
        console.log('submit!');
      }
    }
}
</script>

<style>

</style>

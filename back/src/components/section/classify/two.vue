<template>
  <div>
      <el-form ref="form" :model="form" label-width="80px">
        <h1>一级分类列表</h1>
        <el-form-item label="一级中文类名">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="运维" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <h1>二级分类列表</h1>
        <el-form-item label="二级中文类名">
          <el-input v-model="form.name1"></el-input>
        </el-form-item>
        <el-form-item label="二级英文类名">
          <el-input v-model="form.name2"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button>重置</el-button>
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
          resource: ''
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

<style scopedSlots>
.el-form-item__label{
  width: 150px!important;
  display: inline;
}

.el-form-item__content>.el-input{
  width: 50%;
}
</style>

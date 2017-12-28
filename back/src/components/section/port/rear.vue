<template>
  <div>
      <h1>后台接口</h1>
      <el-table
        :data="nowData"
        border
        style="width: 100%">
        <el-table-column
          prop="url"
          label="地址">
        </el-table-column>
        
        <el-table-column
          prop="backorfont"
          label="前后端分类"
          width="180">
        </el-table-column>

        <el-table-column
          prop="time"
          label="日期"
          width="180">
        </el-table-column>

        <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="nowPage"
          :page-sizes="[2, 5, 10, 15]"
          :page-size="everyrows"
          layout="total, sizes, prev, pager, next, jumper"
          :total="this.oldData.length">
        </el-pagination>
      </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
    data() {
      return {
        nowPage: 1,        
        oldData: [],
        nowData: [],
        everyrows: 5,
        type: 'back',
        }
    },
    created () {
      console.log(this.type)
      Axios.get(`/back/api/select?type=${this.type}`).then((data) => {
          console.log(data.data.data);
          this.oldData=data.data.data;
          this.nowData=this.oldData.slice(0, this.everyrows)
      })       
    },
    methods: {
      handleSizeChange(val){
        console.log(val+'size')
        this.everyrows=val;
        this.nowData=this.oldData.slice((this.nowPage-1)*this.everyrows,this.everyrows)
      },
      handleCurrentChange(val){
        console.log(val+'current')
        this.nowPage=val
        this.nowData=this.oldData.slice((val-1)*this.everyrows,this.everyrows*val)
        console.log(this.everyrows)
      },
      handleEdit(index, row) {
        console.log(index, row);
        this.$router.push({name: 'portList',params:{data: row}})
      },
      handleDelete(index, row) {
        console.log(index, row);
        const id = row.id;
        Axios.post('back/api/del', {id: row.id}).then((data)=>{
          console.log(data)
          if(data.data.code == 1015){
            this.$message({
                showClose: true,
                message: '数据删除成功',
                type: 'success'
            })
        }else{
            this.$message({
                showClose: true,
                message: '数据删除失败',
                type: 'error'
            })
        }
        this.$router.go(0)
        })
      }
    }
}
</script>

<style>

</style>

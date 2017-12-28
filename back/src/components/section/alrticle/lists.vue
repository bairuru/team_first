<template>
    <div>
      <h1>文章列表</h1>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="address"
          label="标题">
        </el-table-column>
        <el-table-column
          prop="name"
          label="作者"
          width="180">
        </el-table-column>
        <el-table-column
          prop="date"
          label="时间"
          width="180">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="redact"
              >编辑</el-button>
            <el-button
            size="mini"
            type="danger"
            @click="open2"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          :current-page="currentPage4"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="40">
        </el-pagination>
      </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }
        ],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      }
    },
    methods: {
       open2() {
        this.$confirm('确定删除此窗口文档吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      redact(){
        this.$router.push({name: 'alert'})
      }
    }
}
</script>

<style scopedSlots>
.el-tag{
  border: none;
  background: transparent;
  color: #000;
}
.el-pagination{
  margin-top: 30px;
  margin-left: 100px;
}
</style>

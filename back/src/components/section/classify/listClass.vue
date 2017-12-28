<template>
<div>
  <h1>分类管理</h1>
  <el-table
    :data="tableData5"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
          <el-table
            :data="tableData5"
            style="width: 100%"
          >
            <el-table-column
                label="中文标识"
                width="180"
                prop='name'
                >
              </el-table-column>
              <el-table-column
                label="英文标识"
                width="180"
                prop='id'
                >
              </el-table-column>
              <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="small"
                  @click="handleEdit">编辑</el-button>
                <el-button
                  size="small"
                  type="danger"
                  @click="handleDelete">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
      </template>
    </el-table-column>
    <el-table-column
      label="中文名称"
      prop="id">
    </el-table-column>
    <el-table-column
      label="英文名称"
      prop="name">
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="small"
          @click="handleEdit(scope.$index, scope.row,'one')">编辑</el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>
<script>
export default {
  data() {
      return {
        tableData5: [{
          id: '12987123',
          name: '好滋好味鸡蛋仔',
          desc: '荷兰优质淡奶，奶香浓而不腻'
        }, {
          id: '12987123',
          name: '好滋好味鸡蛋仔',
          desc: '荷兰优质淡奶，奶香浓而不腻'
        }, {
          id: '12987123',
          name: '好滋好味鸡蛋仔',
          desc: '荷兰优质淡奶，奶香浓而不腻'
        }, {
          id: '12987123',
          name: '好滋好味鸡蛋仔',
          desc: '荷兰优质淡奶，奶香浓而不腻'
        }]
      }
    },
    methods: {
      handleEdit() {
        this.$router.push({name: 'portList'})
      },
      handleDelete() {
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
      }
    }
}
</script>

<style scopedSlots>
.demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
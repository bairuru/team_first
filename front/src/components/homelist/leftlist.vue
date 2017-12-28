<template>
  <div>
        <div class="main-table demonstration">
                <el-table
                :data="newdata"
                @row-click.self="getData"
                style="width: 100%;border-radius: 10px;">
                <el-table-column
                prop="article_name"
                label="标题"
                width="180">
                </el-table-column>
                <el-table-column
                prop="cnname_one"
                label="分类"
                width="180">
                </el-table-column>
                <el-table-column
                prop="editer"
                label="作者">
                </el-table-column>
                 <el-table-column
                prop="time"
                label="发布时间"
               >
                </el-table-column>
            </el-table>
        </div>
        <div class="page">
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="page"
            :page-sizes="[2, 5, 10, 15]"
            :page-size="currentlist"
            layout="total, sizes, prev, pager, next, jumper"
            :total="dataslist.length">
    </el-pagination>
        </div>
  </div>
</template>

<script>
import axios from 'axios';
import bus from '../../bus';
export default {
    name: 'leftlist',
    data () {
        return {
            currentlist: 5,
            page: 1,
            dataslist: [],
            newdata: []
        }
    },
    created () {
        axios.get('/api/api/front/article/getArticleAll').then((res) => {
            this.dataslist=res.data.data;
            this.newdata = this.dataslist.slice(0,this.currentlist);
        })
        bus.$on('filter', (res) => {
            let list = [];
            this.dataslist.map((item) => {
                if(item.article_name.indexOf(res) !== -1 || item.cnname_one.indexOf(res) !== -1 || item.editer.indexOf(res) !== -1) {
                    list.push(item);
                }
            })
            this.newdata = list;
        })
    },
    methods: {
        getData(row){
            console.log(row)
            this.$router.push({name: 'detail', params: row});
        },
        handleSizeChange(val) { //每页条数
            this.currentlist=val;
            this.newdata=this.dataslist.slice((this.page-1)*val, this.currentlist);
        },
        handleCurrentChange(val) { //当前页currentPage
            this.page = val;
            this.newdata=this.dataslist.slice((val-1)*(this.currentlist), this.currentlist*val);
        }
    }
    
}
</script>

<style scoped>
.main-table{
    width: 970px;
    padding: 7px;
    border-radius: 5px;
    background-color: yellow;
}
.page{
    margin-top: 10px;
}
</style>

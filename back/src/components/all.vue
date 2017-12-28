<template>
    <el-container>
        <el-header>
            <heads></heads>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <menus></menus>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import heads from './head/head'
import menus from './section/menu'
export default {
    components: {
        heads,
        menus
    }
}
</script>

<style scopedSlots>
.el-header{
    height: 52px!important;
    background: #5e9fa1;
    color: #fff;
}
.el-main>h1{
    margin-bottom: 50px;
}
</style>

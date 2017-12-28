<template>
    <div>
        <h3 :class="{ba: isShow}" @click="change()">{{this.all.title}}</h3>
        <p v-for="(v, k) in all.cont" v-if="isShow"  @click="emitTitle(v.path)">{{v.tit}}</p>
    </div>
</template>

<script>
export default {
    props: ['all'],
    data () {
        return {
            isShow: false
        }
    },
    methods: {
        change(){
            this.isShow = !this.isShow;
        },
        emitTitle (path) {
            this.$router.push({name: path});
        }
    }
}
</script>

<style scopedSlots>
.ba{
    background: #edf5ff;
}
</style>

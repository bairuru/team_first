<template>
  <div class="menuBox">
      <div class="menuGroup" v-for='(v,k) in data' :key='k'>
            <menu-itemp :all='v'></menu-itemp>
      </div>
  </div>
</template>

<script>
import data from '../../assets/data/data.json';
import menuItemp from './menuItem';
export default {
    data () {
        return {
            data
        };
    },
    components: {
        menuItemp
    }
}
</script>

<style scopedSlots>
.menuBox{
    width: 100%;
}
.menuGroup{
    width: 100%;
}
.menuGroup h3{
    line-height: 40px;
    padding-left: 30px;
}
.menuGroup p{
    line-height: 40px;
    padding-left: 30px;
}
</style>

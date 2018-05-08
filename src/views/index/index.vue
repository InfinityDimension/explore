<template>
  <div class="index">
    <el-container>
      <el-header>
        <div>header</div>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
  import {handleLocalStorage} from '../../utils/util'
export default {
  name: 'index',
  data () {
    return {
      search: '' //搜索内容
    }
  },
  beforeCreate(){
    document.querySelector('body').removeAttribute('style');
  },
  methods: {
    signOut(){
      handleLocalStorage('remove','login');
      this.$router.push({path: '/login'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  line-height: 80px;
  display: flex;
  justify-content: space-between;
}
</style>

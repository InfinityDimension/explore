<template>
  <div class="index">
    <el-container>
      <el-header height="auto">
        <div class="container">
          <el-row>
            <el-col :xs="24" :sm="5">
              <div class="flex">
                <img src="/static/img/logo.png" alt="" class="logo-img">
                <i class="iconfont icon-meun" @click="menuShow">&#xe608;</i>
              </div>
            </el-col>
            <el-col :xs="24" :sm="10" :class="{'hidden-xs-only':menu}">
              <div class="search-box">
                <input type="text" placeholder="Find address/delefate/block/transitation" v-model="search"/>
                <button></button>
              </div>
            </el-col>
            <el-col :xs="24" :sm="9" :class="{'hidden-xs-only':menu}">
              <div class="menu">
                <div class="tools">
                  <div class="item">
                    <span>Tools</span>
                    <i class="iconfont">&#xe614;</i>
                  </div>
                  <div class="tools-list">
                    <ul>
                      <li><router-link to="">Top Accounts</router-link></li>
                      <li><router-link to="">Delegate Monitor</router-link></li>
                      <li><router-link to="">Network Monitor</router-link></li>
                    </ul>
                  </div>
                </div>
                <div class="wallet item">
                  <router-link to="">My Wallet</router-link>
                </div>
                <div class="language">
                  <div class="item">
                    <img src="/static/img/language-cn.png" alt="">
                    <span>Chinese</span>
                    <i class="iconfont">&#xe614;</i>
                  </div>
                  <div class="language-list">
                    <ul>
                      <li><img src="/static/img/language-cn.png" alt=""><span>简体中文</span></li>
                      <li><img src="/static/img/language-en.png" alt=""><span>English</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer height="auto">Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
  import {handleLocalStorage} from '../../utils/util'
export default {
  name: 'index',
  data () {
    return {
      search: '', //搜索内容
      menu: true, //头部导航小屏不显示
    }
  },
  beforeCreate(){
    document.querySelector('body').removeAttribute('style');
  },
  methods: {
    menuShow() {
      this.menu = !this.menu;
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

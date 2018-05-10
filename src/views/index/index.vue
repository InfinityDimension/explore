<template>
  <div class="index">
    <el-container>
      <el-header height="auto">
        <div class="container">
          <el-row>
            <el-col :xs="24" :sm="5">
              <div class="flex">
                <router-link to="/"><img src="/static/img/logo.png" alt="" class="logo-img"></router-link>
                <i class="iconfont icon-meun" @click="menuShow">&#xe608;</i>
              </div>
            </el-col>
            <el-col :xs="24" :sm="9" :class="{'hidden-xs-only':menu}">
              <div class="search-box">
                <input type="text" :placeholder="$t('header.placeholder')" v-model="search"/>
                <button></button>
              </div>
            </el-col>
            <el-col :xs="24" :sm="10" :class="{'hidden-xs-only':menu}">
              <div class="menu">
                <div class="tools">
                  <div class="item">
                    <span>{{ $t("header.menu.tools.name") }}</span>
                    <i class="iconfont">&#xe614;</i>
                  </div>
                  <div class="tools-list">
                    <ul>
                      <li><router-link to="/accounts">{{ $t("header.menu.tools.nav1") }}</router-link></li>
                      <li><router-link to="/delegate">{{ $t("header.menu.tools.nav2") }}</router-link></li>
                      <li><router-link to="/network">{{ $t("header.menu.tools.nav3") }}</router-link></li>
                    </ul>
                  </div>
                </div>
                <div class="wallet item">
                  <router-link to="">{{ $t("header.menu.wallet") }}</router-link>
                </div>
                <div class="language">
                  <div class="item">
                    <img :src="'/static/img/language-'+language.lang+'.png'" alt="">
                    <span>{{language.value}}</span>
                    <i class="iconfont">&#xe614;</i>
                  </div>
                  <div class="language-list">
                    <ul>
                      <li v-for="item in langs" @click="changeLanguage(item)">
                        <img :src="'/static/img/language-'+item.lang+'.png'" alt="">
                        <span>{{item.value}}</span>
                      </li>
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
      <el-footer height="auto">
        <div class="container">
          <div class="footer">
            <ul>
              <li>{{ $t("footer.phone") }}</li>
              <li>{{ $t("footer.email") }}</li>
              <li>{{ $t("footer.address") }}</li>
            </ul>
            <div class="nav">
              <router-link to="" class="iconfont">&#xe6d9;</router-link>
              <router-link to="" class="iconfont">&#xecc1;</router-link>
              <router-link to="" class="iconfont wx">&#xe63f;</router-link>
              <router-link to="" class="iconfont">&#xe609;</router-link>
            </div>
          </div>
          <div class="footer">
            <img src="/static/img/foot_logo.png" alt="">
            <p class="copyright">{{ $t("footer.copyright") }}</p>
          </div>
        </div>
      </el-footer>
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
      language: {lang: 'en', value: 'English'}, //当前语言
      langs: [
        {lang: 'en', value: 'English'},
        {lang: 'cn', value: '简体中文'}
        ], //语言切换
    }
  },
  beforeCreate(){
    document.querySelector('body').removeAttribute('style');
  },
  beforeMount() {
    let lang = localStorage.lang || 'en';
    let language = this.langs;
    for(let item of language){
      if(item.lang === lang){
        this.language = item;
      }
    }
  },
  methods: {
    menuShow() {
      this.menu = !this.menu;
    },
    changeLanguage(item) {
      this.language = item;
      handleLocalStorage('set','lang',item.lang);
      this.$i18n.locale = item.lang;
    }
  }
}
</script>

<style scoped>

</style>

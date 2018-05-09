<template>
  <div class="home">
    <div class="banner">
      <img src="/static/img/logo.png" alt="" class="logo">
      <p>{{ $t("home.banner") }}</p>
      <div class="imgbg"></div>
    </div>
    <div class="container data">
      <ul>
        <li>
          <img src="/static/img/icon_height.png" alt="">
          <div>
            <h5>{{ $t("home.data.height") }}</h5>
            <p>4321421</p>
          </div>
        </li>
        <li>
          <img src="/static/img/icon_supply.png" alt="">
          <div>
            <h5>{{ $t("home.data.supply") }}</h5>
            <p>4321421</p>
          </div>
        </li>
        <li>
          <img src="/static/img/icon_users.png" alt="">
          <div>
            <h5>{{ $t("home.data.users") }}</h5>
            <p>4321421</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="container">
      <div class="title">
        <h2>{{ $t("home.table1") }}</h2>
        <router-link to="">{{ $t("home.viewAll") }}</router-link>
      </div>
      <div class="table-box">
        <transactionTable :tableData="transactionData"></transactionTable>
      </div>
      <div class="title">
        <h2>{{ $t("home.table2") }}</h2>
        <router-link to="">{{ $t("home.viewAll") }}</router-link>
      </div>
      <div class="table-box">
        <blockTable :tableData="blockData"></blockTable>
      </div>
    </div>
  </div>
</template>

<script>
import blockTable from '../../components/blockTable'
import transactionTable from '../../components/transactionTable'
export default {
  name: "home",
  data(){
    return {
      transactionData: [], //交易列表
      blockData: [], //区块列表
    }
  },
  methods: {

  },
  components:{
    transactionTable,
    blockTable
  }
}
</script>

<style scoped>

</style>

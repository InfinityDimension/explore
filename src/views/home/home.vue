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
        <router-link to="allTransaction">{{ $t("home.viewAll") }}</router-link>
      </div>
      <div class="table-box">
        <div class="table-scroll">
          <transactionTable :tableData="transactionData"></transactionTable>
        </div>
      </div>
      <div class="title">
        <h2>{{ $t("home.table2") }}</h2>
        <router-link to="/allBlock">{{ $t("home.viewAll") }}</router-link>
      </div>
      <div class="table-box">
        <div class="table-scroll">
          <blockTable :tableData="blockData"></blockTable>
        </div>
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
      transactionData: [{
        id: '6421980538sdsad',
        height: '596356',
        time: '2018/01/13 17:44:47',
        transcation: '0',
        generatedBy: 'HTRoad',
        amount: '499.12345678',
        forged: '4.1'
      },{
        id: '6421980538sdsad',
        height: '596356',
        time: '2018/01/13 17:44:47',
        transcation: '0',
        generatedBy: 'HTRoad',
        amount: '499.12345678',
        forged: '4.1'
      },{
        id: '6421980538sdsad',
        height: '596356',
        time: '2018/01/13 17:44:47',
        transcation: '0',
        generatedBy: 'HTRoad',
        amount: '499.12345678',
        forged: '4.1'
      }], //交易列表
      blockData: [{
        id: '6421980538sdsad',
        height: '596356',
        time: '2018/01/13 17:44:47',
        transcation: '0',
        generatedBy: 'HTRoad',
        amount: '499.12345678',
        forged: '4.1'
      },{
        id: '6421980538sdsad',
        height: '596356',
        time: '2018/01/13 17:44:47',
        transcation: '0',
        generatedBy: 'HTRoad',
        amount: '499.12345678',
        forged: '4.1'
      },{
        id: '6421980538sdsad',
        height: '596356',
        time: '2018/01/13 17:44:47',
        transcation: '0',
        generatedBy: 'HTRoad',
        amount: '499.12345678',
        forged: '4.1'
      }], //区块列表
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

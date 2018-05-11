<template>
  <div class="transaction-detail container">
    <div class="title">
      <h2>{{ $t("blockDetail.title") }}</h2>
    </div>
    <ul class="detail-info">
      <li class="flex">
        <span>ID</span>
        <p>{{ id }}</p>
        <div class="copy">
          <i class="iconfont" v-clipboard:copy="id" v-clipboard:success="onCopy">&#xe63d;</i>
          <img src="/static/img/icon_copied.png" v-show="copyId" alt="">
        </div>
      </li>
    </ul>
    <div class="title">
      <h2>{{ $t("blockDetail.summary") }}</h2>
    </div>
    <ul class="summary">
      <li class="flex">
        <div>Sender</div>
        <div><span class="blue">12343151022746459289L</span></div>
      </li>
      <li class="flex">
        <div>Sender</div>
        <div><span class="blue">12343151022746459289L</span></div>
      </li>
      <li class="flex">
        <div>Sender</div>
        <div>11</div>
      </li>
      <li class="flex">
        <div>Sender</div>
        <div>19.9 <span class="grey">HTC</span></div>
      </li>
      <li class="flex">
        <div>Sender</div>
        <div>0.1 <span class="grey">HTC</span></div>
      </li>
      <li class="flex">
        <div>Sender</div>
        <div>2018/04/07 16:37:12</div>
      </li>
      <li class="flex">
        <div>Sender</div>
        <div><span class="blue">12343151022746459289L</span></div>
      </li>
    </ul>
    <div class="title">
      <h2>{{ $t("blockDetail.transactions") }}</h2>
    </div>
    <div class="table-box">
      <div class="table-scroll">
        <transactions :tableData="transactionsData"></transactions>
      </div>
    </div>
  </div>
</template>

<script>
import transactions from '../../components/transactions'
export default {
  name: "transaction-detail",
  data(){
    return {
      id: '3810912702186471268970',
      copyId: false, //复制id
      transactionsData: [{
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
      }] //交易列表
    }
  },
  methods:{
    onCopy(){
      this.copyId = true;
      setTimeout(()=>{
        this.copyId = false;
      },2000)
    }
  },
  components:{
    transactions
  }
}
</script>

<style scoped>

</style>

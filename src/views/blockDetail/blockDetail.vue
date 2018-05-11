<template>
  <div class="transaction-detail container">
    <div class="title">
      <h2>{{ $t("blockDetail.title") }}</h2>
    </div>
    <ul class="detail-info">
      <li class="flex">
        <span>{{ $t("blockDetail.info.id") }}</span>
        <p>{{ id }}</p>
        <div class="copy">
          <i class="iconfont" v-clipboard:copy="id" v-clipboard:success="onCopy">&#xe63d;</i>
          <img src="/static/img/icon_copied.png" v-show="copyId" alt="">
        </div>
      </li>
    </ul>
    <div class="title">
      <h2>{{ $t("blockDetail.summary.title") }}</h2>
    </div>
    <ul class="summary">
      <li class="flex">
        <div>{{ $t("blockDetail.summary.height") }}</div>
        <div><span class="blue">46459289L</span></div>
      </li>
      <li class="flex">
        <div>{{ $t("blockDetail.summary.transactions") }}</div>
        <div>4</div>
      </li>
      <li class="flex">
        <div>{{ $t("blockDetail.summary.confirmations") }}</div>
        <div>11</div>
      </li>
      <li class="flex">
        <div>{{ $t("blockDetail.summary.reward") }}</div>
        <div>19.9 <span class="grey">HTC</span></div>
      </li>
      <li class="flex">
        <div>{{ $t("blockDetail.summary.fee") }}</div>
        <div>0.2 <span class="grey">HTC</span></div>
      </li>
      <li class="flex">
        <div>{{ $t("blockDetail.summary.forged") }}</div>
        <div>4.2 <span class="grey">HTC</span></div>
      </li>
      <li class="flex">
        <div>{{ $t("blockDetail.summary.amount") }}</div>
        <div>2.32432523324 <span class="grey">HTC</span></div>
      </li>
      <li class="flex">
        <div>{{ $t("blockDetail.summary.timestamp") }}</div>
        <div>2018/21/32 12:12:11</div>
      </li>
      <li class="flex">
        <div>{{ $t("blockDetail.summary.generated") }}</div>
        <div><span class="blue">Jason</span></div>
      </li>
      <li class="flex">
        <div>{{ $t("blockDetail.summary.previous") }}</div>
        <div><span class="blue">12343151022746459289L</span></div>
      </li>
      <li class="flex">
        <div>{{ $t("blockDetail.summary.next") }}</div>
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

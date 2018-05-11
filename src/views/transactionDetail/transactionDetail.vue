<template>
  <div class="transaction-detail container">
    <div class="title">
      <h2>{{ $t("transactionDetail.title") }}</h2>
    </div>
    <ul class="detail-info">
      <li class="flex">
        <span>{{ $t("transactionDetail.info.id") }}</span>
        <p>{{ id }}</p>
        <div class="copy">
          <i class="iconfont" v-clipboard:copy="id" v-clipboard:success="onCopy">&#xe63d;</i>
          <img src="/static/img/icon_copied.png" v-show="copyId" alt="">
        </div>
      </li>
    </ul>
    <div class="title">
      <h2>{{ $t("transactionDetail.summary.title") }}</h2>
    </div>
    <ul class="summary">
      <li class="flex">
        <div>{{ $t("transactionDetail.summary.sender") }}</div>
        <div><span class="blue">12343151022746459289L</span></div>
      </li>
      <li class="flex">
        <div>{{ $t("transactionDetail.summary.receipt") }}</div>
        <div><span class="blue">12343151022746459289L</span></div>
      </li>
      <li class="flex">
        <div>{{ $t("transactionDetail.summary.confirmations") }}</div>
        <div>11</div>
      </li>
      <li class="flex">
        <div>{{ $t("transactionDetail.summary.amount") }}</div>
        <div>19.9 <span class="grey">HTC</span></div>
      </li>
      <li class="flex">
        <div>{{ $t("transactionDetail.summary.fee") }}</div>
        <div>0.1 <span class="grey">HTC</span></div>
      </li>
      <li class="flex">
        <div>{{ $t("transactionDetail.summary.timestamp") }}</div>
        <div>2018/04/07 16:37:12</div>
      </li>
      <li class="flex">
        <div>{{ $t("transactionDetail.summary.block") }}</div>
        <div><span class="blue">12343151022746459289L</span></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "transaction-detail",
  data(){
    return {
      id: '3810912702186471268970',
      copyId: false
    }
  },
  methods:{
    onCopy(){
      this.copyId = true;
      setTimeout(()=>{
        this.copyId = false;
      },2000)
    }
  }
}
</script>

<style scoped>

</style>

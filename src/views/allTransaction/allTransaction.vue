<template>
  <div class="all-transaction">
    <div class="container">
      <div class="title">
        <h2>{{ $t("allTransaction.title") }}</h2>
      </div>
      <div class="table-box">
        <div class="table-scroll">
          <transactionTable :tableData="transactionData"></transactionTable>
          <pagination @pageChange="getPageData"></pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import transactionTable from '../../components/transactionTable'
  import pagination from '../../components/pagination'
  export default {
    name: "all-transaction",
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
        }], //区块列表
      }
    },
    methods: {
      getPageData(val){
        console.log('接收到的分页：'+val)
      }
    },
    components:{
      transactionTable,
      pagination
    }
  }
</script>

<style scoped>

</style>

<template>
  <div class="transaction-table">
    <el-table
      :data="tableData"
      stripe
      style="width: 100%"
      fit>
      <el-table-column
        prop="id"
        :label="$t('transactionTable.th1')"
        min-width="100">
      </el-table-column>
      <el-table-column
        prop="height"
        :label="$t('transactionTable.th2')">
      </el-table-column>
      <el-table-column
        prop="time"
        :label="$t('transactionTable.th3')"
        min-width="110">
      </el-table-column>
      <el-table-column
        prop="transcation"
        :label="$t('transactionTable.th4')">
      </el-table-column>
      <el-table-column
        prop="generatedBy"
        :label="$t('transactionTable.th5')">
      </el-table-column>
      <el-table-column
        prop="amount"
        :label="$t('transactionTable.th6')">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "block-table",
    data(){
        return {

        }
    },
    props:['tableData']
  }
</script>

<style lang="scss">
  .transaction-table{
    .el-table td:nth-child(1)>.cell,.el-table td:nth-child(3)>.cell,.el-table td:nth-child(4)>.cell{
       color: #3291FF;
     }
  }
</style>

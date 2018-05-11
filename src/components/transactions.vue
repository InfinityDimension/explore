<template>
  <div class="transaction-table">
    <el-table
      :data="tableData"
      stripe
      style="width: 100%"
      fit>
      <el-table-column
        prop="id"
        :label="$t('transactions.th1')"
        min-width="100">
        <template slot-scope="scope">
          <router-link to="/transaction/detail">{{ scope.row.id }}</router-link>
        </template>
      </el-table-column>
      <el-table-column
        prop="height"
        :label="$t('transactions.th2')">
      </el-table-column>
      <el-table-column
        prop="time"
        :label="$t('transactions.th3')"
        min-width="110">
      </el-table-column>
      <el-table-column
        prop="transcation"
        :label="$t('transactions.th4')">
      </el-table-column>
      <el-table-column
        prop="generatedBy"
        :label="$t('transactions.th5')">
      </el-table-column>
      <el-table-column
        prop="amount"
        :label="$t('transactions.th6')">
      </el-table-column>
      <el-table-column
        prop="forged"
        :label="$t('transactions.th7')">
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
    .el-table td:nth-child(5)>.cell{
      color: #28CF4A;
    }
  }
</style>

<template>
  <div class="block-table">
    <el-table
      :data="tableData"
      stripe
      style="width: 100%"
      fit>
      <el-table-column
        prop="id"
        :label="$t('blockTable.th1')"
        min-width="100">
      </el-table-column>
      <el-table-column
        prop="height"
        :label="$t('blockTable.th2')">
      </el-table-column>
      <el-table-column
        prop="time"
        :label="$t('blockTable.th3')"
        min-width="110">
      </el-table-column>
      <el-table-column
        prop="transcation"
        :label="$t('blockTable.th4')">
      </el-table-column>
      <el-table-column
        prop="generatedBy"
        :label="$t('blockTable.th5')">
      </el-table-column>
      <el-table-column
        prop="amount"
        :label="$t('blockTable.th6')">
      </el-table-column>
      <el-table-column
        prop="forged"
        :label="$t('blockTable.th7')">
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
  .block-table{
    .el-table th,.el-table td{
      height: 56px;
      border-bottom: none;
    }
    .el-table th>.cell{
      color: #C5C7CB;
      font-weight: 500;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
    .el-table td>.cell{
      color: #4C5155;
      font-weight: 500;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
    .el-table td:nth-child(1)>.cell{
       color: #3291FF;
     }
    .el-table td:nth-child(5)>.cell{
      color: #3291FF;
    }
  }
</style>

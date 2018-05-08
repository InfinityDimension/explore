<template>
  <div class="home-table">
    <el-table
      :data="tableData"
      stripe
      style="width: 100%"
      fit>
      <el-table-column
        prop="id"
        :label="$t('homeTable.th1')">
      </el-table-column>
      <el-table-column
        prop="time"
        :label="$t('homeTable.th2')"
        min-width="114">
      </el-table-column>
      <el-table-column
        prop="sender"
        :label="$t('homeTable.th3')">
      </el-table-column>
      <el-table-column
        prop="recipient"
        :label="$t('homeTable.th4')">
      </el-table-column>
      <el-table-column
        prop="amount"
        :label="$t('homeTable.th5')">
      </el-table-column>
      <el-table-column
        prop="fee"
        :label="$t('homeTable.th6')">
      </el-table-column>
      <el-table-column
        prop="confirmations"
        :label="$t('homeTable.th7')">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "home-table",
    data(){
        return {

        }
    },
    props:['tableData']
  }
</script>

<style lang="scss">
  .home-table{
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
    .el-table td:nth-child(3)>.cell{
      color: #3291FF;
    }
    .el-table td:nth-child(4)>.cell{
      color: #3291FF;
    }
    .el-table td:nth-child(5)>.cell{
      color: #28CF4A;
    }
    .el-table--striped .el-table__body tr.el-table__row--striped td:nth-child(5)>.cell{
      color: #FF6556;
    }
    .el-table--striped .el-table__body tr.el-table__row--striped td:nth-child(7)>.cell{
      color: #34AA4C;
    }
  }
</style>

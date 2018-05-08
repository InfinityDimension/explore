<template>
  <div class="vote-confirm-table">
    <el-table
      :data="tableData"
      stripe
      style="width: 100%"
      fit>
      <el-table-column
        prop="name"
        :label="$t('vote.view.th1')">
      </el-table-column>
      <el-table-column
        prop="address"
        :label="$t('vote.view.th2')"
        min-width="114">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "vote-confirm-table",
    data(){
        return {

        }
    },
    props:['tableData']
  }
</script>

<style lang="scss">
  .vote-confirm-table{
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
    .el-table th:nth-child(2)>.cell{
      text-align: right;
    }
    .el-table td>.cell{
      color: #4C5155;
      font-weight: 500;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
    .el-table td:nth-child(2)>.cell{
      color: #3291FF;
      text-align: right;
    }
  }
</style>

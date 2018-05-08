<template>
  <div class="record-table">
    <el-table
      :data="tableData"
      stripe
      style="width: 100%"
      fit>
      <el-table-column
        prop="rank"
        :label="$t('vote.voteData.record.th1')">
      </el-table-column>
      <el-table-column
        prop="name"
        :label="$t('vote.voteData.record.th2')"
        min-width="114">
      </el-table-column>
      <el-table-column
        prop="address"
        :label="$t('vote.voteData.record.th3')"
        min-width="160">
      </el-table-column>
      <el-table-column
        prop="productivity"
        :label="$t('vote.voteData.record.th4')">
      </el-table-column>
      <el-table-column
        prop="forgedBlocks"
        :label="$t('vote.voteData.record.th5')">
      </el-table-column>
      <el-table-column
        prop="approval"
        :label="$t('vote.voteData.record.th6')">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "record-table",
    data(){
        return {

        }
    },
    props:['tableData']
  }
</script>

<style lang="scss">
  .record-table{
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
    .el-table td:nth-child(3)>.cell{
       color: #3291FF;
    }
  }
</style>

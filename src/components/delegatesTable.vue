<template>
  <div class="delegate-table">
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="rank"
        :label="$t('vote.voteData.delegates.th1')">
      </el-table-column>
      <el-table-column
        prop="name"
        :label="$t('vote.voteData.delegates.th2')">
      </el-table-column>
      <el-table-column
        prop="address"
        :label="$t('vote.voteData.delegates.th3')"
        min-width="160">
      </el-table-column>
      <el-table-column
        prop="productivity"
        :label="$t('vote.voteData.delegates.th4')">
      </el-table-column>
      <el-table-column
        prop="forgedBlocks"
        :label="$t('vote.voteData.delegates.th5')">
      </el-table-column>
      <el-table-column
        prop="approval"
        :label="$t('vote.voteData.delegates.th6')">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "search-table",
  data(){
    return {

    }
  },
  props:['tableData'],
  methods:{
    handleSelectionChange(val) {
      this.$emit('handleSelectionChange',val);
    }
  }
}
</script>

<style lang="scss">
  .delegate-table{
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
    .el-table td:nth-child(4)>.cell{
      color: #3291FF;
    }
  }
</style>

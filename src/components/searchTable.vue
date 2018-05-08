<template>
  <div class="search-table">
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
        prop="name"
        :label="$t('vote.search.name')"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        :label="$t('vote.search.address')"
        show-overflow-tooltip>
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
  .search-table{
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

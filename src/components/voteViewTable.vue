<template>
  <div class="voters-table">
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
        width="420">
      </el-table-column>
      <el-table-column
        width="50">
        <template slot-scope="scope">
          <span class="delete-icon" @click="deleteRow(scope.$index, tableData)">&times;</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "voters-table",
    data(){
        return {

        }
    },
    props:['tableData'],
    methods:{
      deleteRow(index, rows) {
        this.$emit('deleteRow', index, rows);
      }
    }
  }
</script>

<style lang="scss">
  .voters-table{
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
    .el-table td:nth-child(2)>.cell{
       color: #3291FF;
    }
    .delete-icon{
      display: block;
      width: 20px;
      height: 20px;
      text-align: center;
      line-height: 20px;
      background: #D8D8D8;
      cursor: pointer;
      color: #fff;
      border-radius: 50%;
    }
  }
</style>

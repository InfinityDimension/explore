<template>
  <div class="block-table">
    <el-table
      :data="tableData"
      stripe
      style="width: 100%"
      fit>
      <el-table-column
        prop="ip"
        :label="$t('peerTable.th1')"
        min-width="100">
      </el-table-column>
      <el-table-column
        prop="port"
        :label="$t('peerTable.th2')">
      </el-table-column>
      <el-table-column
        prop="hostName"
        :label="$t('peerTable.th3')"
        min-width="180">
      </el-table-column>
      <el-table-column
        prop="status"
        :label="$t('peerTable.th4')">
        <template slot-scope="scope"><span :class="'status'+scope.row.status"></span></template>
      </el-table-column>
      <el-table-column
        prop="version"
        :label="$t('peerTable.th5')">
      </el-table-column>
      <el-table-column
        prop="platform"
        :label="$t('peerTable.th6')">
      </el-table-column>
      <el-table-column
        prop="height"
        :label="$t('peerTable.th7')">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "peer-table",
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
    .el-table td>.cell .status1{
      display: inline-block;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: #28CF4A;
    }
    .el-table td>.cell .status0{
      display: inline-block;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: #f00;
    }
  }
</style>

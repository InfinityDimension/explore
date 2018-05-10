<template>
  <div class="standby-table">
    <el-table
      :data="tableData"
      stripe
      style="width: 100%"
      fit>
      <el-table-column
        prop="rank"
        :label="$t('standbyTable.th1')"
        min-width="100">
      </el-table-column>
      <el-table-column
        prop="name"
        :label="$t('standbyTable.th2')">
      </el-table-column>
      <el-table-column
        prop="address"
        :label="$t('standbyTable.th3')"
        min-width="180">
      </el-table-column>
      <el-table-column
        prop="productivity"
        :label="$t('standbyTable.th4')">
      </el-table-column>
      <el-table-column
        prop="approval"
        :label="$t('standbyTable.th5')">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "standby-table",
    data(){
        return {

        }
    },
    props:['tableData']
  }
</script>

<style lang="scss">
  .standby-table{
    .el-table td:nth-child(2)>.cell{
      color: #3291FF;
    }
  }
</style>

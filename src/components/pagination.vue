<template>
  <div class="pagination">
    <el-pagination
      background
      layout="prev, pager, next"
      :prev-text="$t('pagination.prev')"
      :next-text="$t('pagination.next')"
      :total="1000"
      @current-change="pageChange">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "pagination",
  methods: {
    pageChange(val){
      this.$emit('pageChange',val);
    }
  }
}
</script>

<style lang="scss">
.pagination{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  .el-pagination.is-background{
    .btn-prev,.btn-next{
      margin: 0;
      width: auto;
      height: 40px;
      padding: 0 6px;
      color: #1B76FF;
      background: #fff;
      border: 1px solid #EAEAEA;
    }
    .btn-prev{
      border-radius: 4px 0 0 4px;
    }
    .btn-next{
      border-radius: 0 4px 4px 0;
    }
    button:disabled{
      color: #D8D8D8;
    }
    .el-pager{
      li{
        color: #1B76FF;
        margin: 0;
        border: 1px solid #EAEAEA;
        background: #fff;
        border-radius: 0;
        width: 40px;
        height: 40px;
        line-height: 40px;
        border-right: none;
      }
      li:first-child{
        border-left: none;
      }
      .active{
        border-top: none;
        border-bottom: none;
      }
    }
  }
}
</style>

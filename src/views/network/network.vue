<template>
  <div class="network container">
    <div class="title">
      <h2>{{ $t("network.title") }}</h2>
    </div>
    <div class="data">
      <el-row>
        <el-col :xs="24" :sm="12" :md="6">
          <div class="item">
            <h5>{{ $t("network.info.item1.title") }}</h5>
            <h4>460/481</h4>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6">
          <div class="item">
            <h5>{{ $t("network.info.item2.title") }}</h5>
            <ul>
              <li class="flex"><h6>0.9.12</h6><p><span>268</span> Peers</p></li>
              <li class="flex"><h6>0.9.12</h6><p><span>268</span> Peers</p></li>
              <li class="flex"><h6>0.9.12</h6><p><span>268</span> Peers</p></li>
            </ul>
            <p><span>77</span> Peers on other versions</p>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6">
          <div class="item">
            <h5>{{ $t("network.info.item3.title") }}</h5>
            <h4 class="blue">16185738</h4>
            <p><span>0</span> HTC from <span>0</span> transactions</p>
            <p>A few seconds ago</p>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6">
          <div class="item">
            <h5>{{ $t("network.info.item4.title") }}</h5>
            <h4>543211543</h4>
            <p>Transferred within <span>17</span> minutes</p>
            <p>From <span>2115</span> transactions in <span>954/8392</span> blocks</p>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="title">
      <h2>{{ $t("network.peers") }}</h2>
    </div>
    <div class="table-box">
      <div class="table-scroll">
        <peersTable :tableData="peersData"></peersTable>
      </div>
    </div>
  </div>
</template>

<script>
import peersTable from '../../components/peersTable'
export default {
  name: "network",
  data(){
    return {
      peersData: [{
        ip: "101.200.220.254",
        port: "8080",
        hostName: "221.253.231.103.static.pacdns.com",
        status: 1,
        version: '1.2.2',
        platform: 'Windows',
        height: '543231'
      },{
        ip: "101.200.220.254",
        port: "8080",
        hostName: "221.253.231.103.static.pacdns.com",
        status: 1,
        version: '1.2.2',
        platform: 'Windows',
        height: '543231'
      },{
        ip: "101.200.220.254",
        port: "8080",
        hostName: "221.253.231.103.static.pacdns.com",
        status: 0,
        version: '1.2.2',
        platform: 'Windows',
        height: '543231'
      }]
    }
  },
  components:{
    peersTable
  }
}
</script>

<style scoped>

</style>

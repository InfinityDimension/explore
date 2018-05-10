<template>
  <div class="delegate container">
    <div class="title">
      <h2>{{ $t("delegate.title") }}</h2>
    </div>
    <div class="monitor">
      <el-row>
        <el-col :xs="24" :sm="12" :md="8">
          <div class="item">
            <img src="/static/img/icon_monitor1.png" alt="">
            <div>
              <h5>Delegates</h5>
              <h4>431</h4>
              <p>Active delegates <span class="blue">101</span></p>
              <p>Standby delegates <span class="blue">67</span></p>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8">
          <div class="item">
            <img src="/static/img/icon_monitor2.png" alt="">
            <div>
              <h5>Delegates</h5>
              <h4>16,523,476</h4>
              <p><span class="grey">101</span> Active delegates</p>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8">
          <div class="item">
            <img src="/static/img/icon_monitor3.png" alt="">
            <div>
              <h5>Delegates</h5>
              <h4><span class="blue">5578840</span></h4>
              <p>By <span class="blue">Catstar</span></p>
              <p><span class="grey">4</span> HTC from <span class="grey">0</span> transac</p>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8">
          <div class="item">
            <img src="/static/img/icon_monitor4.png" alt="">
            <div>
              <h5>Next Forgers</h5>
              <h4><span class="blue">Tembo</span></h4>
              <p><span class="blue">blackswan Catstar3</span></p>
              <p><span class="blue">samuray spacetrucker</span></p>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8">
          <div class="item">
            <img src="/static/img/icon_monitor5.png" alt="">
            <div>
              <h5>Best Forger</h5>
              <h4><span class="blue">CC001</span></h4>
              <p><span class="grey">199,387</span> HTC forged</p>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8">
          <div class="item">
            <img src="/static/img/icon_monitor6.png" alt="">
            <div>
              <h5>Best Productivity</h5>
              <h4>99.3%</h4>
              <p>By <span class="blue">Catstar</span></p>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <ul class="tab flex">
      <li :class="{active: tab === 1}" @click="tabChange(1)">Acitve Delegates</li>
      <li :class="{active: tab === 2}" @click="tabChange(2)">Standby Delegates</li>
    </ul>
    <div class="tab-active" v-show="tab === 1">
      <el-row>
        <el-col :xs="24" :sm="12" :md="6">
          <div>
            <h5>101</h5>
            <p>Forged block recently</p>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6">
          <div>
            <h5>101</h5>
            <p>Missed block</p>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6">
          <div>
            <h5>101</h5>
            <p>Not forging</p>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6">
          <div>
            <h5>101</h5>
            <p>In queue for forging</p>
          </div>
        </el-col>
      </el-row>
      <div class="table-box">
        <div class="table-scroll">
          <delegatesTable :tableData="delegatesData"></delegatesTable>
        </div>
      </div>
    </div>
    <div class="tab-standby" v-show="tab === 2">
      <div class="table-box">
        <div class="table-scroll">
          <standbyTable :tableData="standbyData"></standbyTable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import delegatesTable from '../../components/delegatesTable'
import standbyTable from '../../components/standbyTable'
export default {
  name: "delegate",
  data(){
    return {
      tab: 1, //tab切换
      delegatesData: [{
        rank: 1,
        name: 'hdalshfla89',
        address: 'fjdkashue83174190rwei',
        forged: '412354253',
        time: '2017/32/32 39:32',
        status: 1,
        productivity: '96.3%',
        approval: '42.34%'
      },{
      rank: 1,
        name: 'hdalshfla89',
        address: 'fjdkashue83174190rwei',
        forged: '412354253',
        time: '2017/32/32 39:32',
        status: 0,
        productivity: '96.3%',
        approval: '42.34%'
    }],
      standbyData: [{
        rank: 1,
        name: 'hdalshfla89',
        address: 'fjdkashue83174190rwei',
        productivity: '96.3%',
        approval: '42.34%'
      }],
    }
  },
  methods: {
    tabChange(tab) {
      this.tab = tab;
    }
  },
  components:{
    delegatesTable,
    standbyTable
  }
}
</script>

<style scoped>

</style>

<template>

    <div class="index">

      <!-- 合计板块 -->
      <!-- <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>卡片名称</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{'列表内容 ' + o }}
        </div>
      </el-card> -->
      <div class="countList" >
        <el-row :gutter="10">
          <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
            <el-card>
              <div class="card-panel-icon-wrapper icon-people">
                <svg-icon icon-class="peoples" class-name="card-panel-icon" />
              </div>
              <countTo :startVal='0' :endVal='12300' :duration='3000' class="fr account"></countTo>
            </el-card>
          </el-col>
          <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
            <el-card>
              <i></i>
              <countTo :startVal='0' :endVal='12300' :duration='3000' class="fr account"></countTo>
            </el-card>
          </el-col>
          <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
            <el-card>
              <i></i>
              <countTo :startVal='0' :endVal='12300' :duration='3000' class="fr account"></countTo>
            </el-card>
          </el-col>
          <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
            <el-card >
              <i></i>
              <countTo :startVal='0' :endVal='12300' :duration='3000' class="fr account"></countTo>
            </el-card>
          </el-col>
        </el-row>
      </div>

      <!-- 柱状图板块 -->

      <!-- 折线图板块 -->

      <div class="lineChartList">
        <!-- <el-card > -->
          <el-row class="lineChart">
            <div id="lineChart" style="width:50%;height:300px;">
            </div>
          </el-row>
        <!-- </el-card> -->
      </div>
      <!-- <el-card id="index"></el-card> -->

    </div>

    
</template>

<script>
import { echarts } from "echarts";
//引入折线图
import "echarts/lib/chart/line";
//引入提示框
import "echarts/lib/component/tooltip";
//引入标题
import "echarts/lib/component/title";
//引入图例标志
import "echarts/lib/component/legend";
import countTo from 'vue-count-to'
export default {
  components:{
    countTo
  },
  data(){
    return {

    }
  },
  methods:{
    getEcharts(){
      let dom = document.getElementById('lineChart');
      // 基于准备好的dom，初始化echarts实例
      // console.log('111',dom,myChart)
      var myChart = this.$echarts.init(document.getElementById('lineChart'));
      // 绘制图表
      myChart.setOption({
          title: {
              text: '柱状图'
          },
          tooltip: {},
          xAxis: {
              data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [{
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
          }]
      });

    },

  },
  mounted(){
    this.getEcharts();
  },
}
</script>

<style lang="scss">
.index{
  .countList{
    height: 60px;
    .el-col {
        border-radius: 4px;
        text-align:center;
        height: 40px;
        line-height: 40px;
    }
  }
  .lineChartList{
    margin-top: 20px;
    .lineChart{
      width: 50%;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
      border: 1px solid #EBEEF5;
      background-color: #FFF;
      color: #303133;
      -webkit-transition: .3s;
      transition: .3s;
      border-radius: 4px;
      overflow: hidden;
      padding:10px;
    }
    // border:1px solid red;
  }
}
</style>
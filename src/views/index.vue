<template>
  <div class="index">

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
export default {
  created(){
    this.getEcharts();
  },
  data(){
    return {

    }
  },
  methods:{
    getEcharts(){
      let dom = document.getElementsByClassName('index');
      // 基于准备好的dom，初始化echarts实例
      console.log('111',dom,myChart)
      var myChart = echarts.init(document.getElementsByClassName('index'));
      // 绘制图表
      myChart.setOption({
          title: {
              text: 'ECharts 入门示例'
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
}
</script>

<style>
</style>
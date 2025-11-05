<template>
  <div ref="chartRef" class="chart"></div>
</template>

<script setup>
import * as echarts from 'echarts';
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';

const chartRef = ref(null);
let chartInstance = null;

const skills = [
  { name: 'Frontend Development', value: 100 },
  { name: 'Backend Development', value: 80 },
  { name: 'UI/UX Design', value: 95 },
//   { name: 'Project Management', value: 75 }
];

const option = {
  title: {
    left: 'center',
    top: 10,
    textStyle: { fontSize: 16 }
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {c}%'
  },
  grid: { left: '10%', right: '10%', top: 60, bottom: 30 },
  xAxis: {
    type: 'value',
    max: 100,
    axisLabel: { formatter: '{value}%' }
  },
  yAxis: {
    type: 'category',
    data: skills.map(s => s.name),
    inverse: true,
    axisLabel: { interval: 0 }
  },
  series: [
    {
      name: 'Skill',
      type: 'bar',
      data: skills.map(s => s.value),
      barWidth: '40%',
      label: {
        show: true,
        position: 'right',
        formatter: '{c}%',
        color: '#333'
      },
      itemStyle: {
        color: '#8d8d9b',
        borderRadius: [6, 6, 6, 6]
      }
    }
  ]
};

function initChart() {
  if (!chartRef.value) return;
  chartInstance = echarts.init(chartRef.value);
  chartInstance.setOption(option);
  window.addEventListener('resize', resize);
}

function resize() {
  chartInstance && chartInstance.resize();
}

onMounted(() => {
  nextTick(initChart);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', resize);
  chartInstance && chartInstance.dispose();
});
</script>

<style scoped>
.chart {
  width: 100%;
  height: 360px;
}
</style>

import React, { useEffect } from 'react';
import * as echarts from 'echarts'

const App = () => {
  const option = {
    legend: {
      data: ['Altitude (km) vs Temperature (°C)']
    },
    tooltip: {
      trigger: 'axis',
      formatter: 'Temperature : <br/>{b}km : {c}°C'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} °C'
      }
    },
    yAxis: {
      type: 'category',
      axisLine: { onZero: false },
      axisLabel: {
        formatter: '{value} km'
      },
      boundaryGap: true,
      data: ['0', '10', '20', '30', '40', '50', '60', '70', '80']
    },
    graphic: [
      {
        type: 'line',
        id: 'line',
        left: 70,
        bottom: 36,
        shape: {
          x1: 0,
          y1: 0,
          x2: 1000,
          y2: 0
        },
        style: {
          fill: '#fff',
          stroke: 'red'
        }
      }
    ],
    series: [
      {
        name: '高度(km)与气温(°C)变化关系',
        type: 'line',
        smooth: true,
        data: [15, -50, -56.5, -46.5, -22.1, -2.5, -27.7, -55.7, -76.5]
      }
    ]
  };
let instance;
useEffect(() => {
  if (!instance) {
    console.log('document...11.............', document.querySelector('#echarts'))
    instance = echarts.init(document.querySelector('#echarts'), 'default')
    instance.setOption(option)
  }
}, []);
  return <div id="echarts" style={{ width: 800, height: 600 }}></div>
}

export default App
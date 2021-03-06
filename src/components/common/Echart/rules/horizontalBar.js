const horizontalBar = (data, title) => ({
  title: {
    text: title,
    left: 'center',
    top: '2%',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'shadow' },
  },
  legend: {
    data: data.xAxis.map((item) => item.label),
    top: '10%',
  },
  grid: {
    top: '15%',
    left: '5%',
    right: '5%',
    bottom: '5%',
    containLabel: true,
  },
  xAxis: { type: 'value' },
  yAxis: {
    type: 'category',
    data: data.yAxis,
  },
  series: data.xAxis.map((item) => ({
    type: 'bar',
    stack: 'total',
    data: item.value,
    name: item.name,
    // label: { show: true },
    barWidth: 20,
  })),
});

export default horizontalBar;
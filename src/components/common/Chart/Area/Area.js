import React from 'react';
import Mock from 'mockjs';
import EChart from 'echarts/lib/echarts';
import rules from './rules';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import './Area.scss';

class Area extends React.Component {
  constructor() {
    super();
    this.state = {
      guid: Mock.Random.guid(),
    };
  }

  componentDidUpdate() {
    const { title, data } = this.props;
    const { guid } = this.state;
    const myChart = EChart.init(document.getElementById(`line-${guid}`));
    if (data) myChart.setOption(rules(title, data));
  }

  render() {
    const { guid } = this.state;
    return (
      <div id={`line-${guid}`} className="common-chart-line" />
    );
  }
}

export default Area;

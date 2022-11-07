import './App.css';
import ReactECharts from 'echarts-for-react';


function App() {

  fetch('Wine-data.json')
    .then(res => res.json())
    .then(data => console.log(data))

  const options = {
    grid: { top: 8, right: 18, bottom: 24, left: 50 },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  return (
    <div className="App">
      <h2>Data Visualization</h2>
      <ReactECharts option={options} />;
    </div>
  );
}

export default App;

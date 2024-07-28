import React, { useEffect, useRef, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { csv } from 'd3-fetch';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const ChartSection = ({ dataUrl, xKey, yKey, chartLabel }) => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await csv(dataUrl);
        const xData = data.map(item => item[xKey]);
        const yData = data.map(item => parseInt(item[yKey], 10));

        const newChartData = {
          labels: xData,
          datasets: [
            {
              label: chartLabel,
              data: yData,
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
          ],
        };

        setChartData(newChartData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dataUrl, xKey, yKey, chartLabel]);

  return (
    <div>
      {chartData.labels.length > 0 ? (
        <Bar data={chartData} ref={chartRef} />
      ) : (
        <p>Loading chart data...</p>
      )}
    </div>
  );
};

export default ChartSection;

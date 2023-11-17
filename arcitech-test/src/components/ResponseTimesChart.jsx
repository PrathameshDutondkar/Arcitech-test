import React from 'react';
import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Label } from 'recharts';

const ResponseTimesChart = () => {
  const responseTimes = useSelector((state) => state?.response_times);

  return (
    <>
      <h2>Response Times Chart</h2>
      <LineChart width={600} height={400} data={responseTimes?.day_wise} >
        <XAxis dataKey="date">
          <Label value="Date" offset={-3} position="insideBottom" />
        </XAxis>
        <YAxis>
          <Label value="Average Time" angle={-90} position="insideLeft" />
        </YAxis>
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#ccc" />
        <Line type="monotone" dataKey="average_time" stroke="#8884d8" />
      </LineChart>
    </>
  );
};

export default ResponseTimesChart;

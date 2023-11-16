// Import necessary components from Recharts
import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const ResponseTimesChart = () => {
  const responseTimes = useSelector((state) => state?.response_times);

  return (
    <LineChart width={600} height={400} data={responseTimes?.day_wise} >
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="average_time" stroke="#8884d8" />
    </LineChart>
  );
};

export default ResponseTimesChart;

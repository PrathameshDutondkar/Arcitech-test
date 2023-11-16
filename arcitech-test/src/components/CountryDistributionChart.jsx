// Import necessary components from Recharts
import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const CountryDistributionChart = () => {
  const usageStatistics = useSelector((state) => state.usage_statistics);

  return (
    <BarChart width={600} height={400} data={Object.entries(usageStatistics.by_country)}>
      <XAxis dataKey="[0]" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="[1]" fill="#8884d8" />
    </BarChart>
  );
};

export default CountryDistributionChart;

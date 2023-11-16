import React from 'react';
import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const PlatformDistributionChart = () => {
  const usageStatistics = useSelector((state) => state?.usage_statistics);

  const platformData = usageStatistics?.by_platform || [];

  return (
    <BarChart width={600} height={400} data={Object.entries(platformData)}>
      <XAxis dataKey="[0]" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="[1]" fill="#8884d8" />
    </BarChart>
  );
};

export default PlatformDistributionChart;

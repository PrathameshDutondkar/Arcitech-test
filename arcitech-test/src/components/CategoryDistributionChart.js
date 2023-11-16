import React from 'react';
import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const CategoryDistributionChart = () => {
  const categoryDistribution = useSelector((state) => state.category_distribution);
console.log("***************",categoryDistribution)
 

  return (
    <BarChart width={600} height={400} data={categoryDistribution}>
      <XAxis dataKey="category" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
  );
};

export default CategoryDistributionChart;

import React from 'react';
import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const CategoryDistributionChart = () => {
  const categoryDistribution = useSelector((state) => {
    const distributionData = state.category_distribution;

    if (distributionData) {
      return Object.keys(distributionData).map((category) => ({
        category,
        count: distributionData[category],
      }));
    }

    return [];
  });

  console.log("***************", categoryDistribution);

  return (
    <><h2>Category Distribution Chart</h2>
    <BarChart width={600} height={400} data={categoryDistribution}>
      <XAxis dataKey="category" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
    </>
  );
};

export default CategoryDistributionChart;

import React from 'react';
import { useSelector } from 'react-redux';
import { PieChart, Pie, Tooltip, Legend, Cell, Label } from 'recharts';

const UserSatisfactionChart = () => {
  const userSatisfaction = useSelector((state) => state?.user_satisfaction);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

  return (
    <PieChart width={600} height={400}>
      <Pie
        data={userSatisfaction?.ratings}
        dataKey="count"
        nameKey="rating"
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
        label
      >
        {userSatisfaction?.ratings?.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
       
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default UserSatisfactionChart;

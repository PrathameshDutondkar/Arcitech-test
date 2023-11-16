
import { useSelector } from 'react-redux';
import { PieChart, Pie, Tooltip, Legend } from 'recharts';

const UserSatisfactionChart = () => {
  const userSatisfaction = useSelector((state) => state.user_satisfaction);

  return (
    <PieChart width={600} height={400}>
      <Pie
        data={userSatisfaction.ratings}
        dataKey="count"
        nameKey="rating"
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
        label
      />
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default UserSatisfactionChart;

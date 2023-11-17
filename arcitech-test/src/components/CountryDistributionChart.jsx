import React from "react";
import { useSelector } from "react-redux";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, Label } from "recharts";

const CountryDistributionChart = () => {
  const usageStatistics = useSelector((state) => state?.usage_statistics);

  const countryData = usageStatistics?.by_country || {};

  return (
    <>
      <h2>Country Distribution Chart</h2>
      <BarChart width={600} height={400} data={Object.entries(countryData)}>
        <XAxis dataKey="[0]">
          <Label value="Country" offset={-3} position="insideBottom" />
        </XAxis>
        <YAxis>
          <Label value="Count" angle={-90} position="insideLeft" />
        </YAxis>
        <Tooltip />
        <Legend />
        <Bar dataKey="[1]" fill="#8884d8" />
      </BarChart>
    </>
  );
};

export default CountryDistributionChart;

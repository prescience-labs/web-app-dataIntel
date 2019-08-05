import React from 'react';
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    Good: 4000,
    Bad: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    Good: 3000,
    Bad: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    Good: 2000,
    Bad: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    Good: 2780,
    Bad: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    Good: 1890,
    Bad: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    Good: 2390,
    Bad: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    Good: 3490,
    Bad: 4300,
    amt: 2100,
  },
];

function Chart() {
  return (
    <BarChart width={730} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Good" fill="#06d5e8" />
      <Bar dataKey="Bad" fill="#22f9c7" />
    </BarChart>
  );
}

export default Chart;

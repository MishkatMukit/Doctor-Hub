import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LabelList,
} from "recharts";
// Function to create a triangle-shaped bar
const getPath = (x, y, width, height) => `
  M${x},${y + height}
  C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z
`;

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  if (x == null || y == null || width == null || height == null) return null;
  return <path d={getPath(Number(x), Number(y), Number(width), Number(height))} stroke="none" fill={fill} />;
};


const Rechart = ({ bookedDoctors }) => {
  // Transform your doctor data → chart data
  const chartData = bookedDoctors?.map((doc) => ({
    name: doc.name,
    fees: Number(doc.fees) || 0,
  }));

  return (
    <div className="w-full h-[400px] p-6 bg-slate-50 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center">Doctors Fee Chart</h2>

      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 10, bottom: 40 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            angle={-25}
            textAnchor="end"
            interval={0}
            height={60}
            tick={{ fontSize: 12 }}
          />
          <YAxis />
          <Tooltip className="hidden md:flex" />
          <Bar dataKey="fees" fill="#6366f1" shape={<TriangleBar />}>
            <LabelList dataKey="fees" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Rechart;

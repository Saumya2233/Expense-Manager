"use client";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", amount: 4000 },
  { name: "Feb", amount: 3000 },
  { name: "Mar", amount: 2000 },
  { name: "Apr", amount: 2780 },
  { name: "May", amount: 1890 },
  { name: "Jun", amount: 2390 },
];

export default function ExpenseChart() {
  return (
    <div className="h-[300px] w-full rounded-3xl border border-[#112A46]/10 bg-white/90 p-6 shadow-[0_18px_55px_rgba(17,42,70,0.10)]">
      <h3 className="mb-4 text-lg font-bold text-[#112A46]">
        Expense Analytics
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#112A46" stopOpacity={0.75} />
              <stop offset="95%" stopColor="#FDF1A5" stopOpacity={0.15} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            stroke="#112A46"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#112A46"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="amount"
            stroke="#112A46"
            fillOpacity={1}
            fill="url(#colorAmount)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

import {
  ArrowDownRight,
  ArrowUpRight,
  TrendingUp,
  Wallet,
  CreditCard,
} from "lucide-react";
const transactions = [
  {
    title: "Netflix Subscription",
    category: "Entertainment",
    amount: "-$12",
    type: "expense",
  },
  {
    title: "Salary",
    category: "Income",
    amount: "+$2,400",
    type: "income",
  },
  {
    title: "Groceries",
    category: "Food",
    amount: "-$84",
    type: "expense",
  },
  {
    title: "Spotify Premium",
    category: "Music",
    amount: "-$9",
    type: "expense",
  },
  {
    title: "Freelance Payment",
    category: "Income",
    amount: "+$620",
    type: "income",
  },
];

export default function DashboardPage() {
  return (
    <div className="page-surface space-y-8">
      {/* Top Stats Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Balance"
          amount="$24,820"
          growth="+12.5%"
          icon={<Wallet size={20} />}
        />
        <StatCard
          title="Income"
          amount="$8,420"
          growth="+4.2%"
          icon={<ArrowUpRight size={20} />}
        />
        <StatCard
          title="Expenses"
          amount="$2,920"
          growth="-2.8%"
          icon={<ArrowDownRight size={20} />}
        />
        <StatCard
          title="Savings"
          amount="$5,140"
          growth="+18.1%"
          icon={<TrendingUp size={20} />}
        />
      </section>

      {/* Main Grid: Chart + Transactions */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Expense Analytics (Spans 2 columns) */}
        <div className="section-card lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-lg font-bold text-[#112A46]">Expense Analytics</h2>
              <p className="text-sm text-[#112A46]/55">
                Monthly financial overview
              </p>
            </div>
            <button className="theme-button-ghost">
              This Month
            </button>
          </div>
          {/* Chart container */}
          <div className="h-48 flex items-end gap-3">
            {[70, 120, 90, 150, 100, 170, 130].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-2xl bg-[#112A46] shadow-[0_10px_24px_rgba(17,42,70,0.16)] transition-all duration-300 hover:bg-[#FDF1A5]"
                style={{ height: `${h}px` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="dark-card">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-white">Recent Transactions</h2>
            <button className="text-sm font-semibold text-[#FDF1A5] transition duration-300 hover:text-white">
              View All
            </button>
          </div>
          <div className="space-y-6">
            {transactions.map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-[#FDF1A5] p-2 text-[#112A46]">
                    <CreditCard size={16} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                    <p className="text-xs text-white/55">{item.category}</p>
                  </div>
                </div>
                <span
                  className={`text-sm font-bold ${item.type === "income" ? "text-[#FDF1A5]" : "text-white/75"}`}
                >
                  {item.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
function StatCard({ title, amount, growth, icon }) {
  return (
    <div className="section-card transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(17,42,70,0.14)]">
      <div className="flex justify-between items-start mb-4">
        <span className="text-[#112A46]/60 text-sm font-medium">{title}</span>
        <div className="rounded-2xl bg-[#FDF1A5] p-2 text-[#112A46]">{icon}</div>
      </div>
      <h2 className="text-2xl font-bold text-[#112A46] mb-1">{amount}</h2>
      <p className="text-sm text-[#112A46] font-semibold">
        {growth} <span className="text-[#112A46]/50 font-normal">this month</span>
      </p>
    </div>
  );
}

"use client";

import { Wallet, PieChart, Bell, Target } from "lucide-react";
import { CgDisplayGrid } from "react-icons/cg";

const features = [
  {
    id: 1,
    icon: Wallet,
    title: "Track Expenses",
    description: "Manage and organize your daily expenses easily.",
  },
  {
    id: 2,
    icon: Target,
    title: "Set Monthly Budgets",
    description: "Create separate budgets for groceries, bills and more.",
  },
  {
    id: 3,
    icon: PieChart,
    title: "Expense Analytics",
    description: "Analyze where your money is being spent.",
  },
  {
    id: 4,
    icon: Bell,
    title: "Budget Alerts",
    description: "Receive alerts when your spending crosses the limit.",
  },
];

export default function InfoPage() {
  return (
    <div className="page-surface">
      {/* HERO */}

      <div className="dark-card">
        

        <h4 className="mt-5 flex text-2xl font-bold leading-tight text-white">
          <CgDisplayGrid  className="mr-3"/>
          Smart way to manage your money and daily expenses.
        </h4>

        <p className="mt-5 max-w-3xl text-sm leading-8 text-white/70">
          Our Personal Expense Manager helps you track your income, manage
          expenses, and create monthly budgets in a simple and organized way.
          You can divide your salary into categories like groceries,
          electricity, shopping, travel, school fees and many more.
        </p>

        <p className="mt-4 max-w-3xl text-sm leading-8 text-white/70">
          This system gives you complete control over your spending by showing
          how much money is spent, how much is left, and where your expenses are
          increasing. With smart analytics and budget alerts, you can improve
          your savings and make better financial decisions every month.
        </p>
      </div>

      {/* HOW IT WORKS */}

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-[#112A46]"> Features</h2>

        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item) => (
            <div key={item.id} className="section-card transition duration-300 hover:-translate-y-1">
              {/* ICON */}

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FDF1A5] text-[#112A46]">
                <item.icon size={22} />
              </div>

              {/* CONTENT */}

              <div className="mt-4">
                <h3 className="text-lg font-semibold text-[#112A46]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#112A46]/60">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

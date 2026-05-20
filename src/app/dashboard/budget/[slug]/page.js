"use client";

import {
  ArrowLeft,
  MoreVertical,
  Pencil,
  Plus,
  ShoppingCart,
  Trash2,
} from "lucide-react";
import Link from "next/link";

const subBudgets = [
  {
    id: 1,
    title: "Milk",
    amount: 200,
    spent: 120,
  },
];

export default function BudgetDetailsPage() {
  const totalBudget = 1000;
  const totalSpent = subBudgets.reduce((acc, item) => acc + item.spent, 0);
  const remaining = totalBudget - totalSpent;

  return (
    <div className="page-surface">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/budget"
            className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FDF1A5] text-[#112A46] shadow-[0_12px_28px_rgba(17,42,70,0.14)] hover:bg-[#112A46] hover:text-white"
          >
            <ArrowLeft size={18} />
          </Link>

          <div>
            <h1 className="text-3xl font-bold text-[#112A46]">
              Groceries Budget
            </h1>
            <p className="text-sm text-[#112A46]/60">
              Manage your grocery expenses
            </p>
          </div>
        </div>

        <button className="theme-button">
          <Plus size={16} />
          Add Sub Budget
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="section-card">
          <p className="text-sm text-[#112A46]/60">Total Budget</p>
          <h2 className="mt-2 text-3xl font-bold text-[#112A46]">
            Rs {totalBudget}
          </h2>
        </div>

        <div className="section-card">
          <p className="text-sm text-[#112A46]/60">Total Spent</p>
          <h2 className="mt-2 text-3xl font-bold text-[#112A46]">
            Rs {totalSpent}
          </h2>
        </div>

        <div className="dark-card">
          <p className="text-sm text-white/65">Remaining</p>
          <h2 className="mt-2 text-3xl font-bold text-[#FDF1A5]">
            Rs {remaining}
          </h2>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <div className="section-card">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-[#112A46]">
                  Sub Budgets
                </h2>
                <p className="text-sm text-[#112A46]/60">
                  Track detailed expenses
                </p>
              </div>

              <button className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#112A46]/15 bg-white text-[#112A46] hover:bg-[#FDF1A5]">
                <Plus size={18} />
              </button>
            </div>

            <div className="space-y-4">
              {subBudgets.map((item) => {
                const left = item.amount - item.spent;
                const percentage = (item.spent / item.amount) * 100;

                return (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-[#112A46]/10 bg-[#FDF1A5]/20 p-4"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#112A46] text-[#FDF1A5]">
                          <ShoppingCart size={18} />
                        </div>

                        <div>
                          <h3 className="font-semibold text-[#112A46]">
                            {item.title}
                          </h3>
                          <p className="text-sm text-[#112A46]/60">
                            Budget Rs {item.amount}
                          </p>
                        </div>
                      </div>

                      <button className="rounded-xl p-1 text-[#112A46] hover:bg-[#FDF1A5]">
                        <MoreVertical size={18} />
                      </button>
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-3">
                      <div className="rounded-xl bg-white/70 p-3">
                        <p className="text-xs text-[#112A46]/60">Spent</p>
                        <h4 className="mt-1 font-semibold text-[#112A46]">
                          Rs {item.spent}
                        </h4>
                      </div>

                      <div className="rounded-xl bg-white/70 p-3">
                        <p className="text-xs text-[#112A46]/60">Left</p>
                        <h4 className="mt-1 font-semibold text-[#112A46]">
                          Rs {left}
                        </h4>
                      </div>

                      <div className="rounded-xl bg-white/70 p-3">
                        <p className="text-xs text-[#112A46]/60">Usage</p>
                        <h4 className="mt-1 font-semibold text-[#112A46]">
                          {Math.round(percentage)}%
                        </h4>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="h-2 rounded-full bg-[#112A46]/10">
                        <div
                          className="h-2 rounded-full bg-[#112A46]"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>

                    <div className="mt-4 flex gap-2">
                      <button className="theme-button-ghost flex-1">
                        <Pencil size={16} />
                        Edit
                      </button>

                      <button className="theme-button-light flex-1">
                        <Trash2 size={16} />
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="dark-card">
            <h2 className="text-lg font-semibold text-white">
              Budget Analytics
            </h2>

            <div className="mt-5">
              <div className="mb-2 flex justify-between text-sm text-white/75">
                <span>Total Usage</span>
                <span>{Math.round((totalSpent / totalBudget) * 100)}%</span>
              </div>

              <div className="h-3 rounded-full bg-white/15">
                <div
                  className="h-3 rounded-full bg-[#FDF1A5]"
                  style={{ width: `${(totalSpent / totalBudget) * 100}%` }}
                />
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <div className="flex items-center justify-between rounded-xl bg-white/10 p-3">
                <span className="text-sm text-white/65">Categories</span>
                <span className="font-semibold text-[#FDF1A5]">
                  {subBudgets.length}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-white/10 p-3">
                <span className="text-sm text-white/65">Highest Spend</span>
                <span className="font-semibold text-white">Vegetables</span>
              </div>
            </div>
          </div>

          <div className="section-card">
            <h2 className="text-lg font-semibold text-[#112A46]">Notes</h2>
            <textarea
              placeholder="Write budget notes..."
              className="theme-input mt-4 h-32 resize-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

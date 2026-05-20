"use client";

import { useState } from "react";
import DataTable from "@/components/common/table";
import AddTransactionModal from "@/modals/AddTransactionModal";

export default function ExpensesPage() {
  const [data, setData] = useState([
    {
      title: "Netflix",
      category: "Entertainment",
      description:
        "Monthly Netflix premium subscription payment for family entertainment access.",
      amount: "-$12.00",
      date: "May 19, 2026",
      type: "expense",
    },

    {
      title: "Starbucks Coffee",
      category: "Food & Drinks",
      description: "Morning coffee and snacks during office working hours.",
      amount: "-$8.50",
      date: "May 18, 2026",
      type: "expense",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    {
      header: "Expense Name",
      accessor: "title",
    },

    {
      header: "Category",
      accessor: "category",
    },

    {
      header: "Description",
      render: (row) => (
        <div className="group relative max-w-[220px]">
          <p className="truncate-text text-sm text-[#112A46]/65">
            {row.description}
          </p>

          <div className="absolute left-0 top-full z-50 mt-2 hidden max-w-xs rounded-2xl border border-[#FDF1A5]/30 bg-[#112A46]/95 px-3 py-2 text-xs text-white shadow-xl backdrop-blur-md group-hover:block">
            {row.description}
          </div>
        </div>
      ),
    },

    {
      header: "Spent",
      render: (row) => (
        <span className="font-bold text-[#112A46]">{row.amount}</span>
      ),
    },

    {
      header: "Date",
      accessor: "date",
    },
  ];

  const handleAdd = (newExpense) => {
    setData((prev) => [
      {
        ...newExpense,
        type: "expense",
      },
      ...prev,
    ]);
  };

  return (
    <div className="page-surface">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#112A46]">Expenses</h1>

          <p className="mt-1 text-sm text-[#112A46]/60">
            Track where your money is being spent
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="theme-button"
        >
          Add Expense
        </button>
      </div>

      {/* Expenses Table */}
      <DataTable columns={columns} data={data} />

      {/* Modal */}
      <AddTransactionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAdd}
      />
    </div>
  );
}

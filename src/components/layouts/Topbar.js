"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import AddExpenseModal from "@/modals/AddTransactionModal";

import { Bell, Plus, Search } from "lucide-react";

export default function Topbar() {
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const names = "Meera";

  // HANDLE SAVE
  const handleAdd = (expenseData) => {
    console.log("Saved Expense:", expenseData);

    // GET OLD EXPENSES
    const existingExpenses = JSON.parse(localStorage.getItem("expenses")) || [];

    // ADD NEW EXPENSE
    const updatedExpenses = [expenseData, ...existingExpenses];

    // SAVE TO LOCAL STORAGE
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));

    // CLOSE MODAL
    setIsModalOpen(false);

    // REDIRECT
    router.push("/dashboard/expenses");
  };

  return (
    <>
      <header className="sticky top-0 z-30 flex min-h-20 flex-col gap-4 border-b border-[#112A46]/10 bg-white/85 px-4 py-4 shadow-[0_10px_40px_rgba(17,42,70,0.08)] backdrop-blur-xl md:flex-row md:items-center md:justify-between md:px-8">
        {/* TITLE */}
        <h2 className="text-xl font-bold text-[#112A46]">Dashboard</h2>

        <div className="flex flex-wrap items-center gap-3 md:gap-5">
          {/* SEARCH */}
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#112A46]/45" />

            <input
              type="text"
              placeholder="Search transactions..."
              className="theme-input w-full pl-11 sm:w-64"
            />
          </div>

          {/* NOTIFICATION */}
          <button className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-[#112A46]/8 text-[#112A46] transition duration-300 hover:bg-[#FDF1A5]" onClick={() => router.push("/dashboard/notifications?tab=contact")}>
            <Bell size={20} />

          </button>

          {/* ADD EXPENSE */}
          <button
            onClick={() => router.push("/dashboard/expenses?tab=expenses")}
            className="theme-button-light flex items-center gap-2"
          >
            <Plus size={16} />
            Add Expense
          </button>

          {/* PROFILE */}
          <div className="flex items-center gap-3 border-l border-[#112A46]/10 pl-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#112A46] font-bold text-[#FDF1A5]">
              S
            </div>

            <div onClick={()=>
              {
                router.push("/dashboard/profile")
              }
            }>
              <p className="text-sm font-semibold text-[#112A46]">{names}</p>

              <p className="text-xs text-[#112A46]/55">Premium Plan</p>
            </div>
          </div>
        </div>
      </header>

      {/* MODAL */}
      <AddExpenseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAdd}
      />
    </>
  );
}

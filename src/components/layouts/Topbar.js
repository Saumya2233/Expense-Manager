"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import AddExpenseModal from "@/modals/AddTransactionModal";
import { Bell, Plus, Search } from "lucide-react";

export default function Topbar() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const names = searchParams.get("name") || "Meera";

  // HANDLE SAVE
  const handleAdd = (expenseData) => {
    console.log("Saved Expense:", expenseData);

    // close modal
    setIsModalOpen(false);

    // redirect to expenses page
    router.push("/dashboard/expenses");
  };

  return (
    <>
      <header className="sticky top-0 z-30 flex min-h-20 flex-col gap-4 border-b border-[#112A46]/10 bg-white/85 px-4 py-4 shadow-[0_10px_40px_rgba(17,42,70,0.08)] backdrop-blur-xl md:flex-row md:items-center md:justify-between md:px-8">
        <h2 className="text-xl font-bold text-[#112A46]">Dashboard</h2>

        <div className="flex flex-wrap items-center gap-3 md:gap-5">
          {/* Search */}
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#112A46]/45" />
            <input
              type="text"
              placeholder="Search transactions..."
              className="theme-input w-full pl-11 sm:w-64"
            />
          </div>

          {/* Notification */}
          <button className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-[#112A46]/8 text-[#112A46] transition duration-300 hover:bg-[#FDF1A5]">
            <Bell size={20} />
            <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-[#FDF1A5] ring-2 ring-white" />
          </button>

          {/* Add Expense */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="theme-button-light"
          >
            <Plus size={16} />
            Add Expense
          </button>

          {/* Profile */}
          <div className="flex items-center gap-3 border-l border-[#112A46]/10 pl-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#112A46] font-bold text-[#FDF1A5]">
              S
            </div>

            <div>
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

"use client";

import { useMemo, useState } from "react";
import {
  MoreVertical,
  Wallet,
  ShoppingCart,
  Lightbulb,
  GraduationCap,
} from "lucide-react";
import { Pencil, Trash2 } from "lucide-react";

import { useRef, useEffect } from "react";

import { useRouter } from "next/navigation";
import AddBudgetModal from "@/modals/AddBudgetModal";

const initialBudgets = [
  {
    id: 1,
    title: "Groceries",
    icon: ShoppingCart,
    limit: 1000,
    spent: 650,
    color: "bg-[#FDF1A5]",
  },
  {
    id: 2,
    title: "Electricity",
    icon: Lightbulb,
    limit: 500,
    spent: 420,
    color: "bg-[#FDF1A5]",
  },
  {
    id: 3,
    title: "School Fees",
    icon: GraduationCap,
    limit: 1000,
    spent: 700,
    color: "bg-[#FDF1A5]",
  },
];

export default function BudgetPage() {
  const router = useRouter();
  const [salary] = useState(10000);
  const [budgets, setBudgets] = useState(initialBudgets);

  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
const [openMenuId, setOpenMenuId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    limit: "",
  });

  const allocated = useMemo(() => {
    return budgets.reduce((acc, item) => acc + item.limit, 0);
  }, [budgets]);

  const remainingBalance = salary - allocated;

  const handleSubmit = () => {
    if (!formData.title || !formData.limit) return;

    if (editId) {
      setBudgets((prev) =>
        prev.map((item) =>
          item.id === editId
            ? {
                ...item,
                title: formData.title,
                limit: Number(formData.limit),
              }
            : item,
        ),
      );
    } else {
      setBudgets((prev) => [
        ...prev,
        {
          id: Date.now(),
          title: formData.title,
          limit: Number(formData.limit),
          spent: 0,
          icon: Wallet,
          color: "bg-[#FDF1A5]",
        },
      ]);
    }

    setFormData({
      title: "",
      limit: "",
    });

    setEditId(null);
    setShowModal(false);
  };

  const handleDelete = (id) => {
    setBudgets((prev) => prev.filter((item) => item.id !== id));
  };

  const handleEdit = (item) => {
    setEditId(item.id);

    setFormData({
      title: item.title,
      limit: item.limit.toString(),
    });

    setShowModal(true);
  };

  return (
    <div className="page-surface">
      {/* HEADER */}

      <div className="mb-5 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#112A46]">Monthly Budget</h1>

          <p className="text-sm text-[#112A46]/60">Track your spending smartly</p>
        </div>

        <button
          onClick={() => {
            setEditId(null);
            setShowModal(true);
          }}
          className="theme-button"
        >
          + Add Budget
        </button>
      </div>

      {/* SUMMARY CARD */}

      <div className="dark-card">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-xs text-white/70">Salary</p>
            <h2 className="mt-1 text-xl font-bold">₹{salary}</h2>
          </div>

          <div>
            <p className="text-xs text-white/70">Allocated</p>
            <h2 className="mt-1 text-xl font-bold text-[#FDF1A5]">
              ₹{allocated}
            </h2>
          </div>

          <div>
            <p className="text-xs text-white/70">Remaining</p>
            <h2 className="mt-1 text-xl font-bold text-white">
              ₹{remainingBalance}
            </h2>
          </div>
        </div>

        {/* PROGRESS */}

        <div className="mt-4">
          <div className="mb-1 flex items-center justify-between text-xs">
            <span>Usage</span>

            <span>{Math.round((allocated / salary) * 100)}%</span>
          </div>

          <div className="h-2 rounded-full bg-white/20">
            <div
              className="h-2 rounded-full bg-[#FDF1A5]"
              style={{
                width: `${(allocated / salary) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* BUDGET CARDS */}

      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {budgets.map((item) => {
          const percentage = (item.spent / item.limit) * 100;

          const remaining = item.limit - item.spent;

          return (
            <div
              key={item.id}
              className="cursor-pointer rounded-3xl border border-[#112A46]/10 bg-white/90 p-4 shadow-[0_18px_55px_rgba(17,42,70,0.09)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(17,42,70,0.14)]"
            >
              {/* TOP */}

              <div className="flex items-start justify-between">
                <div
                  key={item.id}
                  onClick={() => router.push(`/dashboard/budget/${item.id}`)}
                  className={`flex h-10 w-10 items-center justify-center rounded-2xl `}
                >
                  {item.icon && <item.icon size={28} />}
                </div>

                <div className="relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenMenuId(openMenuId === item.id ? null : item.id);
                    }}
                    className="rounded-xl p-1 text-[#112A46] hover:bg-[#FDF1A5]"
                  >
                    <MoreVertical size={18} />
                  </button>

                  {/* DROPDOWN */}

                  {openMenuId === item.id && (
                    <div className="absolute right-0 top-10 z-20 w-36 rounded-2xl border border-[#112A46]/10 bg-white p-2 shadow-[0_18px_50px_rgba(17,42,70,0.16)]">
                      {/* EDIT */}

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEdit(item);
                          setOpenMenuId(null);
                        }}
                        className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm text-[#112A46] hover:bg-[#FDF1A5]"
                      >
                        <Pencil size={16} />
                        Edit
                      </button>

                      {/* DELETE */}

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(item.id);
                          setOpenMenuId(null);
                        }}
                        className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm text-[#112A46]/70 hover:bg-[#FDF1A5]"
                      >
                        <Trash2 size={16} />
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* CONTENT */}

              <div className="mt-4">
                <h2 className="text-base font-semibold text-[#112A46]">
                  {item.title}
                </h2>

                <div className="mt-3 space-y-2 text-sm">
                  <div className="flex justify-between text-[#112A46]/60">
                    <span>Budget</span>

                    <span className="font-medium text-[#112A46]">
                      ₹{item.limit}
                    </span>
                  </div>

                  <div className="flex justify-between text-[#112A46]/60">
                    <span>Spent</span>

                    <span className="font-medium text-[#112A46]">
                      ₹{item.spent}
                    </span>
                  </div>

                  <div className="flex justify-between text-[#112A46]/60">
                    <span>Left</span>

                    <span className="font-medium text-[#112A46]">
                      ₹{remaining}
                    </span>
                  </div>
                </div>

                {/* PROGRESS */}

                <div className="mt-4">
                  <div className="mb-1 flex justify-between text-xs">
                    <span>{Math.round(percentage)}%</span>

                    <span>Used</span>
                  </div>

                  <div className="h-2 rounded-full bg-[#112A46]/10">
                    <div
                      className={`h-2 rounded-full ${item.color}`}
                      style={{
                        width: `${percentage}%`,
                      }}
                    />
                  </div>
                </div>

                {/* ACTIONS */}

                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => handleEdit(item)}
                    className="theme-button-ghost flex-1"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="theme-button-light flex-1"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        {/* ADD CARD */}

        <button
          onClick={() => {
            setEditId(null);
            setShowModal(true);
          }}
          className="flex min-h-[220px] flex-col items-center justify-center rounded-3xl border-2 border-dashed border-[#112A46]/20 bg-[#FDF1A5]/25 transition duration-300 hover:border-[#112A46] hover:bg-[#FDF1A5]/55"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#112A46] text-[#FDF1A5]">
            +
          </div>

          <p className="mt-3 text-sm font-semibold text-[#112A46]">Add Budget</p>
        </button>
      </div>

      {/* MODAL */}

      <AddBudgetModal
        open={showModal}
        setOpen={setShowModal}
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        editId={editId}
      />
    </div>
  );
}

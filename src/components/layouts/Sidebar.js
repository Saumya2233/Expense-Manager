"use client";

import Link from "next/link";
import "../../app/globals.css";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

import {
  LayoutDashboard,
  ReceiptText,
  ChartNoAxesCombined,
  WalletCards,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    tab: "dashboard",
    href: "/dashboard?tab=dashboard",
  },

  {
    title: "Transactions",
    icon: ReceiptText,
    tab: "transactions",
    href: "/dashboard/transactions?tab=transactions",
  },

  {
    title: "Expenses",
    icon: ChartNoAxesCombined,
    tab: "expenses",
    href: "/dashboard/expenses?tab=expenses",
  },

  {
    title: "Budgets",
    icon: WalletCards,
    tab: "budget",
    href: "/dashboard/budget?tab=budget",
  },

  {
    title: "Notifications",
    icon: Bell,
    tab: "notifications",
    href: "/dashboard/notifications?tab=notifications",
  },

  {
    title: "How it works",
    icon: Settings,
    tab: "howthiswork",
    href: "/dashboard/howthiswork?tab=howthiswork",
  },
];

export default function Sidebar() {
  const router = useRouter();

  const searchParams = useSearchParams();

  // CURRENT ACTIVE TAB
  const activeTab =
    searchParams.get("tab") || "dashboard";

  return (
    <aside className="sidebar">
      {/* Logo */}
      <div>
        <div className="sidebar-logo-wrapper">
          <div className="sidebar-logo">E</div>

          <div>
            <h1 className="sidebar-title">ExpenseX</h1>

            <p className="sidebar-subtitle">
              Finance Manager
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          {menuItems.map((item) => {
            const Icon = item.icon;

            // QUERY BASED ACTIVE CHECK
            const isActive = activeTab === item.tab;

            return (
              <Link
                key={item.tab}
                href={item.href}
                className={`sidebar-item transition-all duration-200 ${
                  isActive
                    ? "sidebar-item-active bg-[#a2d2ff] text-black"
                    : ""
                }`}
              >
                <Icon size={20} />

                <span>{item.title}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom */}
      <div className="sidebar-bottom">
        <div className="profile-card">
          <button
            className="flex justify-between gap-3"
            onClick={() => router.push("/")}
          >
            Logout

            <LogOut size={18} />
          </button>
        </div>
      </div>
    </aside>
  );
}
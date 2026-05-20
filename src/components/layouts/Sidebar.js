"use client";

import Link from "next/link";
import "../../app/globals.css";

import { useRouter, usePathname } from "next/navigation";

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
    href: "/dashboard",
  },

  {
    title: "Transactions",
    icon: ReceiptText,
    href: "/dashboard/transactions",
  },

  {
    title: "Expenses",
    icon: ChartNoAxesCombined,
    href: "/dashboard/expenses",
  },

  {
    title: "Budgets",
    icon: WalletCards,
    href: "/dashboard/budget",
  },

  {
    title: "Notifications",
    icon: Bell,
    href: "/dashboard/notifications",
  },

  {
    title: "How it works",
    icon: Settings,
    href: "/dashboard/howthiswork",
  },
];

export default function Sidebar() {
  const router = useRouter();

  // FIXED
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      {/* Logo */}
      <div>
        <div className="sidebar-logo-wrapper">
          <div className="sidebar-logo">E</div>

          <div>
            <h1 className="sidebar-title">ExpenseX</h1>

            <p className="sidebar-subtitle">Finance Manager</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          {menuItems.map((item) => {
            const Icon = item.icon;

            // FIXED ACTIVE LOGIC
            const isActive =
              item.href === "/dashboard"
                ? pathname === "/dashboard"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`sidebar-item transition-all duration-200 ${
                  isActive
                    ? "sidebar-item-active bg-[#a2d2ff] !text-black hover:bg-[#a2d2ff]"
                    : "hover:bg-black hover:text-white"
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

"use client";

import { useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Plus,
  ToggleLeft,
  ToggleRight,
  Wallet,
} from "lucide-react";

const initialNotifications = [
  {
    id: 1,
    title: "Budget Exceeded",
    message: "Your Groceries budget has exceeded by Rs 250.",
    time: "2 mins ago",
    type: "warning",
    active: true,
  },
  {
    id: 2,
    title: "Electricity Bill Reminder",
    message: "Your electricity payment is due tomorrow.",
    time: "1 hour ago",
    type: "alert",
    active: true,
  },
  {
    id: 3,
    title: "Savings Goal Reached",
    message: "Congrats! You saved Rs 5,000 this month.",
    time: "Today",
    type: "success",
    active: true,
  },
];

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: "", message: "" });

  const toggleActive = (id) => {
    setNotifications((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, active: !item.active } : item,
      ),
    );
  };

  const addNotification = () => {
    if (!form.title || !form.message) return;

    setNotifications((prev) => [
      {
        id: Date.now(),
        title: form.title,
        message: form.message,
        time: "Just now",
        type: "warning",
        active: true,
      },
      ...prev,
    ]);
    setForm({ title: "", message: "" });
    setShowForm(false);
  };

  return (
    <div className="page-surface">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#112A46]">Notifications</h1>
          <p className="text-sm text-[#112A46]/60">
            Manage your notification subscriptions
          </p>
        </div>

        <button onClick={() => setShowForm(true)} className="theme-button">
          <Plus size={16} />
          Add New
        </button>
      </div>

      {showForm && (
        <div className="section-card mb-6">
          <input
            className="theme-input mb-3"
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />

          <textarea
            className="theme-input mb-3 resize-none"
            placeholder="Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />

          <div className="flex gap-2">
            <button onClick={addNotification} className="theme-button">
              Save
            </button>
            <button
              onClick={() => setShowForm(false)}
              className="theme-button-ghost"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {!showForm && (
        <div className="space-y-4">
          {notifications.map((item) => (
            <div
              key={item.id}
              className={`rounded-3xl border border-[#112A46]/10 bg-white/90 p-5 shadow-[0_18px_55px_rgba(17,42,70,0.09)] transition duration-300 hover:-translate-y-1 hover:bg-[#FDF1A5]/25 ${
                !item.active ? "opacity-45" : "opacity-100"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
                      item.type === "alert"
                        ? "bg-[#112A46] text-[#FDF1A5]"
                        : "bg-[#FDF1A5] text-[#112A46]"
                    }`}
                  >
                    {item.type === "warning" ? (
                      <AlertTriangle size={22} />
                    ) : item.type === "alert" ? (
                      <Wallet size={22} />
                    ) : (
                      <CheckCircle2 size={22} />
                    )}
                  </div>

                  <div>
                    <h2 className="font-semibold text-[#112A46]">
                      {item.title}
                    </h2>
                    <p className="text-sm text-[#112A46]/60">
                      {item.message}
                    </p>
                    <p className="mt-1 text-xs text-[#112A46]/45">
                      {item.time}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => toggleActive(item.id)}
                  className="text-[#112A46]"
                >
                  {item.active ? (
                    <ToggleRight size={28} className="text-[#112A46]" />
                  ) : (
                    <ToggleLeft size={28} className="text-[#112A46]/35" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

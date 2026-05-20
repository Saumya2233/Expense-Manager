"use client";

import { useState } from "react";

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    name: "Saumya Nagbhati",
    email: "saumya@example.com",
    monthlySalary: 85000,
    annualSalary: 1020000,
    budget: 45000,
    expenses: 32500,
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    localStorage.setItem(
      "profileData",
      JSON.stringify(profile)
    );

    alert("Profile Saved Successfully");
  };

  return (
    <div className="min-h-screen bg-[#F5F7FB] p-5">

      {/* HEADER */}
      <div className="mb-6 rounded-3xl bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

          <div className="flex items-center gap-5">

           

            <div>
              <h3 className="text-2xl font-bold text-[#112A46]">
                {profile.name}
              </h3>

              <p className="mt-1 text-sm text-[#112A46]/60">
                Premium Member • Finance Tracker
              </p>
            </div>
          </div>

          <button
            onClick={handleSave}
            className="rounded-2xl bg-[#112A46] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Save Profile
          </button>
        </div>
      </div>

      {/* GRID */}
      <div className="grid gap-5 lg:grid-cols-3">

        {/* LEFT SECTION */}
        <div className="space-y-5 lg:col-span-2">

          {/* PERSONAL INFO */}
          <div className="rounded-3xl bg-white p-6 shadow-sm">

            <h2 className="mb-5 text-xl font-bold text-[#112A46]">
              Personal Information
            </h2>

            <div className="grid gap-4 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-medium text-[#112A46]/70">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-[#112A46]/10 bg-[#F8FAFC] px-4 py-3 outline-none focus:border-[#a2d2ff]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#112A46]/70">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-[#112A46]/10 bg-[#F8FAFC] px-4 py-3 outline-none focus:border-[#a2d2ff]"
                />
              </div>
            </div>
          </div>

          {/* FINANCIAL INFO */}
          <div className="rounded-3xl bg-white p-6 shadow-sm">

            <h2 className="mb-5 text-xl font-bold text-[#112A46]">
              Financial Details
            </h2>

            <div className="grid gap-4 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-medium text-[#112A46]/70">
                  Monthly Salary
                </label>

                <input
                  type="number"
                  name="monthlySalary"
                  value={profile.monthlySalary}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-[#112A46]/10 bg-[#F8FAFC] px-4 py-3 outline-none focus:border-[#a2d2ff]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#112A46]/70">
                  Annual Salary
                </label>

                <input
                  type="number"
                  name="annualSalary"
                  value={profile.annualSalary}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-[#112A46]/10 bg-[#F8FAFC] px-4 py-3 outline-none focus:border-[#a2d2ff]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#112A46]/70">
                  Monthly Budget
                </label>

                <input
                  type="number"
                  name="budget"
                  value={profile.budget}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-[#112A46]/10 bg-[#F8FAFC] px-4 py-3 outline-none focus:border-[#a2d2ff]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#112A46]/70">
                  Current Expenses
                </label>

                <input
                  type="number"
                  name="expenses"
                  value={profile.expenses}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-[#112A46]/10 bg-[#F8FAFC] px-4 py-3 outline-none focus:border-[#a2d2ff]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="space-y-5">

          {/* SUMMARY */}
          <div className="rounded-3xl bg-white p-6 shadow-sm">

            <h2 className="mb-5 text-xl font-bold text-[#112A46]">
              Financial Summary
            </h2>

            <div className="space-y-4">

              <div className="rounded-2xl bg-[#a2d2ff]/40 p-4">
                <p className="text-sm text-[#112A46]/60">
                  Remaining Budget
                </p>

                <h3 className="mt-2 text-2xl font-bold text-[#112A46]">
                  ₹
                  {profile.budget - profile.expenses}
                </h3>
              </div>

              <div className="rounded-2xl bg-[#FDF1A5]/50 p-4">
                <p className="text-sm text-[#112A46]/60">
                  Monthly Expenses
                </p>

                <h3 className="mt-2 text-2xl font-bold text-[#112A46]">
                  ₹{profile.expenses}
                </h3>
              </div>

              <div className="rounded-2xl bg-[#112A46] p-4 text-white">
                <p className="text-sm text-white/70">
                  Monthly Salary
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  ₹{profile.monthlySalary}
                </h3>
              </div>
            </div>
          </div>

          {/* SUBSCRIPTION */}
          <div className="rounded-3xl bg-white p-6 shadow-sm">

            <h2 className="mb-5 text-xl font-bold text-[#112A46]">
              Subscription
            </h2>

            <div className="rounded-3xl bg-gradient-to-br from-[#112A46] to-[#1E3A5F] p-5 text-white">

              <p className="text-sm text-white/70">
                Current Plan
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Premium Pro
              </h3>

              <p className="mt-3 text-sm text-white/70">
                Renewal Date: 28 May 2026
              </p>

              <button className="mt-5 w-full rounded-2xl bg-[#FDF1A5] py-3 text-sm font-bold text-[#112A46] transition hover:opacity-90">
                Manage Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// src/app/dashboard/layout.js
import Sidebar from "@/components/layouts/Sidebar";
import Topbar from "@/components/layouts/Topbar";
import "../globals.css"; 

export default function DashboardLayout({ children }) {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="min-w-0 flex-1">
        <Topbar />
        <div className="min-h-[calc(100vh-5rem)]">
          {children}
        </div>
      </main>
    </div>
  );
}

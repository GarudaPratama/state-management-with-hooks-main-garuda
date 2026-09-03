import { NavLink, Outlet } from "react-router";
import { useProfile } from "@/stores/UseProfile";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function SharedLayout() {
  const { name, email } = useProfile();

  const getInitials = (str) => {
    return str ? str.substring(0, 2).toUpperCase() : "U";
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col antialiased">
      {/* Top Navbar */}
      <header className="h-16 bg-white border-b px-6 flex items-center justify-between sticky top-0 z-20">
        <h1 className="text-xl font-bold tracking-tight text-slate-800">Portal Dashboard</h1>
        
        {/* Avatar & Nama Real-time */}
        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9 bg-primary text-primary-foreground font-semibold">
            <AvatarFallback>{getInitials(name)}</AvatarFallback>
          </Avatar>
          <span className="font-medium text-sm text-slate-700">{name}</span>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r p-4 flex flex-col justify-between min-h-[calc(100vh-4rem)]">
          <nav className="flex flex-col gap-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`
              }
            >
              Profile
            </NavLink>
            <NavLink
              to="/stats"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`
              }
            >
              Statistik
            </NavLink>
          </nav>

          {/* Email di Bawah Sidebar */}
          <div className="border-t pt-4 px-2">
            <p className="text-xs font-semibold uppercase text-slate-400">Email Akun</p>
            <p className="text-xs font-medium text-slate-600 truncate mt-1">{email}</p>
          </div>
        </aside>

        {/* Dynamic Content */}
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
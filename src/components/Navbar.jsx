import { useProfile } from "@/stores/useProfile";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Navbar() {
  const { name } = useProfile();

  const getInitials = (str) => {
    return str ? str.substring(0, 2).toUpperCase() : "U";
  };

  return (
    <header className="h-16 bg-background border-b px-4 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center gap-2">
        {/* Tombol Toggle Sidebar Shadcn */}
        <SidebarTrigger />
        <h1 className="text-lg font-bold tracking-tight text-slate-800">
          Portal Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <Avatar className="h-9 w-9 bg-primary text-primary-foreground font-semibold">
          <AvatarFallback>{getInitials(name)}</AvatarFallback>
        </Avatar>
        <span className="font-medium text-sm text-slate-700">{name}</span>
      </div>
    </header>
  );
}
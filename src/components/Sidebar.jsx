import { NavLink } from "react-router";
import { useProfile } from "@/stores/UseProfile";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const { email } = useProfile();

  return (
    <Sidebar>
      <SidebarHeader className="border-b px-4 py-3">
        <h2 className="text-lg font-bold tracking-tight">Portal App</h2>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu Utama</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink to="/" end>
                    <span>Dashboard</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink to="/profile">
                    <span>Profile</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink to="/stats">
                    <span>Statistik</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t p-4">
        <div className="flex flex-col gap-0.5">
          <span className="text-xs font-semibold uppercase text-muted-foreground">
            Email Akun
          </span>
          <span className="text-xs font-medium text-slate-700 truncate">
            {email}
          </span>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
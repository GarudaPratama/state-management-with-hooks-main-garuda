import { createBrowserRouter } from "react-router-dom";
import SharedLayout from "@/layouts/SharedLayout";
import DashboardPage from "@/pages/DashboardPage";
import ProfilePage from "@/pages/ProfilePage";
import EditProfilePage from "@/pages/EditProfilePage";
import StatsPage from "@/pages/StatsPage";

export const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "profile/edit", element: <EditProfilePage /> },
      { path: "stats", element: <StatsPage /> },
    ],
  },
]);
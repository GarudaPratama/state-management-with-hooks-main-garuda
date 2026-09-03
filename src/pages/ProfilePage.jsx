import { Link } from "react-router";
import { useProfile } from "@/stores/UseProfile";
import { useStats } from "@/stores/UseStats";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  const { name, email, role, bio, isActive } = useProfile();
  const { totalProjects, completedTasks, points } = useStats();

  return (
    <Card className="max-w-xl">
      <CardHeader className="flex flex-row items-start justify-between space-y-0">
        <div>
          <CardTitle className="text-2xl">{name}</CardTitle>
          <p className="text-sm font-medium text-primary mt-1">{role}</p>
          <p className="text-xs text-slate-500">{email}</p>
        </div>
        {isActive ? (
          <Badge className="bg-emerald-500 text-white">Aktif</Badge>
        ) : (
          <Badge variant="destructive">Nonaktif</Badge>
        )}
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="bg-slate-100 p-3 rounded-md text-sm text-slate-700">
          {bio}
        </div>

        {/* Ringkasan Statistik */}
        <div className="flex justify-around border-y py-4 text-center">
          <div>
            <p className="text-xs text-slate-500">Proyek</p>
            <p className="text-lg font-bold">{totalProjects}</p>
          </div>
          <div>
            <p className="text-xs text-slate-500">Tugas Selesai</p>
            <p className="text-lg font-bold">{completedTasks}</p>
          </div>
          <div>
            <p className="text-xs text-slate-500">Poin</p>
            <p className="text-lg font-bold">{points}</p>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button asChild className="w-full">
          <Link to="/profile/edit">Edit Profile</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
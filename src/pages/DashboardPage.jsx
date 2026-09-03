import { useProfile } from "@/stores/UseProfile";
import { useStats } from "@/stores/UseStats";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DashboardPage() {
  const { name, bio, isActive } = useProfile();
  const { totalProjects, completedTasks, points } = useStats();

  return (
    <div className="flex flex-col gap-6 max-w-5xl">
      {/* Greeting Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Halo, {name}! 👋</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600">{bio}</p>
        </CardContent>
      </Card>

      {/* 4 Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <span className="text-xs text-slate-500 font-medium">Total Proyek</span>
          </CardHeader>
          <CardContent>
            <span className="text-3xl font-bold">{totalProjects}</span>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <span className="text-xs text-slate-500 font-medium">Tugas Selesai</span>
          </CardHeader>
          <CardContent>
            <span className="text-3xl font-bold">{completedTasks}</span>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <span className="text-xs text-slate-500 font-medium">Poin</span>
          </CardHeader>
          <CardContent>
            <span className="text-3xl font-bold">{points}</span>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <span className="text-xs text-slate-500 font-medium">Status Akun</span>
          </CardHeader>
          <CardContent>
            {isActive ? (
              <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white">Aktif</Badge>
            ) : (
              <Badge variant="destructive">Nonaktif</Badge>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
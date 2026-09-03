import { useState } from "react";
import { useProfile } from "@/stores/useProfile";
import { useStats } from "@/stores/useStats";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function StatsPage() {
  const { isActive, setProfile } = useProfile();
  const { totalProjects, completedTasks, points, setStats } = useStats();

  const [formStats, setFormStats] = useState({ totalProjects, completedTasks, points });

  const handleSaveStats = (e) => {
    e.preventDefault();
    setStats({
      totalProjects: Number(formStats.totalProjects),
      completedTasks: Number(formStats.completedTasks),
      points: Number(formStats.points),
    });
    alert("Statistik berhasil diperbarui!");
  };

  return (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Pengaturan Statistik & Status</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Form Angka Statistik */}
        <form onSubmit={handleSaveStats} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="totalProjects">Total Proyek</Label>
            <Input
              id="totalProjects"
              type="number"
              value={formStats.totalProjects}
              onChange={(e) => setFormStats({ ...formStats, totalProjects: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="completedTasks">Tugas Selesai</Label>
            <Input
              id="completedTasks"
              type="number"
              value={formStats.completedTasks}
              onChange={(e) => setFormStats({ ...formStats, completedTasks: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="points">Poin</Label>
            <Input
              id="points"
              type="number"
              value={formStats.points}
              onChange={(e) => setFormStats({ ...formStats, points: e.target.value })}
            />
          </div>

          <Button type="submit" className="w-full">
            Update Angka Statistik
          </Button>
        </form>

        {/* Radio Button Status Akun (Zustand Profile) */}
        <div className="border-t pt-4 space-y-3">
          <Label className="text-base font-semibold">Status Akun</Label>
          <RadioGroup
            value={isActive ? "active" : "inactive"}
            onValueChange={(val) => setProfile({ isActive: val === "active" })}
            className="flex gap-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="active" id="status-active" />
              <Label htmlFor="status-active" className="cursor-pointer">Aktif</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="inactive" id="status-inactive" />
              <Label htmlFor="status-inactive" className="cursor-pointer">Nonaktif</Label>
            </div>
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  );
}
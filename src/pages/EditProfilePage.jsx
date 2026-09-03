import { useState } from "react";
import { useNavigate } from "react-router";
import { useProfile } from "@/stores/useProfile";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function EditProfilePage() {
  const { name, role, email, bio, setProfile } = useProfile();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name, role, email, bio });

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile(form); // Update Zustand Store
    navigate("/profile"); // Auto-redirect ke /profile
  };

  return (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Edit Profil</CardTitle>
      </CardHeader>
      
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nama</Label>
            <Input
              id="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="role">Role</Label>
            <Input
              id="role"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              rows={3}
              value={form.bio}
              onChange={(e) => setForm({ ...form, bio: e.target.value })}
            />
          </div>
        </CardContent>

        <CardFooter className="flex gap-2">
          <Button
            type="button"
            variant="outline"
            className="flex-1"
            onClick={() => navigate("/profile")}
          >
            Batal
          </Button>
          <Button type="submit" className="flex-1">
            Simpan
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
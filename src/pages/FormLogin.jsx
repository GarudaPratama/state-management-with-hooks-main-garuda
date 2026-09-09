import React from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form";

function FormLogin() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSave = (data) => {
        console.log(data);
    }

  return (
    <div className='min-h-screen flex justify-center items-center'>
        <Card className="min-w-md">
            
            <CardHeader>
                <CardTitle>Log-In</CardTitle>
            </CardHeader>   
            
            <form onSubmit = {handleSubmit(onSave)}>
                <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                    {...register("email", {
                        validate: (value) => value.includes("@student.abudzar.sch.id") || "Email harus memakai email student abudzar",
                    })}
                    id="name"
                    type="name"
                    placeholder="Masukkan Email"
                    />
                </div>

                {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                    {...register("password", {
                        minLength: { value: 5, message: 'Password Minimal 5 Karakter' },
                    })}
                    id="role"
                    type="password"
                    placeholder="Masukkan Password"
                    />
                </div>

                {errors.password && <p className="text-red-500">{errors.password.message}</p>}

                </CardContent>

                <CardFooter className="flex gap-2">
                <Button
                    type="button"
                    variant="outline"
                    className="flex-1"
                    // onClick={() => navigate("/")}
                >
                    Batal
                </Button>
                <Button type="submit" className="flex-1">
                    Login
                </Button>
                </CardFooter>
            </form>
        </Card>
    </div>
  )
}

export default FormLogin
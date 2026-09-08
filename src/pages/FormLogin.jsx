import React from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form";

function FormLogin() {

    const { register, handleSubmit } = useForm();

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
                        
                    })}
                    id="name"
                    type="name"
                    />
                </div>



                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                    {...register("password", {
                        minLength: 5,
                    })}
                    id="role"
                    type="password"
                    />
                </div>


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
import React from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router";
import { useState } from "react";

function LoginForm() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({
        email: null,
        password: null
    })
     

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true)

        const payload = {
            email: email,
            password: password
        }

        if(email === "" || password === "") {
            setIsLoading(false);
            setError((prevState) => ({
                ...prevState,
                email: email === '' ? 'Email tidak boleh kosong' : null,
                password: password === '' ? 'Password tidak boleh kosong' : null
            }))

            return
        }

        // if(email.includes('@student.abudzar.sch.id') === false) {
        //     setIsLoading(false);
        //     setError((prevState) => ({
        //         ...prevState,
        //         email: 'Harus menggunakan email abudzar student'
        //     }))
        // }

        // if(password.length < 5) {
        
        // } else {
        //     return
        // }

        // if(password.length < 5) {
        //     setIsLoading(false);
        //     setError((prevState) => ({
        //         ...prevState,
        //         password: 'Password minimal 5 karakter'
        //     }))

        //     return
        // }

        setTimeout(() => {
            setIsSuccess(true);
            setEmail('');
            setPassword('');

            setIsLoading(false);
            // navigate("/");
        }, 3000)
        
    }

  return (
    <div className='min-h-screen flex justify-center items-center'>
        <Card className="min-w-md">

            
            
            <CardHeader>
                {isSuccess && <p className='text-blue-500 mb-2'>Login Berhasil</p>}
                <CardTitle>Log-In</CardTitle>
            </CardHeader>
            
            <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                    id="name"
                    type="name"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>



                {error?.email && <p className='text-red-500'>{error.email}</p>}

                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                    id="role"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {error?.password && <p className='text-red-500'>{error.password}</p>}

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
                    {isLoading ? 
                    (<div className='animate-spin w-2 h-2 bg-white'></div>) 
                    : ('Login')
                    }
                </Button>
                </CardFooter>
            </form>
        </Card>
    </div>
    
  )
}

export default LoginForm
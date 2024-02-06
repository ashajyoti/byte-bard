"use client"
import React from "react";
import { Input, Button } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import signIn from "@/firebase/auth/signin";

export default function SignInForm() {
    const router = useRouter();
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleSignInForm = async (event) => {
        event.preventDefault()
        const { result, error } = await signIn(email, password);
        if (error) {
            return console.log("error while sign In",error)
        }
        console.log('res',result)
        return router.push("/")
    }
    return (
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <form onSubmit={handleSignInForm}>
                <Input type="email" label="Email" placeholder="Enter your email" value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" label="Password" placeholder="Enter your password" value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <Button color="primary" type="submit">Sign In</Button>
            </form>
        </div>
    );
}

"use client"
import React, { useState } from "react";
import { Input, Button, Link } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import signUp from "@/firebase/auth/signup";

export default function SignUpForm() {
    const router = useRouter();
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [name, setName] = useState('');

    const handleSignUpForm = async (event) => {
        event.preventDefault()
        const { error } = await signUp(email, password, name);
        if (error) {
            return console.log("error while sign up", error)
        }
        return router.push("/")
    }
    return (
        <div className="signin-page">
            <form  className="form" onSubmit={handleSignUpForm}>
            <div class="content">Sign Up</div>
                <Input type="text" label="name" placeholder="Enter your name" value={name}
                    onChange={(e) => setName(e.target.value)} />
                <Input type="email" label="Email" placeholder="Enter your email" value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" label="Password" placeholder="Enter your password" value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <Button color="primary" type="submit">Sign Up</Button>
                <p>
                    Already have a account? <Link href="/login">Sign In</Link>
                </p>
            </form>
        </div>
    );
}

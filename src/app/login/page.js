"use client";
import React from "react";
import { Input, Button, Link } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import signIn from "@/firebase/auth/signin";

export default function SignInForm() {
    const router = useRouter();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSignInForm = async (event) => {
        event.preventDefault();
        const { error } = await signIn(email, password);
        if (error) {
            return console.log("error while sign In:", error);
        }
        return router.push("/");
    };
    return (
        <div className="login-page">
            <form className="form" onSubmit={handleSignInForm}>
            <div class="content">Log-in to your account</div>
                <Input
                    type="email"
                    label="Email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    label="Password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button color="primary" type="submit">
                    Sign In
                </Button>
                <p>
                    New to us? <Link href="/signup">Sign Up</Link>
                </p>
            </form>
        </div>
    );
}

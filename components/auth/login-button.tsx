"use client";
import React from 'react'
import { useRouter } from 'next/navigation';

interface Props {
    children: React.ReactNode;
    mode?: "modal" | "redirect";
    asChild?: boolean;
};
const LoginButton = ({ children, mode = "redirect", asChild }: Props) => {
    const router = useRouter();
    const onClick = () => {
        router.push("/auth/login");
    };

    if (mode === "modal") {
        return (
            <span className='bg-white text-black'>
                "Login Button Modal"
            </span>
        )
    }

    return (
        <span onClick={onClick} className='cursor-pointer'>
            {children}
        </span>
    )
}

export default LoginButton;
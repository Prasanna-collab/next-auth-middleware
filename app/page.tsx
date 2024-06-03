import React from 'react';
import { Poppins } from "next/font/google";
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import LoginButton from '@/components/auth/login-button';
const font = Poppins({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})
const page = () => {
  return (
    <main className='flex h-screen flex-col text-center items-center justify-center
   bg-sky-500'>
      <div className='space-y-6'>
        <h1 className={cn('text-6xl  font-extralight text-white drop-shadow-md', font.className)}>
          Auth
        </h1>
        <p className="text-white text-lg">
          A simple authentication service
        </p>
        <div>
          <LoginButton mode="redirect">
            <Button variant="secondary" size="lg">
              Sign in
            </Button>
          </LoginButton>

        </div>
      </div>
    </main>
  )
}

export default page;
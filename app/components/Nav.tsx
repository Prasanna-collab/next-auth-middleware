import React from 'react';
import Link from 'next/link';

interface Props {}

const Nav = () => {
  return <>
    <header className="bg-gray-600 text-gray-100">
    <nav className="flex justify-between items-center w-full px-10 py-4">
        <div>
            My Site
        </div>
          
        <div className='flex gap-10'>
            <Link href="/">Home</Link>   {/* For All users */}
            <Link href="/createuser">Create User</Link>  {/* Only for Admins */}
            <Link href="/clientmember">Client Member</Link>   {/* You dont have to be admin, but user must be logged in to access this */}
            <Link href="/member">Member</Link>  {/* server side suth check */}
            <Link href="/public">Public</Link>    {/* Completely unprotected */}
        </div>
    </nav>
    </header>
  </>
}

export default Nav
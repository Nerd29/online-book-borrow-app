'use client'
// import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import userAvatar from '@/assets/user.png'
import NavLink from './NavLink';
import { Button } from '@heroui/react';
import Image from 'next/image';
// import { authClient } from '@/lib/auth-client';

const Navbar = () => {

    // const { data: session,isPending } = authClient.useSession()
    // const user=session?.user
    // console.log(session)
    return (
        <div className='flex justify-between container mx-auto mt-5'>
           <div >
             <Link href='/' className='text-2xl font-bold text-gray-700 flex items-center gap-2'>
            <Image src="/book.png" alt="Logo" width={50} height={50} />
            BookBridge</Link> 
            
           </div>
          
           <ul className=' flex justify-between items-center gap-4 text-gray-500'>
            <li>
                <NavLink href='/'>Home</NavLink>
            </li>
            <li>
                <NavLink href='/all-books'>All Books</NavLink>
            </li>
            <li>
                <NavLink href='/my-profile'>My Profile</NavLink>
            </li>
            
           </ul>

            <div className="flex items-center gap-2">
                <Button>Login</Button>
                <Button variant="secondary">Register</Button>
            </div>

        </div>
    );
};
 
export default Navbar;
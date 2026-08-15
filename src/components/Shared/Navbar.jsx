'use client'
// import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
// import userAvatar from '@/assets/user.png'
import NavLink from './NavLink';
import { Button } from '@heroui/react';
import Image from 'next/image';
import ModeToggle from '../ModeToggle';
// import { ModeToggle } from '../ModeToggle';
// import { authClient } from '@/lib/auth-client';

const Navbar = () => {
     const [scrolled, setScrolled] = useState(false);

      useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    // const { data: session,isPending } = authClient.useSession()
    // const user=session?.user
    // console.log(session)
    return (
         <nav
            className={`sticky top-0 w-full z-50 transition-all duration-300 ${
                scrolled
                ? "bg-white/70 dark:bg-slate-900/80 backdrop-blur-md shadow-sm py-2"
                : "bg-slate-50 dark:bg-slate-950 py-4"
            }`}
            >
        
        <div className='flex justify-between container mx-auto m-5'>
           <div >
             <Link href='/' className='text-2xl font-bold text-gray-700 flex items-center gap-2 dark:text-gray-200'>
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
              {/* <ModeToggle /> */}
             
                                                          
            <div className="flex items-center gap-2">
                <ModeToggle />
                <Button>Login</Button>
                <Button variant="secondary">Register</Button>
            </div>

        </div>
        </nav>
    );
};
 
export default Navbar;
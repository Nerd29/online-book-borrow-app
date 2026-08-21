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
import { authClient } from '@/lib/auth-client';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const router = useRouter();
      const { data: session } = authClient.useSession();
  const user = session?.user;
     const [scrolled, setScrolled] = useState(false);


      useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

   const handleLogOut = async () => {
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/login");
            router.refresh();
          }
        }
      });
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

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
            <div className="w-12 h-12 flex items-center justify-center">
              <DotLottieReact
               src="https://lottie.host/fa99da30-cefd-4b54-97cf-fe298b05fe6e/cdQcaLCxLJ.lottie"
                loop
                autoplay
              />
            </div>
           <span className="text-2xl font-extrabold bg-gradient-to-r from-green-700 via-emerald-500 to-emerald-300 dark:from-emerald-500 dark:via-teal-400 dark:to-green-300 bg-clip-text text-transparent animate-gradient">
                BookBridge
                </span></Link> 
            
           </div>
          
           <ul className=' flex justify-between items-center gap-4 text-gray-500'>
            <li>
                <NavLink href='/'>Home</NavLink>
            </li>
            <li>
                <NavLink href='/about'>About</NavLink>
            </li>
            <li>
                <NavLink href='/featured'>Featured</NavLink>
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
                {user ? (
              <div className="relative group">
                <button className="flex items-center gap-3 p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-transparent">
      
                  <Image
                    width={40}
                    height={40}
                    src={user?.image || "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400"}
                    alt="avatar"
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-600/10"
                  />
                  <div className="text-left hidden lg:block">
                    <p className="text-sm font-bold truncate max-w-[100px]">{user?.name}</p>
                    <p className="text-[10px] text-slate-500">Student</p>
                  </div>
                </button>

                {/* Dropdown Menu */}
               <div className="absolute right-0 top-12 w-56 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl hidden group-hover:flex flex-col py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-700">
                  <p className="font-bold text-sm text-slate-900 dark:text-white">Welcome back!</p>
                  <p className="text-xs truncate text-slate-500 dark:text-slate-400">{user?.email}</p>
                </div>
                  {/* <Link href="/dashboard" className="px-4 py-2 text-sm hover:bg-slate-50 flex items-center gap-3 transition-colors">
                    <LayoutDashboard className="w-4 h-4" /> Dashboard
                  </Link>
                  <Link href="/settings" className="px-4 py-2 text-sm hover:bg-slate-50 flex items-center gap-3 transition-colors">
                    <User className="w-4 h-4" /> Settings
                  </Link> */}
                  <button 
                    type="button"
                    onClick={handleLogOut} 
                    className="px-4 py-2 text-sm text-red-500 hover:bg-red-50 flex items-center gap-3 transition-colors text-left w-full"
                  >
                    <LogOut className="w-4 h-4" /> Log Out
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link href="/login" className=" text-sm font-medium text-white bg-green-600 px-4 py-2 rounded-xl hover:text-black transition-colors">
                  Log In
                </Link>
                <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-blue-700 transition-colors">
                  Register
                </Link>
              </div>
            )}
          
            </div>

        </div>
        </nav>
    );
};
 
export default Navbar;
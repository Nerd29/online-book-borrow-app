'use client'

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import NavLink from './NavLink';
import Image from 'next/image';
import ModeToggle from '../ModeToggle';
import { authClient } from '@/lib/auth-client';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { LogOut, Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            setMobileMenuOpen(false);
            router.push("/login");
            router.refresh();
          }
        }
      });
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <nav
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm py-2"
          : "bg-slate-50 dark:bg-slate-950 py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Brand Logo */}
        <div>
          <Link href="/" className="text-2xl font-bold flex items-center gap-2">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
              <DotLottieReact
                src="https://lottie.host/fa99da30-cefd-4b54-97cf-fe298b05fe6e/cdQcaLCxLJ.lottie"
                loop
                autoplay
              />
            </div>
            <span className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-green-700 via-emerald-500 to-emerald-300 dark:from-emerald-500 dark:via-teal-400 dark:to-green-300 bg-clip-text text-transparent">
              BookBridge
            </span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-6 text-gray-500 dark:text-gray-300">
          <li><NavLink href="/">Home</NavLink></li>
          <li><NavLink href="/about">About</NavLink></li>
          <li><NavLink href="/featured">Featured</NavLink></li>
          <li><NavLink href="/all-books">All Books</NavLink></li>
          <li><NavLink href="/my-profile">My Profile</NavLink></li>
        </ul>

        {/* Right Section: Mode Toggle + User Profile / Auth Links */}
        <div className="hidden md:flex items-center gap-3">
          <ModeToggle />
          {user ? (
            <div className="relative group">
              <button className="flex items-center gap-3 p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
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

              {/* Desktop User Dropdown Menu */}
              <div className="absolute right-0 top-12 w-56 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl hidden group-hover:flex flex-col py-2 z-50">
                <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-700">
                  <p className="font-bold text-sm text-slate-900 dark:text-white">Welcome back!</p>
                  <p className="text-xs truncate text-slate-500 dark:text-slate-400">{user?.email}</p>
                </div>
                <button
                  type="button"
                  onClick={handleLogOut}
                  className="px-4 py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 flex items-center gap-3 transition-colors text-left w-full"
                >
                  <LogOut className="w-4 h-4" /> Log Out
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link href="/login" className="text-sm font-medium text-white bg-green-600 px-4 py-2 rounded-xl hover:bg-green-700 transition-colors">
                Log In
              </Link>
              <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-blue-700 transition-colors">
                Register
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Hamburger Controls */}
        <div className="flex md:hidden items-center gap-2">
          <ModeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-4">
          <ul className="flex flex-col gap-3 font-medium text-slate-700 dark:text-slate-300">
            <li onClick={() => setMobileMenuOpen(false)}><NavLink href="/">Home</NavLink></li>
            <li onClick={() => setMobileMenuOpen(false)}><NavLink href="/about">About</NavLink></li>
            <li onClick={() => setMobileMenuOpen(false)}><NavLink href="/featured">Featured</NavLink></li>
            <li onClick={() => setMobileMenuOpen(false)}><NavLink href="/all-books">All Books</NavLink></li>
            <li onClick={() => setMobileMenuOpen(false)}><NavLink href="/my-profile">My Profile</NavLink></li>
          </ul>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
            {user ? (
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Image
                    width={40}
                    height={40}
                    src={user?.image || "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400"}
                    alt="avatar"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">{user?.name}</p>
                    <p className="text-xs text-slate-500">{user?.email}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleLogOut}
                  className="w-full py-2.5 px-4 text-sm font-semibold text-red-500 bg-red-50 dark:bg-red-950/40 rounded-xl flex items-center justify-center gap-2"
                >
                  <LogOut className="w-4 h-4" /> Log Out
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 rounded-xl bg-green-600 text-white font-medium text-sm"
                >
                  Log In
                </Link>
                <Link
                  href="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 rounded-xl bg-blue-600 text-white font-bold text-sm"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
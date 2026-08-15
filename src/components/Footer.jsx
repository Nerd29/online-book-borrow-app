import Link from "next/link";
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
// export const metadata = {
//   title: "Footer - MediQueue",
//   description: "Footer component for MediQueue website.",
// };

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-black text-green-600 mb-3">
                BookBridge
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Connecting book lovers, sharing stories, and discovering new reads together.
            </p>
          </div>

          {/* Book Services */}
          <div>
            <h3 className="font-bold text-lg mb-3">Book Services</h3>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
              <li>
                <Link href="/books" className="hover:text-blue-600">
                  Find Books
                </Link>
              </li>
              <li>
                <Link href="/#featured" className="hover:text-blue-600">
                  Featured Books
                </Link>
              </li>
              <li>
                <Link href="/#about us" className="hover:text-blue-600">
                 About us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-3">Contact Us</h3>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
              <li>majumderturja59@gmail.com</li>
              
              <li>Chattogram, Bangladesh</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold text-lg mb-3">Follow Us</h3>
            <div className="flex gap-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:text-blue-600"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:text-blue-600"
              >
                <FaLinkedinIn />
              </Link>

              <Link
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:text-blue-600"
              >
                <FaGithub />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-200 dark:border-slate-800 mt-10 pt-6 text-center text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} BookBridge. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
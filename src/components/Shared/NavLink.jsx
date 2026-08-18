'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href,children}) => {

    const pathName=usePathname()
    const isActive=href===pathName
    return (
       <Link href={href} className={`${isActive ? 'border-b-2  border-b-green-500':''}`}>{children}</Link>
    );
};

export default NavLink;

{/* <Link href='/' className='text-2xl font-bold text-gray-700 flex items-center gap-2'>
            <Image src="/book.png" alt="Logo" width={50} height={50} />
            BookBridge</Link> */}
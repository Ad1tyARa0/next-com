import Link from 'next/link';
import React from 'react';
import { Menu } from '../menu/menu';
import Image from 'next/image';
import { SearchBar } from '../search-bar/search-bar';
import { NavbarIcons } from '../navbar-icons/navbar-icons';

export const Navbar = () => {
  return (
    <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
      {/* Mobile */}
      <div className='h-full flex items-center justify-between md:hidden'>
        <Link href='/'>
          <div className='text-2xl tracking-wide'>NEON</div>
        </Link>
        <Menu />
      </div>

      {/* Desktop */}
      <div className='hidden md:flex items-center justify-between gap-8 h-full'>
        {/* Left */}
        <div className='w-1/3 xl:w-1/2 flex items-center gap-12'>
          <Link href='/' className='flex items-center gap-3'>
            <Image src='/logo.png' alt='Logo' width={24} height={24} />
            <div className='text-2xl tracking-wide'>NEON</div>
          </Link>

          <div className='hidden xl:flex gap-4'>
            <Link href=''>Home Page</Link>
            <Link href=''>Shop</Link>
            <Link href=''>Deals</Link>
            <Link href=''>About</Link>
            <Link href=''>Contact</Link>
            <Link href=''>Log Out</Link>
            <Link href=''>Cart(1)</Link>
          </div>
        </div>
        {/* Right */}
        <div className='w-2/3 xl:w-1/2 flex items-center justify-between gap-8'>
          <SearchBar />
          <NavbarIcons />
        </div>
      </div>
    </div>
  );
};

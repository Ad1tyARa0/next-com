"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

// Component props.
interface MenuProps {}

export const Menu: React.FC<MenuProps> = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <Image
        src='/menu.png'
        alt='Menu'
        width={28}
        height={28}
        onClick={() => setIsOpen(!isOpen)}
      />

      {isOpen && (
        <div className='absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-column justify-center gap-8 text-xl z-10'>
          <Link href=''>Home Page</Link>
          <Link href=''>Shop</Link>
          <Link href=''>Deals</Link>
          <Link href=''>About</Link>
          <Link href=''>Contact</Link>
          <Link href=''>Log Out</Link>
          <Link href=''>Cart(1)</Link>
        </div>
      )}
    </div>
  );
};

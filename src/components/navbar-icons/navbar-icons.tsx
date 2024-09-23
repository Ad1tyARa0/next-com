'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Cart } from '../cart/cart';

// Component props.
interface NavbarIconsProps {}

export const NavbarIcons: React.FunctionComponent<NavbarIconsProps> = () => {
  const router = useRouter();

  const [isProfileOpen, setIsProfileOpen] = React.useState(false);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  // TODO: Add auth
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  const handleProfileClick = () => {
    if (!isLoggedIn) {
      router.push('/login');
      return;
    }

    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <div className='flex items-center gap-4 xl:gap-6 relative'>
      <Image
        src='/profile.png'
        alt='Profile'
        width={24}
        height={24}
        className='cursor-pointer'
        onClick={handleProfileClick}
      />

      {isProfileOpen && (
        <div className='absolute p-4 rounded-md top-12 l-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20'>
          <Link href='/profile'>Profile</Link>

          <div className='mt-2 cursor-pointer'>Logout</div>
        </div>
      )}

      <Image
        src='/notification.png'
        alt='Notification'
        width={24}
        height={24}
        className='cursor-pointer'
      />
      <div className='relative cursor-pointer'>
        <Image
          src='/cart.png'
          alt='Cart'
          width={24}
          height={24}
          className='cursor-pointer'
          onClick={() => setIsCartOpen(!isCartOpen)}
        />

        <div className='absolute -top-4 -right-4 w-6 h-6 bg-primary rounded-full text-white text-sm flex items-center justify-center'>
          2
        </div>

        {isCartOpen ? <Cart isEmpty={false} /> : null}
      </div>
    </div>
  );
};

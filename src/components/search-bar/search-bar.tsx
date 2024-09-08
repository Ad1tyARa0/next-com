'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

// Component props.
interface SearchBarProps {}

export const SearchBar: React.FunctionComponent<SearchBarProps> = () => {
  const router = useRouter();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') as string;

    if (name.length !== 0) {
      router.push(`/list?name=${name}`);
    }
  };

  return (
    <form
      className='flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1'
      onSubmit={handleSearch}
    >
      <input
        className='flex-1 bg-transparent border-none outline-none'
        name='name'
        type='text'
        placeholder='Search'
      />
      <button className='cursor-pointer'>
        <Image src='/search.png' alt='Search' width={16} height={16} />
      </button>
    </form>
  );
};

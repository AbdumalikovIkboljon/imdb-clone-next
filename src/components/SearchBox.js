'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { IoIosSearch } from "react-icons/io";

export default function SearchBox() {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };
  return (
    <form
      className='flex justify-between w-full sm:w-auto'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        placeholder='Search...'
        className='w-full h-10 rounded-l-full px-4 focus:outline-none focus:ring focus:border-blue-500 placeholder-gray-300 text-gray-300 border bg-transparent flex-1'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
      className='border px-4 rounded-r-full cursor-pointer focus:outline-none focus:ring focus:border-blue-500 bg-amber-400'
        disabled={search === ''}
      >
        <IoIosSearch className='w-6 h-6 text-white' />
      </button>
    </form>
  );
}
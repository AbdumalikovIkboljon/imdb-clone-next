'use client'

import React from 'react'
import NavbarItem from './NavbarItem'
import SearchBox from './SearchBox'


const Navbar = () => {


  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row justify-between my-5 max-w-6xl mx-auto">
        
        <div className="flex items-center gap-10 py-4 px-5 rounded-full">
        <NavbarItem title='Trending' param='fetchTrending' />
        <NavbarItem title='Top Rated' param='fetchTopRated' />
        </div>
        <SearchBox />
    </div>
  )
}

export default Navbar
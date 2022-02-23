import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header({toggle, visibility}) {

  return (
    <header className='sticky top-0 z-10'>
        <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-6 px-10 bg-white shadow sm:items-baseline w-full">
          <Link to='/' className="mb-2 sm:mb-0 flex align-center px-8 flex-col md:flex-row">
            <div className='invisible md:visible'>
              <img className='max-h-8' src="https://www.pngmart.com/files/2/Pokeball-PNG-File.png" alt="" />
            </div>
            <div>
              <p className="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-bold px-3">Front-End PokeDex</p>
            </div>
          </Link>
          <div className='flex justify-end'>
            <button className={`mb-2 sm:mb-0 px-8 font-bold text-xl ${visibility} w-24`}onClick={toggle}>
              <img src='https://cdn2.iconfinder.com/data/icons/font-awesome/1792/search-512.png'></img>
            </button>
          </div>
        </nav>
    </header>
  )
}

export default Header
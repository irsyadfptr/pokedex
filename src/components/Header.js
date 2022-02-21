import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header({input}) {

  return (
    <header>
        <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 pt-8 px-6 bg-white shadow sm:items-baseline w-full">
          <Link to='/' className="mb-2 sm:mb-0 flex align-center px-8 flex-col md:flex-row">
            <div className='invisible md:visible'>
              <img className='max-h-8' src="https://www.pngmart.com/files/2/Pokeball-PNG-File.png" alt="" />
            </div>
            <div>
              <p className="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-bold px-3">Front-End PokeDex</p>
            </div>
          </Link>
          <div className='px-6'>
            <form>
              <input className='p-2'
                type='text'
                onChange={input}
                placeholder='Search'
              />
            </form>
          </div>
        </nav>
    </header>
  )
}

export default Header
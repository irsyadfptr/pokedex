

import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

function NotfoundPage() {
  return (
    <div className='w-screen flex flex-col h-screen'>
        <Header visibility={"invisible"}/>
        <div class="flex items-center justify-center h-full">
            <div class="px-40 py-20 bg-white rounded-md shadow-xl">
                <div class="flex flex-col items-center">
                    <h1 class="font-bold text-red-600 text-9xl">404</h1>
                    <h6 class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                        <span class="text-red-500">Oops!</span> Page not found
                    </h6>
                    <p class="mb-8 text-center text-gray-500 md:text-lg">
                        The page you’re looking for doesn’t exist.
                    </p>
                    <Link to='/' class="px-6 py-2 text-sm font-semibold text-red-800 bg-red-100">
                        Go home
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}


export default NotfoundPage


import React from 'react'
import Header from '../components/Header'

function InternetDownPage() {
  return (
    <div className='w-screen flex flex-col h-screen'>
        <Header visibility={"invisible"}/>
        <div class="flex items-center justify-center h-full">
            <div class="px-40 py-20 bg-white rounded-md shadow-xl">
                <div class="flex flex-col items-center">
                    <h1 class="font-bold text-red-600 text-9xl">400</h1>
                    <h6 class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                        <span class="text-red-500">Oops!</span> Bad request
                    </h6>
                    <p class="mb-8 text-center text-gray-500 md:text-lg">
                        Sorry your internet seems to be disconnected
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}


export default InternetDownPage
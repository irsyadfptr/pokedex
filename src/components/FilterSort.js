import React from 'react'
import { DebounceInput } from 'react-debounce-input'
import '../style_inject/Mobile.scss'

function FilterSort({handleChange, handleSelect, sortName, sortId, sortType, order, toggle, type}) {
  return (
    <div className='mt-5 px-14 md:w-full flex justify-center mobile-size'>
        <div className='px-20 py-2 flex flex-col bg-gray-200 rounded-xl pb-8 mobile-size'>
            <div className='flex md:flex-row sm:flex-col'>
                <div className='flex flex-col flex-wrap sm:p-0 md:pr-2'>
                    <h1 className='py-2 pl-1 font-bold'>Search your pokemon!</h1>
                    <form className=''>
                    <DebounceInput className='border-2 border-gray-300 rounded-xl text-gray-600 h-10 md:pl-5 md:pr-10 sm:pl-1 sm:pr:2 bg-white hover:border-gray-400 focus:outline-none'
                        type='text'
                        onChange={handleChange}
                        placeholder='Search'
                        debounceTimeout={300} minLength={5}
                    />
                    </form>
                </div>
                <div className='relative flex flex-col'>
                    <h1 className='py-2 pl-1 font-bold'>Type Filter</h1>
                    <select value={type}  onChange={handleSelect} className="border border-gray-300 rounded-xl text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none">
                        <option value=''>All</option>
                        <option value='normal'>Normal</option>
                        <option value='fire'>Fire</option>
                        <option value='water'>Water</option>
                        <option value='electric'>Electric</option>
                        <option value='grass'>Grass</option>
                        <option value='ice'>Ice</option>
                        <option value='fighting'>Fighting</option>
                        <option value='poison'>Poison</option>
                        <option value='ground'>Ground</option>
                        <option value='flying'>Flying</option>
                        <option value='psychic'>Psychic</option>
                        <option value='bug'>Bug</option>
                        <option value='rock'>Rock</option>
                        <option value='ghost'>Ghost</option>
                        <option value='dragon'>Dragon</option>
                        <option value='dark'>Dark</option>
                        <option value='steel'>Steel</option>
                        <option value='fairy'>Fairy</option>
                    </select>
                </div>
            </div>
            <div className='flex flex-col py-3'>
            <div>
                <h1 className='py-2 pl-1 font-bold'>Sorting</h1>
            </div>
            <div className='flex justify-between'>
                <button className='border border-gray-300 rounded-xl text-gray-600 h-10 px-4 md:px-7 bg-white hover:border-gray-400 focus:outline-none' onClick={sortId}>Id</button>
                <button className='border border-gray-300 rounded-xl text-gray-600 h-10 px-6 md:px-9 bg-white hover:border-gray-400 focus:outline-none' onClick={sortName}>Name</button>
                <button className='border border-gray-300 rounded-xl text-gray-600 h-10 px-6 md:px-9 bg-white hover:border-gray-400 focus:outline-none' onClick={sortType}>Type</button>
                <button className='border border-gray-300 rounded-xl text-gray-600 h-10 px-4 md:px-7 bg-white hover:border-gray-400 focus:outline-none' onClick={order}>{
                    toggle ? "Asc" : "Dsc"
                }</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default FilterSort
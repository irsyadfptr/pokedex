import React from 'react'
import { Link } from 'react-router-dom'
import '../style_inject/StyleInject.scss';

function Card({pokemon}) {
  return (
    <div>
        <div className='my-3 rounded text-center shadow card' >
            <Link className={`flex flex-col items-center justify-center p-4 shadow rounded-xl pb-8 bg-gray-900`} to={`/pokemon/${pokemon.id}`}>
                <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40 mb-10 bg-white">
                    <img className="h-full w-full" src={pokemon.sprites.front_default} alt=""/>
                </div>
                <p className="mt-4 font-bold text-xl mb-10 text-gray-50">#{pokemon.id} {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
                <div className='flex justify-center items-center'>
                    {pokemon.types.map( t =>(
                        <button className={`bg-blue-500 rounded-full text-white px-5 py-1 m-1.5 font-semibold ${t.type.name}`}
                        key={t.type.name}>{t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1)}</button>
                    ))}
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Card
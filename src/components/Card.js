import React from 'react'
import { Link } from 'react-router-dom'

function Card({pokemon}) {

//     let types = [];

//     for(let i = 0; i < pokemon.types.length; i++){
//         types.push(pokemon.types[i].type.name)
//     }

//     console.log(types)

  return (
    <div>
        <Link className='my-3 p-3 rounded text-center shadow p-3 mb-5 bg-white rounded' to={`/pokemon/${pokemon.id}`}>
            {/* <Link to={`/pokemon/${pokemon.name}`} className="link">
                <h1>#{pokemon.id} {pokemon.name}</h1>
            </Link> */}
            <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                <div className="w-full md:w-2/5">
                    <img className="object-center object-cover h-full" src={pokemon.sprites.front_default} alt="photo"/>
                </div>
                <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
                    <p className="text-xl text-gray-700 font-bold">#{pokemon.id} {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
                    <button>{pokemon.types[0].type.name}</button>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default Card
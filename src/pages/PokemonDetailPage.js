import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function PokemonDetailPage({pokeParam}) {

    const [details, setDetails] = useState();
    const [load, setLoad] = useState(true);

    let { id } = useParams()

    const getPokemmon = async () => {
        const pokeDetail = await getData(id);
        setDetails(pokeDetail.data);
        console.log(pokeDetail.data);
        setLoad(false)
    }

    const getData = async (id) => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return response;
    }

    useEffect(() => {
        getPokemmon(id);
    }, [])

  return (
    <div>
        {load ? (
            <h1>Loading...</h1>
        ) : (
            <div className='my-3 p-3 rounded text-center shadow p-3 mb-5 bg-white rounded'>
            {/* <Link to={`/pokemon/${pokemon.name}`} className="link">
                <h1>#{pokemon.id} {pokemon.name}</h1>
            </Link> */}
            <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                <div className="w-full md:w-2/5">
                    <img className="object-center object-cover h-full" src={details.sprites.front_default} alt="photo"/>
                </div>
                <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
                    <p className="text-xl text-gray-700 font-bold">#{details.id} {details.name.charAt(0).toUpperCase() + details.name.slice(1)}</p>
                    <button>{details.types[0].type.name}</button>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>
                            {details.stats[0].stat.name}
                        </th>
                        <th>
                            {details.stats[1].stat.name}
                        </th>
                        <th>
                            {details.stats[2].stat.name}
                        </th>
                        <th>
                            {details.stats[3].stat.name}
                        </th>
                        <th>
                            {details.stats[4].stat.name}
                        </th>
                        <th>
                            {details.stats[5].stat.name}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>
                            {details.stats[0].base_stat}
                        </th>
                        <th>
                            {details.stats[1].base_stat}
                        </th>
                        <th>
                            {details.stats[2].base_stat}
                        </th>
                        <th>
                            {details.stats[3].base_stat}
                        </th>
                        <th>
                            {details.stats[4].base_stat}
                        </th>
                        <th>
                            {details.stats[5].base_stat}
                        </th>
                    </tr>
                </tbody>

            </table>
        </div>
        )}
    </div>
  )
}

export default PokemonDetailPage
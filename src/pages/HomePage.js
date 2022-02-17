import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import Header from '../components/Header';

function HomePage() {

    const [pokemon, setPokemon] = useState([]);
    const [load,setLoad] = useState(true);
    const [search, setSearch] = useState('');


    const getPokemmon = async () => {
        let arr = [];
        for (let i = 1; i < 20; i++){
            arr.push(await getData(i))
        }
        console.log(arr);
        setPokemon(arr);
        setLoad(false)
    }

    const getData = async (id) => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return response;
    }

    useEffect(() => {
        getPokemmon();
    }, [])

    const handleChange = e => {
        setSearch(e.target.value);
    };

    const filterPokemon = pokemon.filter(p =>
        p.data.name.toLowerCase().includes(search.toLowerCase())
      );


  return (
    <div>
        <Header input={handleChange}/>
        {load ? (
            <h1>Loading...</h1>
        ) : (
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-6'>
            {filterPokemon.map( pokemon =>(
                <div key={pokemon.data.name}>
                    <Card pokemon={pokemon.data}/>
                </div>
            ))}
        </div>
        )}
    </div>
  )
}

export default HomePage
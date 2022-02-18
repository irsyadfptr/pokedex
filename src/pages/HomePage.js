import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import Header from '../components/Header';

function HomePage() {

    const [pokemon, setPokemon] = useState([]);
    const [offset, setOffset] = useState(30);
    const [pokeData, setPokeData] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [search, setSearch] = useState('');

    const loadPokemon = () => {
        let url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=30";
        axios.get(url).then(response => {
            setPokemon(response.data.results);
            pokemonIdGenerator();
        })
    }

    const morePokemon = () => {
        let url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=30`;
        axios.get(url).then(response => {
            setPokemon([...pokemon, ...response.data.results]);
            setOffset(offset + 20)
            pokemonIdGenerator();
            setIsFetching(false);
            console.log(pokemon.length)
            console.log(pokeData)
        })
    }

    const pokemonProp = async (id) => {
        let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const response = await axios.get(url);
        return response;
    }

    const pokemonIdGenerator = async () => {
        let arr = [];
        for (let i = 1; i <= pokemon.length + 30; i++){
            arr.push(await pokemonProp(i))
        }
        setPokeData([...arr]);
    }

    const isScrolling = () => {
        if(window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight){
            return;
        }
        setIsFetching(true);
    }

    useEffect(() => {
        loadPokemon();
        pokemonIdGenerator();
        window.addEventListener("scroll", isScrolling);
        return () => window.removeEventListener("scroll", isScrolling);
    }, [])

    useEffect(() => {
        if(isFetching) {
            morePokemon();
        }
    }, [isFetching]);

    if (pokemon.length === 0 && pokeData.length === 0) {
        return <h1>Loading...</h1>;
      }

    const handleChange = e => {
        setSearch(e.target.value);
    };

    const filterPokemon = pokeData.filter(p =>
        p.data.name.toLowerCase().includes(search.toLowerCase())
      );


  return (
    <div>
        <Header input={handleChange}/>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-6'>
            {filterPokemon.map( pokemon =>(
                <div key={pokemon.data.name}>
                    <Card pokemon={pokemon.data}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default HomePage
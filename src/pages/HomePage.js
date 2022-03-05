import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import FilterSort from '../components/FilterSort';
import Header from '../components/Header';
import Spinner from '../components/Spinner';
import NewSpinner from '../components/NewSpinner';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchingData, loadPokemon, morePokemon } from '../redux/features/pokeList';



function HomePage() {

    // const [pokemon, setPokemon] = useState([]);
    // const [pokeData, setPokeData] = useState([]);
    // const [offset, setOffset] = useState(20);
    // const [isFetching, setIsFetching] = useState(false);
    // const [search, setSearch] = useState('');
    // const [filterType, setFilterType] = useState('');
    // const [loading,setLoading] =useState(true);
    // const [sort,setSort] = useState("id");
    // const [toggle, setToggle] = useState(true);
    // const [isOpen, setIsOpen] = useState(false);


    // const dispatch = useDispatch()

    // const loadPokemon = async () => {
    //     let url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20";
    //     await axios.get(url).then(response => {
    //         dispatch(setPokemon(response.data.results));
    //         setLoading(false);
    //         // pokemonIdGenerator();
    //     })
    //     await pokemonIdGenerator();
    // }

    // const morePokemon = () => {
    //     let url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`;
    //     axios.get(url).then(response => {
    //         dispatch(setPokemon([...pokemon, ...response.data.results]));
    //         setOffset(offset + 20)
    //         pokemonIdGenerator();
    //         setIsFetching(false);
    //         // setBottomSpinner("hidden")
    //     })
    // }

    // const pokemonProp = async (id) => {
    //     let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    //     const response = await axios
    //     .get(url)
    //     return response.data;
    // }

    // const pokemonIdGenerator = async () => {
    //     let arr = [];
    //     for (let i = 1; i <= offset; i++){
    //         arr.push(await pokemonProp(i))
    //     }
    //     dispatch(setPokedata([...arr]));
    // }


      

    const dispatch = useDispatch()
    const pokeData = useSelector(state => state.pokemons.pokemonsList[1])

    const test = useSelector(state => state)
    const fetchingStats = useSelector(state => state.pokemons.isFetching)
    const offset = useSelector(state => state.pokemons.offset)

    console.log(test)

    const isScrolling = () => {
        if(window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight){
            return
        }
        dispatch(fetchingData());
    }

    useEffect(() => {
        dispatch(loadPokemon())
        // loadPokemon();
        window.addEventListener("scroll", isScrolling);

        // const newPokeData = [...pokeData];

        return () => window.removeEventListener("scroll", isScrolling);
    }, [dispatch])

    useEffect(() => {
        if(fetchingStats) {
            dispatch(morePokemon(offset));
        }
    }, [fetchingStats]);

    // const handleChange = e => {
    //     setSearch(e.target.value);
    // };

    // const handleSelect = e => {
    //     setFilterType(e.target.value);
    // }

    // const filterPokemon = 
    //         pokeData.filter(p => {
    //             if(p.types.length === 2){
    //                 const dua = p.name.toLowerCase().includes(search.toLowerCase()) && (p.types[0].type.name.toLowerCase().includes(filterType.toLowerCase()) || p.types[1].type.name.toLowerCase().includes(filterType.toLowerCase()))
    //                 return dua;
    //             } else{
    //                 return p.name.toLowerCase().includes(search.toLowerCase()) && p.types[0].type.name.toLowerCase().includes(filterType.toLowerCase());
    //             }
    //         }
    //     )

    // const sortPokemon = 
    //     filterPokemon.sort((a,b) => {
    //         if(sort === "id" ){
    //             const asc = a.id -b.id
    //             const desc = b.id - a.id
    //             return toggle ? asc : desc
    //         } else if (sort === "name") {
    //             const asc = a.name.localeCompare(b.name)
    //             const desc = b.name.localeCompare(a.name)
    //             return toggle ? asc : desc
    //         } else{
    //             const asc = a.types[0].type.name.localeCompare(b.types[0].type.name)
    //             const desc = b.types[0].type.name.localeCompare(a.types[0].type.name)
    //             return toggle ? asc : desc
    //         }
    //     })

    // const sortId = () => {
    //     setSort("id")
    // }

    // const sortName = () => {
    //     setSort("name")
    // }
    
    // const sortType = () => {
    //     setSort("type")
    // }

    // const order = () => {
    //     setToggle(!toggle)
    // }

    // const searchToggle = () => {
    //     setIsOpen(!isOpen)
    //     if(isOpen === false){
    //         document.body.scrollTop = 0;
    //         document.documentElement.scrollTop = 0;
    //     }
    // }

  return (
      
    <div>
        {/* <Header toggle={searchToggle}/>
        {isOpen && (
            <FilterSort handleChange={handleChange} handleSelect={handleSelect} 
            value={filterType} sortId={sortId} sortName={sortName} sortType={sortType} order={order} toggle={toggle}/>
        )} */}
        {/* {loading ? (
            <Spinner/>
        ) : (  */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 bg-white pt-5 p-10'>
                {pokeData && pokeData.map( (pokemon, index) =>(
                    <div key={index}>
                        <Card pokemon={pokemon}/>
                    </div>
                ))} 
            </div>
        {/* )}
        {isFetching && (
            <NewSpinner/>
        )} */}
    </div>
  )
}

export default HomePage
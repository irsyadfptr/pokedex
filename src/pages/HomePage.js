import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import Header from '../components/Header';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchingData, loadPokemon } from '../redux/features/pokeList';
import FilterSort from '../components/FilterSort';
import { filterData, orderData, searchData, sortData, toggleSearchingBox } from '../redux/features/searchBox';
import Spinner from '../components/Spinner';
import NewSpinner from '../components/NewSpinner';
import { Offline, Online } from 'react-detect-offline';
import InternetDownPage from './InternetDownPage';





function HomePage() {

    const search = useSelector(state => state.pagingFunction.search)
    const filter = useSelector(state => state.pagingFunction.filter)
    const toggleSearchBox = useSelector(state => state.pagingFunction.toggle)
    const order = useSelector(state => state.pagingFunction.order)
    const sort = useSelector(state => state.pagingFunction.sort)



    const dispatch = useDispatch()
    const pokeData = useSelector(state => state.pokemons.pokemonsList[1])
    const test = useSelector(state => state)

    const fetchingStats = useSelector(state => state.pokemons.isFetching)
    const offset = useSelector(state => state.pokemons.offset)
    const loading = useSelector(state => state.pokemons.loading)

    const isScrolling = () => {
        if(window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight){
            return
        }
        dispatch(fetchingData());
    }

    useEffect(() => {
        dispatch(loadPokemon({offset, sort, order, search, filter}))
        window.addEventListener("scroll", isScrolling);
        return () => window.removeEventListener("scroll", isScrolling);
    }, [dispatch, search, filter, sort, order])

    useEffect(() => {
        if(fetchingStats) {
            dispatch(loadPokemon({offset, sort, order, search, filter}));
        }
    }, [fetchingStats, search, filter, sort, order]);

    const searchToggle = () => {
        dispatch(toggleSearchingBox())
        if(toggleSearchBox === false){
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    }

    const sortId = () => {
        dispatch(sortData("id"))
    }

    const sortName = () => {
        dispatch(sortData("name"))
    }

    const sortType = () => {
        dispatch(sortData("type"))
    }

    const handleChange = e => {
        dispatch(searchData(e.target.value));
    };

    const handleSelect = e => {
        dispatch(filterData(e.target.value));
    }

    const handleClick = () => {
        dispatch(orderData());
    }

    console.log(order)

  return (
      
    <div>
        <Offline>
            <InternetDownPage/>
        </Offline>
        <Online>
            <Header toggle={searchToggle}/>
            {toggleSearchBox && (
                <FilterSort 
                handleChange={handleChange} 
                handleSelect={handleSelect} value={filter}
                sortId={sortId} sortName={sortName} sortType={sortType} 
                order={handleClick} toggle={order}
                />
            )}
            {loading ? (
                <Spinner/>
            ) : (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 bg-white pt-5 p-10'>
                    {pokeData && pokeData.map((pokemon, index) =>(
                        <div key={index}>
                            <Card pokemon={pokemon}/>
                        </div>
                    ))} 
                </div>
            )}
            {fetchingStats && (
                < NewSpinner />
            )}
        </Online>
    </div>
  )
}

export default HomePage
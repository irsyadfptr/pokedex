import React, { useEffect } from 'react'
import Card from '../components/Card';
import Header from '../components/Header';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchingData, loadPokemon, updateOffset } from '../redux/features/pokeList';
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

    const fetchingStats = useSelector(state => state.pokemons.isFetching)
    const offset = useSelector(state => state.pokemons.offset)
    const loading = useSelector(state => state.pokemons.loading)

    useEffect(() => {
        window.onscroll = function() {
            if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
                if (!loading){
                    dispatch(updateOffset())
                    }
              dispatch(fetchingData())
            }
        };
        dispatch(loadPokemon({offset, sort, order, search, filter}))
    }, [dispatch, search, filter, sort, order, offset, loading])

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
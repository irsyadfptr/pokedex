// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';
// import Header from '../components/Header';
// import Spinner from '../components/Spinner';
// import '../style_inject/StyleInject.scss';
// import '../style_inject/Mobile.scss'
// import { useSelector } from 'react-redux';
// import { setDetailPokedata, setDetailPokemon } from '../redux/actions/pokeAction';
// import { useDispatch } from 'react-redux';

// function PokemonDetailPage() {

//     const dispatch = useDispatch()
//     const [load, setLoad] = useState(true);

//     const details = useSelector((state) => state.allPokeDetail.pokemon)
//     const specDetails = useSelector((state) => state.allPokeDataDetail.pokeData)

//     console.log(details)
//     console.log(specDetails)

//     let { id } = useParams()

//     const getPokemmon = async () => {
//         const pokeDetail = await getData(id);
//         const pokeDetailSpec = await getSpeciesData(id);
//         dispatch(setDetailPokemon(pokeDetail.data))
//         dispatch(setDetailPokedata(pokeDetailSpec.data));
//         setLoad(false)
//     }

//     const getData = async (id) => {
//         const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
//         return response;
//     }

//     const getSpeciesData = async (id) => {
//         const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
//         return response;
//     }

//     useEffect(() => {
//         getPokemmon(id);
//     }, [])

//     const  goToPokedex = e => {
//         window.location.href=`https://www.pokemon.com/us/pokedex/${details.name}`
//         console.log(details);
//         console.log(specDetails);
//     } 


//   return (
//     <div>
//         <Header visibility={"invisible"}/>
//         {load ? (
//             <Spinner/>
//           ) : (
//             <div className='grid md:grid-cols-3 sm:grid-cols-1 md:px-20 sm:px-0 pb-5'>
//                 <div className='p-0 md:p-12 md:pr-6 col-span-1 px-20 mobile-size'>
//                     <div className="relative border bg-white border-gray-200 rounded-xl">
//                         <div className='flex justify-center pt-10 w-full'>
//                             <img className="w-3/5 object-contain rounded-t-xl justify-self-center" src={details.sprites.front_default} alt="photo"/>
//                         </div>
//                         <div className="sm:px-5 md:p-5 flex-col">
//                             <h2 className={`text-2xl font-bold text-center mb-5`}>{details.name.charAt(0).toUpperCase() + details.name.slice(1)}</h2>
//                             <div className='flex justify-center items-center'>
//                                 {details.types.map( t =>(
//                                     <button className={`bg-blue-500 rounded-full text-white px-5 font-semibold ${t.type.name} mb-5 mx-2 py-1`}
//                                     key={t.type.name}>{t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1)}</button>
//                                 ))}
//                             </div>
//                             <div className='items-center justify-center'>
//                                 <table className='table text-gray-400 border-separate space-y-6 text-sm w-full text-center'>
//                                     <thead className='text-gray-500'>
//                                         <tr>
//                                             <th className='p-3 border-2'>Weight</th>
//                                             <th className='p-3 border-2'>Height</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         <tr className=''>
//                                             <td className='p-3 border-2'>{details.weight / 10} kg</td>
//                                             <td className='p-3 border-2'>{details.height / 10} m</td>
//                                         </tr>
//                                     </tbody>
//                                 </table>
//                             </div>
//                             <div className="flex">
//                                 <button className={`py-3 w-full bg-yellow-300 rounded-bl-xl text-white font-extrabold ${details.types[0].type.name}`} onClick={goToPokedex}>Go to complete pokedex</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>


//                 <div className="md:col-span-2 sm:col-span-1 p-24 py-12 mobile-size flex flex-col">
//                     <div className={`p-3`}>
//                         <h1 className={`text-2xl txt-${details.types[0].type.name} py-2 font-semibold`}>
//                             Little Description
//                         </h1>
//                         <p>{specDetails.flavor_text_entries[0].flavor_text.replace("\f", " ")}</p>
//                     </div>
                    
//                     <div className=''>
//                         <div className={`py-3 text-center w-full items-center justify-center`}>
//                             <h1 className={`font-semibold text-xl ${details.types[0].type.name} rounded-xl py-1 mb-2` }>Base Status</h1>
//                             <table className='table border-separate space-y-6 w-full text-center'>
//                                 <thead>
//                                     <tr>
//                                         {details.stats.map( d =>(
//                                             <th className='sm:p-0 md:p-2 border-1 text-sm' key={d.stat.name}>{d.stat.name.charAt(0).toUpperCase() + d.stat.name.slice(1)}</th>
//                                         ))}
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     <tr>
//                                         {details.stats.map( (d, index) =>(
//                                             <td className='sm:p-0 md:p-2 border-1 text-sm' key={index}>{d.base_stat}</td>
//                                         ))}
//                                     </tr>
//                                 </tbody>
//                             </table>
//                         </div>
//                         <div className={`flex text-center py-3 pt-1 font-semibold border-2 rounded-xl mb-8`}>
//                             <div className='flex-grow'>
//                                 <h1 className={`py-1 text-m`}>Egg Groups</h1>
//                                 {specDetails.egg_groups.map( e =>(
//                                         <p className='text-center px-2 py-1 text-sm'
//                                         key={e.url}>{e.name.charAt(0).toUpperCase() + e.name.slice(1)}</p>
//                                 ))}
//                             </div>
//                             <div>
//                                 <h1 className='py-1 text-m font-semibold'>Hatch Counter</h1>
//                                 <p className='py-1 text-sm'>{specDetails.hatch_counter} minutes</p>
//                             </div>
//                             <div className='flex-grow'>
//                                 <h1 className='py-1 text-m font-semibold'>Growth Rate</h1>
//                                 <p className='px-2 py-1 text-sm'>{specDetails.growth_rate.name.charAt(0).toUpperCase() + specDetails.growth_rate.name.slice(1)}</p>
//                             </div>

//                         </div>
//                         <div className={`flex text-center py-3 pt-1 font-semibold border-2 rounded-xl`}>
//                             <div className='flex-grow'>
//                                 <h1 className='py-1 text-m font-semibold'>Habitat</h1>
//                                 <p className='py-1 text-sm text-center px-2'>{(specDetails.habitat === null) ? "-" : specDetails.habitat.name.charAt(0).toUpperCase() + specDetails.habitat.name.slice(1)}</p>
//                             </div>
//                             <div className='flex-grow'>
//                                 <h1 className='py-1 text-m font-semibold'>Capture Rate</h1>
//                                 <p className='py-1 text-sm'>{specDetails.capture_rate}%</p>
//                             </div>
//                             <div className='flex-grow'>
//                                 <h1 className='py-1 text-m font-semibold'>Base Hapiness</h1>
//                                 <p className='py-1 text-sm'>{specDetails.base_happiness}%</p>
//                             </div>
//                             <div className='flex-grow'>
//                                 <h1 className='py-1 text-m font-semibold'>Base Experience</h1>
//                                 <p className='py-1 text-sm'>{details.base_experience}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//           )}
//     </div>
//   )
// }

// export default PokemonDetailPage
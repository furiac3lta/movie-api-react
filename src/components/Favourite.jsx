import React, { useEffect, useContext, useState } from 'react'
import { userContext } from '../context/UserContext';
import { Card } from './Card';

export const Favourite = ({ movie }) => {

    
    const { favorites, movieFiltered } = useContext(userContext);
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        setMovies(favorites)
    }, [favorites])

    return (
        <>
            <div>
                <h5 className="lg:ml-6 pt-8 text-center text-4xl font-bold leading-none text-gray-900 dark:text-white">
                    Favourites
                </h5>
            </div>
            <div className='container mx-auto space-y-2 content-center pt-6 gap-2 grid lg:grid-cols-3  xl:grid-cols-3 2xl:grid-cols-4
                      md:grid-cols-2 sm:grid-cols-2'>
            {
               movieFiltered == '' ?  (
                    favorites.map(movie =>
                        <Card movie = { movie } key = { movie.id } />
                )):(
                    movieFiltered.map(movie =>
                        <Card movie = { movie } key = { movie.id } />
                )
           
                )
        }
            </div>
       
        </>
    )
}

import React from 'react'
import { FavButton } from './FavButton';
import { Link } from 'react-router-dom';



export const Card = ({ movie }) => {
    const URL_IMAGE = 'https://image.tmdb.org/t/p/w500/';

    return (
        <>
            <div className=" w-full rounded my-3 px-3 xs:px-0 " key={movie.id}>
                <div className="top-2 right-12">
                    <FavButton movie={movie} />
                </div> 
                <div className="rounded-lg shadow-lg bg-white max-w-sm">
                        <img
                            className="rounded-t-lg mx-auto max-w-xs h-auto" 
                            src={URL_IMAGE + movie.poster_path}
                            alt={movie.title}
                        />
                    <div className="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-2 truncate">{movie.title}</h5>
                        <p className="text-gray-700 text-base mb-4 truncate ">
                            {movie.overview ? movie.overview : "Nothing here..."}
                        </p>
                        <Link to={`/movie/${movie.id}`} className="bg-gray-300 hover:bg-pink-200 text-slate-900 font-bold
                      py-2 px-2 rounded inline-flex items-center">
                            <span className=''>Detalles</span>
                            <svg aria-hidden="true" className=" ml-4 mr-1 w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </Link>
  


                    </div>
                </div>
            </div>
        </>
    )
}

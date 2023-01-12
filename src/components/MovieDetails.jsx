import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { myMovie } from '../function/funcion'

 const MovieDetails = () => {
    const URL_IMAGE = 'https://image.tmdb.org/t/p/w500/';
     const [mimovie, setMimovie] = useState(null)
     const params = useParams()
     useEffect(() => {
        myMovie(params.id, setMimovie)
     }, [])
    
  return (
    
    <>
     <div className='h-4'>
     <h5 className="lg:ml-6 text-center text-4xl font-bold leading-none text-gray-900 dark:text-white pt-8">
          Movie
        </h5>      
    </div>
     <div className='grid place-items-center h-screen'>
         {mimovie != null ? (
         
            <div className=''>
              <div className=' white:bg-gray-400  shadow-pink-500 shadow dark:bg-gray-800 dark:border-gray-700 rounded-lg border'>
                 <a
                     href="#"
                     className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                 >
                      <img
                         className="rounded-t-lg mx-auto max-w-xs h-auto px-2"
                         src={URL_IMAGE + mimovie.poster_path}
                         alt=""
                     /> 
                     <div className="flex flex-col justify-between p-4 leading-normal">
                         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {mimovie.original_title}
                         </h5>
                         <p className=" mb-3 font-normal text-gray-700 dark:text-gray-400">
                             <span className='font-bold'>Genero: </span> {mimovie.genres[0].name}
                         </p>
                         <p className=" mb-3 font-normal text-gray-700 dark:text-gray-400">
                             <span className='font-bold'>Descripcion: </span> {mimovie.overview}
                         </p>
                         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                         <span className='font-bold'>Popularidad: </span> {mimovie.popularity}
                         </p>
                         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                         <span className='font-bold'>Compañia: </span> {mimovie.production_companies[0].name}
                         </p>
                         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                         <span className='font-bold'>Lanzamiento: </span> {mimovie.release_date}
                         </p>
                     </div>
                 </a>
                 <Link to={'/'} className="bg-gray-300 hover:bg-pink-200 text-slate-900 font-bold
                      py-2 px-2 rounded grid place-items-center">
                            <span className='text-center'>Volver</span>
                           
                        </Link>
             </div>
            </div>
         ) : ('Loading ...')}

     </div> 
    
 </>
  )
}

export default MovieDetails

import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { HomePage } from './HomePage'
import { About } from './About';
import Footer from './Footer';
import 'flowbite'
import { NavBar } from './NavBar';
import { Favourite } from './Favourite';
import MovieDetails from './MovieDetails';


export const MoviesApp = () => {

  return (
   <>
        <NavBar />
        <Routes>
           <Route path='/' element= { <HomePage /> } />
           <Route path='/about' element= { <About /> } />  
           <Route path='/favourite' element= { <Favourite /> } />
           <Route path='/movie/:id' element={ <MovieDetails/> } />
           <Route path="/*" element = { <Navigate to ="/" /> } />
        </Routes>
       
        <Footer/>
   </>
  )
}

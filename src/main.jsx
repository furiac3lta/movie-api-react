import React from 'react'
import ReactDOM from 'react-dom';
import './index.css'
import { MoviesApp } from './components/MoviesApp';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/UserProvider';
import 'flowbite'

ReactDOM.render(
  
  <UserProvider>
    <BrowserRouter>
      <MoviesApp />
    </BrowserRouter>
  </UserProvider>,
 document.getElementById('root')

)

import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
        <footer className="pt-10 h-30 mt-10 bg-gray-300 rounded-lg shadow md:flex md:items-center md:justify-between md:pb-6 dark:bg-gray-800">
  <span className="text-sm text-dark-500 sm:text-center dark:text-white-400">
    © 2022{" "}
    <Link to='/' className="hover:underline">
      TMDB™
    </Link>
    . All Rights Reserved.
  </span>
  <ul className="flex flex-wrap items-center mt-3 mr-4 text-sm text-dark-500 dark:text-gray-400 sm:mt-0">
    <li>
      <Link to='/home' className="mr-4 hover:underline md:mr-6 text-dark-500">
        Home
      </Link>
    </li>
    <li>
      <Link to='/favourite' href="#" className="mr-4 hover:underline md:mr-6">
        Favourite
      </Link>
    </li>
   
    <li>
      <Link to="/home" className="hover:underline">
        Contact
      </Link>
    </li>
  </ul>
</footer>

    </>
  )
}

export default Footer

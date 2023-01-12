import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { userContext } from '../context/UserContext';
import {MdMovieFilter} from 'react-icons/md'


export const NavBar = () => {
  const { data, setMovieFiltered } = useContext(userContext);
  const [movie, setMovie] = useState('')

  const onChange = (e) => {
    const query = e.target.value.trim().toLowerCase();
    setMovie(query);
    const results = data.filter((item) => item.title.toLowerCase().includes(query))
    setMovieFiltered(results);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (movie.trim().length <= 1) return;
    const results = data.find((item) => item.title.toLowerCase() === movie ) || [];
    setMovieFiltered(results)
  }

  return (
    <>

      <div >
      <nav className="bg-[url('/src/assets/images/wp5435701.jpg')] h-72  border-gray-200 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container w-11/12 flex flex-wrap justify-between items-center mx-auto">
          <Link to="/" className="flex items-center active:text-pink-700" > 
            <span className="text-4xl self-center text-neutral-50 font-semibold whitespace-nowrap dark:text-white">
              Movie
            </span>
          </Link>
          <div className="flex md:order-2">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="hidden relative md:block">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <form onSubmit={onSubmit} className="xs:16">
                <input
                  autoComplete="off"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={movie}
                  onChange={onChange}
                  id="search-navbar"
                  className="bg-neutral-400 block p-2 pl-10 w-full text-gray-900  placeholder-transparent::placeholder rounded-lg border border-gray-300 sm:text-sm focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                />
              </form>
            </div>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <form onSubmit={onSubmit}>
                <input
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={movie}
                  onChange={onChange}
                  id="search-navbar"
                  className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"

                />
              </form>
            </div>
            <ul className="flex flex-col p-4 mt-4  rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to="/"
                  className="text-lg block py-2 pr-4 pl-3 text-neutral-400 bg-neutral-50 rounded md:bg-transparent md:text-pink-700 md:p-0 dark:text-white active:text-white-700 "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to="/favourite"
                  
                  className="text-lg block py-2 pr-4 pl-3 text-neutral-50 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 active:text-pink-700 "
                >
                  Favourite
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>



    </>
  )
}

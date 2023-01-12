import React, { useState, useEffect, useContext } from "react";
import { userContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import { Card } from "./Card";

export const AllCards = () => {
  const URL_IMAGE = "https://image.tmdb.org/t/p/w500/";
  const { data, movieFiltered, status } = useContext(userContext);
  console.log(data);
  const [movies, setMovies] = useState([]);
  console.log(movieFiltered);
  useEffect(() => {
    setMovies(data);
  }, [data]);
  return (
    <>
      <div className="pt-20">
        <div className="flex justify-between mb-4 xs:flex xs:items-center xs:justify-center ">
          <h5 className="lg:ml-6 text-4xl font-bold leading-none text-gray-900 dark:text-white pt-8 ">
            Movies
          </h5>
        </div>
        <div className='container mx-auto space-y-2 content-center pt-6 gap-2 grid lg:grid-cols-3  xl:grid-cols-3 2xl:grid-cols-4
                      md:grid-cols-2 sm:grid-cols-2'>

          {status === "initial" ? (
            <h1 className="font-bold text-orange-400">Loading Movies</h1>
          ) : movieFiltered == "" ? (
            movies.map((movie) => <Card movie={movie} key={movie.id} />)
          ) : (
            movieFiltered.map((movie) => <Card movie={movie} key={movie.id} />)
          )}
        </div>
      </div>
    </>
  );
};

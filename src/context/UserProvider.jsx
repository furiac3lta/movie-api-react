import React, { useState, useEffect } from "react";
import { userContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  const urlBase = "https://api.themoviedb.org/3/movie/popular?api_key=9e8e90b841ade91bb4bf4c066ed7c16a&language=es-ES&page=1";
  const [status, setStatus] = useState("initial");
  const [movieFiltered, setMovieFiltered] = useState([]);
  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favoritesOnStorage = localStorage.getItem('favorites') ?  JSON.parse(localStorage.getItem('favorites')) : [];
    setFavorites(favoritesOnStorage);


    allItems();
  }, []);

  const allItems = async () => {
    try {
      const getData = await fetch(urlBase).then((response) => response.json());
      setStatus("done");
      setData(getData.results);
    } catch (err) {
      console.log("error");
    }
  };

  const removeFavorite = (id) => {
    const newArrayFavorites = favorites.filter( movie => movie.id !== id);
    setFavorites(newArrayFavorites);
    localStorage.setItem('favorites',JSON.stringify(newArrayFavorites));
  }

  const addFavorite = (movie) => {

    if( favorites.some(el => el.id === movie.id) ){ //la pelicula ya esta agregada
      removeFavorite(movie.id);
    } else{ // la pelicula no esta agregada
      setFavorites([...favorites, movie ]);
      localStorage.setItem('favorites',JSON.stringify([...favorites, movie ]));
    }

  }



  return (
    <userContext.Provider
      value={{ status, data, movieFiltered, setMovieFiltered, favorites, addFavorite, removeFavorite }}
    >
      {children}
    </userContext.Provider>
  );
};

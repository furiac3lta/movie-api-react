import React, {useContext, useEffect , useState} from 'react'
import { MdFavorite } from "react-icons/md";
import { userContext } from '../context/UserContext';

export const FavButton = ({movie}) => {


    const { addFavorite, favorites } = useContext(userContext);
    const [isFavorite, setIsFavorite] = useState(false);

    const verifierFavorite = () => {
        const result = favorites.some( el => el.id === movie.id  );
        setIsFavorite(result);
    }

    useEffect(()=>{

        verifierFavorite();

    },[favorites]);

  return (
    <div 
        className={`text-2xl ${ isFavorite ? 'text-red-500' : 'text-gray-400'} cursor-pointer hover:shadow`}
        onClick={()=>{
            addFavorite(movie);
        }}
    >
        <MdFavorite />
    </div>
  )
}


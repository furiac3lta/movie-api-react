import axios from "axios";

const myMovie = async (id, state) => {
    const heroReq = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=9e8e90b841ade91bb4bf4c066ed7c16a&language=es-ES`)
    //https://api.themoviedb.org/3/movie/${id}?api_key=9e8e90b841ade91bb4bf4c066ed7c16a
    console.log(heroReq.data)
    const h = heroReq.data
    state(h)
}

export { myMovie }
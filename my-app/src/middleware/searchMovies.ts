import callApi from "./callApi";

export const searchMovies = async (movieName:string) => {
    const query = movieName.replace(/\s/g,"%20")
    const baseURl = `https://api.themoviedb.org/3/search/movie?api_key=ac1ccaf7cc1c015abd2c2cddca72cb16&query=${query}`
    return await callApi(baseURl)
}


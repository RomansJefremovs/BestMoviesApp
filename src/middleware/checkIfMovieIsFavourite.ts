import {getAllFavouriteMoviesById} from "./getAllFavouriteMoviesByID";

export const checkIfMovieIsFavourite = async (movieID:number) => {
    const userID = localStorage.getItem("userID")
    try {
        if (userID !== null){
            const favourites = await getAllFavouriteMoviesById(parseInt(userID))
            return favourites.some(movie => movie.id === movieID)
        }
    }catch (e) {
        return `Error ${e}`
    }
}
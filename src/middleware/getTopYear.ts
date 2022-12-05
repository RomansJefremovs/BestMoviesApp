import callApi from "./callApi";
import {SearchMovie} from "../models/SearchMovie";

export const getTopYear = async (year:"70"|"80"|"90"|"00"|"10"):Promise<SearchMovie> => {
    const UrlTopRated70s = "https://api.themoviedb.org/3/discover/movie?api_key=ac1ccaf7cc1c015abd2c2cddca72cb16&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&primary_release_date.gte=1970-01-01&primary_release_date.lte=1979-12-31&vote_count.gte=300&vote_average.lte=10&with_runtime.gte=0&with_runtime.lte=400&page=1"
    const UrlTopRated80s = "https://api.themoviedb.org/3/discover/movie?api_key=ac1ccaf7cc1c015abd2c2cddca72cb16&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&primary_release_date.gte=1980-01-01&primary_release_date.lte=1989-12-31&vote_count.gte=300&vote_average.lte=10&with_runtime.gte=0&with_runtime.lte=400&page=1"
    const UrlTopRated90s = "https://api.themoviedb.org/3/discover/movie?api_key=ac1ccaf7cc1c015abd2c2cddca72cb16&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31&vote_count.gte=300&vote_average.lte=10&with_runtime.gte=0&with_runtime.lte=400&page=1"
    const UrlTopRated20002009 = "https://api.themoviedb.org/3/discover/movie?api_key=ac1ccaf7cc1c015abd2c2cddca72cb16&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&primary_release_date.gte=2000-01-01&primary_release_date.lte=2009-12-31&vote_count.gte=300&vote_average.lte=10&with_runtime.gte=0&with_runtime.lte=400&page=1";
    const UrlTopRated20102019 = "https://api.themoviedb.org/3/discover/movie?api_key=ac1ccaf7cc1c015abd2c2cddca72cb16&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&primary_release_date.gte=2010-01-01&primary_release_date.lte=2019-12-31&vote_count.gte=300&vote_average.lte=10&with_runtime.gte=0&with_runtime.lte=400&page=1";
    const url =  ()=>{
        if (year == "70"){
            return UrlTopRated70s
        }else if (year == "80"){
            return UrlTopRated80s
        }else if (year == "90"){
            return UrlTopRated90s
        }else if (year == "00"){
            return UrlTopRated20002009
        }else if (year == "10"){
            return UrlTopRated20102019
        }else{
            return ''
        }
    }
    try {
        return await callApi(url(),"GET")
    }catch (e) {
        return {page: 0, results: [], total_pages: 0, total_results: 0}
    }
}
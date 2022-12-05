import callApi from "./callApi";
import {MultiSearch} from "../models/MultiSearch";

export const multiSearch = async (message:string,page:number):Promise<MultiSearch> =>{
    const query = message.replace(/\s/g,"%20").toLowerCase()
    const url = `https://api.themoviedb.org/3/search/multi?api_key=ac1ccaf7cc1c015abd2c2cddca72cb16&language=en-US&query=${query}&page=${page}&include_adult=false`
    try {
        return await callApi(url,"GET")
    }catch (e) {
        return {page: 0, results: [], total_pages: 0, total_results: 0}
    }
}
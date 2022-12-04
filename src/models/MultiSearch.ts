import {Movie} from "./Movie";


export interface SMovie{
    poster_path: string | null
    adult: boolean
    overview: string
    release_date: string
    genre_ids: number[]
    id:number
    media_type:string
    original_title:string
    original_language:string
    title: string
    backdrop_path: string
    popularity:  number
    vote_count: number
    video: boolean
    vote_average:  number
}
export interface SPerson{
    profile_path:string | null,
    adult: boolean,
    id: number,
    media_type:string
    known_for: Movie[]|null,
    name:string,
    popularity: number
}
export interface Tv{
    poster_path:string | null
    popularity:number
    id:number
    overview:string
    backdrop_path:string | null
    vote_average:number
    media_type:string
    first_air_date:string
    origin_country:number[]
    genre_ids:number[]
    original_language:string
    vote_count:number
    name:string
    original_name:string
}
export interface MultiSearch{
    page: number
    results: (SMovie|SPerson|Tv)[]
    total_pages:number
    total_results:number
}
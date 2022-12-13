export interface Movie {
    poster_path: string | null
    adult: boolean
    overview: string
    release_date: string
    media_type?:"movie"|"tv"
    genre_ids: number[]
    id:number
    original_title:string
    original_language:string
    title: string
    backdrop_path: string
    popularity:  number
    vote_count: number
    video: boolean
    vote_average:  number
    initialLoad?:(userId: number) => Promise<void>
}
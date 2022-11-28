export interface Movie {
  poster_path: string
  adult: boolean
  overview: string
  release_date: string
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
}
export interface SearchMovie{
  page: number
  results: Movie[]
  total_pages:number
  total_results:number


}
export interface sMovie {
  adult?: boolean,
  backdrop_path?: string,
  genre_ids?: number[],
  id?: number,
  original_language?: string,
  original_title?: string,
  overview?: string,
  popularity?: number,
  poster_path?: string,
  release_date?: string,
  title?: string,
  video?: boolean,
  vote_average?: number,
  vote_count?: number,
  media_type?:  string,
  first_air_date?: string,
  origin_country?:string[],
  name?:string
  original_name?:string
}

export interface MovieBox {
  id: number,
  poster_path: string,
  title: string,
  vote_average: number,
}

export interface Movies {
  movies:Movie[]
}

export interface User{
  username:string,
  password:string
}

export interface Cast{
  adult: boolean
  gender:  number | null
  id: number,
  known_for_department: string,
  name: string,
  original_name: string
  popularity:  number
  profile_path:  string | null
  cast_id: number,
  character: string,
  credit_id: string,
  order: number
}

export interface Crew{
  adult:boolean
  gender: number | null
  id:number,
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string | null
  credit_id: string
  department: string
  job: string
}

export interface Credits{
  id: number,
  cast:Cast[],
  crew: Crew[]
}

export interface Result{
  profile_path:string | null,
  adult: boolean,
  id: number,
  known_for: Movie[]|null,
  name:string,
  popularity: number
}

export interface SearchPerson{
  page:number,
  results: Result[],
  total_results:number,
  total_pages:number,
}

export interface PersonByID{
  birthday: string | null,
  known_for_department: string,
  deathday: null | string,
  id:  number,
  name: string,
  also_known_as: String[],
  gender: number,
  biography: string,
  popularity: number,
  place_of_birth: string | null,
  profile_path:  string | null,
  adult:  boolean,
  imdb_id: string
  homepage: null | string
}

export interface Person{
  birthday: string | null,
  known_for_department: string,
  deathday: null | string,
  id:  number,
  name: string,
  also_known_as: String[],
  gender: number,
  biography: string,
  popularity: number,
  place_of_birth: string | null,
  profile_path:  string | null,
  adult:  boolean,
  imdb_id: string,
  homepage: null | string,
  known_for: Movie[]|{profile_path: string, adult: boolean, id: number, known_for: {}[], name: string, popularity: number}
}
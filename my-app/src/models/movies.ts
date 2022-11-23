export interface Movie {
  adult: boolean,
  backdrop_path: string,
  genre_ids: number[],
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
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
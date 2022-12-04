import {Movie} from "./Movie";

export interface Result{
    profile_path:string | null,
    adult: boolean,
    id: number,
    known_for: Movie[]|null,
    name:string,
    popularity: number
}
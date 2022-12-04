import {Movies} from "../models/Movies";
import {Movie} from "../models/Movie";
import {MovieBox} from "../models/MovieBox";

export interface handleFavouritesProps{
    initialLoad:(userId: number) => Promise<void>
}


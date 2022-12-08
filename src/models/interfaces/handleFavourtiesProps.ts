import {Movies} from "../Movies";
import {Movie} from "../Movie";
import {MovieBox} from "../MovieBox";

export interface handleFavouritesProps{
    initialLoad:(userId: number) => Promise<void>
}


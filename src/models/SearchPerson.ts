import {Result} from "./Result";

export interface SearchPerson{
    page:number,
    results: Result[],
    total_results:number,
    total_pages:number,
}
export interface MovieBox {
    id: number,
    poster_path: string | null,
    title: string,
    vote_average: number,
    initialLoad?:(userId: number) => Promise<void>
}
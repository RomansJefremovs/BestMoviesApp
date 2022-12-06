import {getMovieByID} from "../middleware/getMovieByID";

const testObject ={"adult":false,"backdrop_path":"/gwe1k68ZFxEo8ZqqR73oobiQwK4.jpg","belongs_to_collection":null,"budget":1000000,"genres":[{"id":12,"name":"Adventure"},{"id":10749,"name":"Romance"}],"homepage":"","id":488,"imdb_id":"tt0043265","original_language":"en","original_title":"The African Queen","overview":"At the start of the First World War, in the middle of Africa’s nowhere, a gin soaked riverboat captain is persuaded by a strong-willed missionary to go down river and face-off a German warship.","popularity":16.33,"poster_path":"/2Ypg0KhQfFYWILelvHGtSHHR0dk.jpg","production_companies":[{"id":60,"logo_path":"/1SEj4nyG3JPBSKBbFhtdcHRaIF9.png","name":"United Artists","origin_country":"US"},{"id":262,"logo_path":null,"name":"Independent Film Distributors","origin_country":""},{"id":3632,"logo_path":null,"name":"Romulus Films","origin_country":""}],"production_countries":[{"iso_3166_1":"GB","name":"United Kingdom"},{"iso_3166_1":"US","name":"United States of America"}],"release_date":"1952-01-07","revenue":10750000,"runtime":105,"spoken_languages":[{"english_name":"English","iso_639_1":"en","name":"English"},{"english_name":"Swahili","iso_639_1":"sw","name":"Kiswahili"}],"status":"Released","tagline":"The greatest adventure a man ever lived… with a woman!","title":"The African Queen","video":false,"vote_average":7.346,"vote_count":749}
test('Successful api call, returns an object of type Movie',async ()=>{
    const response = await getMovieByID(488)
    expect(response).toEqual(testObject)
})
test('Unsuccessful api call, returns an object of type Movie',async ()=>{
    const response = await getMovieByID(0)
    expect(response).toEqual(404)
})
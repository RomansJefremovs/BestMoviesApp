export const addMovieToList = async (user_list_id:string,movie_id:number,userID:string) => {
    const url = `https://cloudcomputingapi.azurewebsites.net/Movies/list/add/${user_list_id}/${movie_id}`
    try {
        const temp = await fetch(url,{
            method:"POST",
            body: userID,
            headers:{
                "Content-Type":"application/json"
            }
        })
        return temp.text()
    }catch (e) {
        return `Error ${e}`
    }
}
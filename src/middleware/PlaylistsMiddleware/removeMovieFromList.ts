export const removeMovieFromList = async (user_list_id:number,movie_id:number,userID:string) => {
    const url = `https://cloudcomputingapi.azurewebsites.net/Movies/list/remove/${user_list_id}/${movie_id}`
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
        console.log(e)
        return "Error"
    }
}
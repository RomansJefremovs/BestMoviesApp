export const editPlaylist = async (new_user_list_name:string,user_list_id:number,userID:string,privacy:boolean) => {
    const url = `https://cloudcomputingapi.azurewebsites.net/Movies/list/edit/${new_user_list_name}/${privacy}`
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
        return "Error"
    }
}
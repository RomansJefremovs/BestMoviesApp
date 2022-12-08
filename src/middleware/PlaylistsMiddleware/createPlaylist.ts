export const createPlaylist = async (user_list_name:string,public_list:boolean,userID:string) => {
    const url = `https://cloudcomputingapi.azurewebsites.net/Movies/list/create/${user_list_name}/${public_list}`
   try {
       const temp = await fetch(url,{
           method:"POST",
           body: userID,
           headers:{
               "Content-Type":"application/json"
           }
       })
       return await temp.text()
   }catch (e) {
       console.log(e)
       return `Error ${e}`
   }
}
export const register = async (username:string, password:string) => {
    const url = `https://cloudcomputingapi.azurewebsites.net/User/create/${username}`
    try {
        const temp = await fetch(url,{
            method:"POST",
            body:`"${password}"`,
            headers:{
                "Content-Type": 'application/json'
            }
        })
        return temp.text()
    }catch (e){
        return `Error ${e}`
    }
}
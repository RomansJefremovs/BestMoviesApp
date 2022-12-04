
export const login = async (username:string, password:string) => {
    const url = `https://cloudcomputingapi.azurewebsites.net/User/login/${username}`
    try {
        const temp = await fetch(url,{
            method:"POST",
            body:`"${password}"`,
            headers:{
                "Content-Type": 'application/json'
            }
        })
        console.log(temp)
       return temp.json()
    }catch (e){
        return e
    }
}
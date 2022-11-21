const callApi = async (baseURL:string) => {
   try {
       const res = await fetch(baseURL)
       const temp = res.ok ? await res.json() : false
       return await temp
   }catch (e){
       return  "Error"
   }
}

export default callApi


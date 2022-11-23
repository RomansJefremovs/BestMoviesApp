const callApi = async (baseURL:string,method?:"GET"|"POST") => {
   try {
       if (method != undefined && method == "POST"){
           const temp = await fetch(baseURL, { method: "POST" });
           return temp.text();
       }else {
           const res = await fetch(baseURL)
           const temp = res.ok ? await res.json() : res.status
           return await temp
       }

   }catch (e){
       return  "Error"
   }
}
export default callApi


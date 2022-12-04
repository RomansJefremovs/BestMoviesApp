export const useDebounce = (func:any, milliseconds:number):()=>void =>{
    let timeout: string | number | NodeJS.Timeout | null | undefined;
    return (...args) => {
        const context = this
        if (timeout) clearTimeout(timeout)
        timeout = setTimeout(()=>{
            timeout = null
            func.apply(context,args)
        },milliseconds)
    }
}


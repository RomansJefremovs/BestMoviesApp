export const getUserID = ():string => {
    const temp = localStorage.getItem("userID")
    return temp != null ? temp : "Not Found"
}
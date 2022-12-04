import {sha256} from "js-sha256";

export const passwordHash = (password:string) => {
    return sha256(password)
}
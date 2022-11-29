import {Link as LinkRouter} from "react-router-dom";
import {Button} from "@mui/material";
interface NavLink{
    url:string,
    title:string,
}
const NavLink = ({url,title}:NavLink)=>{
    return(
        <LinkRouter to={url}>
            <Button
                key={title}
                sx={{ color: "#fff" }}
            >
                {title}
            </Button>
        </LinkRouter>
    )
}
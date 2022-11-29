import {Box, Button, Grid, IconButton, InputBase} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {Link as LinkRouter} from "react-router-dom";
import {ChangeEvent} from "react";
interface SearchField{
    handleMessageChange:(e: ChangeEvent<HTMLInputElement>) => void
    handleSearchDrawerToggle:()=>void
}
const SearchField = ({handleMessageChange, handleSearchDrawerToggle}:SearchField)=>{
    return(
        <Grid container justifyContent="flex-end" alignItems="center">
            <Grid item>
                <InputBase
                    sx={{
                        display: { xs: "none", md: "block" },
                        ml: 1,
                        flex: 1,
                        color: "#fff",
                        fontSize: "0.9em",
                        borderRadius: "5px",
                        backgroundColor: "rgba(255, 255, 255, 0.200)",
                        padding: "4px 4px 4px 14px",
                    }}
                    placeholder="Search..."
                    inputProps={{ "aria-label": "search" }}
                    onChange={handleMessageChange}
                />

                <IconButton
                    type="button"
                    onClick={handleSearchDrawerToggle}
                    sx={{ p: "10px", display: { xs: "block", md: "none" } }}
                    aria-label="search"
                >
                    <SearchIcon sx={{ color: "#fff" }} />
                </IconButton>
            </Grid>
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
                <LinkRouter to={`/sign-in`}>
                    <Button sx={{ color: "#fff" }}>Sign In</Button>
                </LinkRouter>
            </Box>
        </Grid>
    )
}

export default SearchField
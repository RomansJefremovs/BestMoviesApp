import {Link as LinkRouter} from "react-router-dom";
import {Box, Button, CardMedia, Grid, Typography} from "@mui/material";
import {MovieBox} from "../models/movies";
import StarIcon from "@mui/icons-material/Star";

const MoviePosterBox = (movie:MovieBox) => {
    const poster =  `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    return(
        <Box gridColumn="span 3" sx={{ width: "100%" }}>
            <LinkRouter to={`/movies/${movie.id}`} key={movie.id}>
                <CardMedia
                    component="img"
                    className="poster"
                    src={poster}
                    sx={{
                        display: { xs: "block" },
                    }}
                />
            </LinkRouter>
            <Box sx={{ display: { xs: "block" } }}>
                <Typography
                    variant="h5"
                    sx={{
                        padding: "20px 0 0 5px",
                        fontSize: "1.1em",
                        fontWeight: "bold",
                    }}
                >
                    {movie.title}
                </Typography>
            </Box>

            <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
            >
                <Box
                    className="ratings"
                    sx={{ marginTop: "-33px", marginBottom: "0.8em" }}
                >
                    <StarIcon sx={{ color: "#FFE600" }} />

                    <Typography
                        variant="h5"
                        sx={{ fontSize: "16px", marginTop: "11px" }}
                    >
                        {movie.vote_average}
                    </Typography>
                </Box>
            </Grid>

            <Box
                className="buttons"
                sx={{ gap: 1, display: { xs: "block" } }}
            >
                <LinkRouter to={`/movies/${movie.id}`} key={movie.id}>
                    <Button id="watch-now-button">
                        <Typography
                            variant="h5"
                            sx={{
                                fontSize: "15px",
                                fontWeight: "600",
                                padding: "5px 10px 5px 10px",
                            }}
                        >
                            Watch Now
                        </Typography>
                    </Button>
                </LinkRouter>

                <Button id="favorites-button">
                    <Typography
                        variant="h5"
                        sx={{
                            fontSize: "15px",
                            fontWeight: "600",
                            padding: "5px 10px 5px 10px",
                        }}
                    >
                        + Favorites
                    </Typography>
                </Button>
            </Box>
        </Box>
    )
}

export default MoviePosterBox
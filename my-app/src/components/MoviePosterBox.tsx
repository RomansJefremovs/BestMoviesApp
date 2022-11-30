import {Link as LinkRouter} from "react-router-dom";
import {Box, Button, CardMedia, Grid, Typography} from "@mui/material";
import {MovieBox} from "../models/MovieBox";
import StarIcon from "@mui/icons-material/Star";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { useState } from "react";
import {getUserID} from "../middleware/getUserID";
import {addToFavourites} from "../middleware/addToFavourites";
import {removeFromFavourites} from "../middleware/removeFromFavourites";
import NotFound from '../assets/error-404.png'

const MoviePosterBox = (movie: MovieBox) => {
  const poster = movie.poster_path != null ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`: NotFound;
  const userId = getUserID()
  const [display, setDisplay] = useState(false);
  const [fav, setFav] = useState<"+"|"-">("+")
    const handleFavourites =  async () => {
        if (fav == "+" && userId != "Not Found"){
            await addToFavourites(parseInt(userId),movie.id)
            setFav("-")
        }else if(userId == "Not Found"){
            //redirect
            alert("Login please")
            console.log("redirecting")
            setFav("+")
        }else{
            await removeFromFavourites(parseInt(userId),movie.id)
            setFav("+")
        }
    }
  return (
    <Box gridColumn="span 3" sx={{
        width: "100%",
    }}>
      <LinkRouter to={`/movies/${movie.id}`} key={movie.id}>
        <CardMedia
          component="img"
          className="poster"
          src={poster}
          sx={{
            borderRadius: "5px",
            transition: "0.5s",
            "&:hover": {
              filter: "brightness(70%)",
              transform: "scale(1.02)",
              transition: "all 0.5s",
            },
          }}
          onMouseEnter={() => setDisplay(true)}
          onMouseLeave={() => setDisplay(false)}
        />
        {display && (
          <PlayCircleOutlineIcon
            sx={{
              fontSize: "40px",
              position: "relative",
              marginTop: "-2em",
              float: "right",
              padding: "20px",
              color: "#fff",
            }}
          />
        )}
      </LinkRouter>

      <Grid
        xs={12}
        container
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexDirection="row"
        sx={{paddingTop:"12px"}}
      >
        <LinkRouter to={`/movies/${movie.id}`} key={movie.id}>
          <Grid>
            <Typography
              variant="h5"
              noWrap
              sx={{
                width: {
                  xs: "auto",
                  sm: "8em",
                  md: "11em",
                },
                fontSize: "1.1em",
                fontWeight: "bold",
              }}
            >
              {movie.title}
            </Typography>
          </Grid>
        </LinkRouter>

        <Box
          className="ratings"
          display="flex"
          flexDirection="row"
          justifyContent="flex-end"
          sx={{
            position: "relative",
            float: "right",
          }}
        >
          <StarIcon
            sx={{ color: "#FFE600" }}
          />

          <Typography variant="h5" sx={{ fontSize: "16px", padding:"2px 0 0 2px"}}>
            {movie.vote_average}
          </Typography>
        </Box>

        <Grid
          container
          className="buttons"
          justifyContent="center"
          direction="row"
          gap={2}
          sx={{ margin: "10px 0 10px 0" }}
        >
          <LinkRouter to={`/movies/${movie.id}`} key={movie.id}>
            <Button id="watch-now-button" sx={{ borderRadius: "30px" }}>
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

          <Button
              id="favorites-button"
              sx={{ borderRadius: "30px" }}
              onClick={handleFavourites}
          >
            <Typography
              variant="h5"
              sx={{
                fontSize: "15px",
                fontWeight: "600",
                padding: "5px 10px 5px 10px",
              }}
            >
                {`${fav} Favourites`}
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MoviePosterBox;

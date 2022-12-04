import NotFound from "../assets/images/NotFoundPerson.png";
import { Box, CardMedia, Grid, Typography } from "@mui/material";
import { Link as LinkRouter } from "react-router-dom";
import { PersonBox } from "../models/PersonBox";

const PersonPosterBox = ({
  id,
  profile_path,
  name,
  known_for_department,
}: PersonBox) => {
  const poster =
    profile_path != null
      ? `https://image.tmdb.org/t/p/w500${profile_path}`
      : NotFound;

  return (
    <Box
      gridColumn="span 3"
      sx={{
        width: "100%",
      }}
    >
      <LinkRouter to={`/person?personId=${id}`} key={id}>
        <CardMedia
          component="img"
          className="poster"
          src={poster}
          sx={{
            borderRadius: "5px",
            transition: "0.5s",
            objectFit: "cover",
            objectPosition: "center",
            height: { xs: "15em", sm: "20em", md: "25em" },
            "&:hover": {
              transform: "scale(1.02)",
              transition: "all 0.5s",
            },
          }}
        />
      </LinkRouter>

      <Grid
        xs={12}
        container
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexDirection="row"
        sx={{ paddingTop: "12px" }}
      >
        <LinkRouter to={`/person?personId=${id}`} key={id}>
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
              {name}
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
          <Typography
            variant="h5"
            sx={{ fontSize: "16px", padding: "2px 0 0 2px" }}
          >
            {known_for_department}
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
};

export default PersonPosterBox;

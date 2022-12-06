import { Container, Grid, Typography } from "@mui/material";
import Image from "mui-image";
import { Person } from "../models/Person";
import MoviePosterBox from "./MoviePosterBox";
import { getPerson } from "../middleware/getPerson";
import { useEffect, useState } from "react";
import NotFound from "../assets/images/NotFoundPerson.png";
import { useSearchParams } from "react-router-dom";
import Loading from "./Loading";

const PersonPage = () => {
  const [param] = useSearchParams();
  const personId = param.get("personId");
  const [person, setPerson] = useState<Person>();

  const [loading, setLoading] = useState(false);

  const initLoad = async () => {
    setLoading(true);
    if (personId != null) {
      setLoading(false);
      setPerson(await getPerson(parseInt(personId)));
    } else {
      setPerson(undefined);
    }
  };

  useEffect(() => {
    initLoad();
  },[]);

  const url =
    person?.profile_path != null
      ? `https://image.tmdb.org/t/p/w500${person.profile_path}`
      : NotFound;

  return (
    <Container sx={{ marginTop: "2em", minHeight: "40em" }}>
      {
      loading ? (
        <Loading />
      ) : 
      person !== undefined ? (
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "auto",
          }}
        >
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
              height: "30rem",
            }}
          >
            <Grid
              display="flex"
              justifyContent="flex-start"
              flexDirection="row"
              alignItems="center"
            >
              <Image
                src={url}
                style={{ height: "30em", width: "20em", borderRadius: "10px" }}
              />
            </Grid>

            <Container sx={{ width: { md: "35rem" } }}>
              <Grid
                display="flex"
                justifyContent="center"
                flexDirection="row"
                alignItems="center"
              >
                <Typography
                  color="#fff"
                  sx={{
                    padding: "35px 0 35px 0",
                    fontSize: "50px",
                    float: "right",
                    fontFamily: "Cooper Hewitt Semibold",
                  }}
                >
                  {person.name}
                </Typography>
              </Grid>

              {person.birthday !== null ? (
                <Grid
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{
                    padding: "5px",
                  }}
                >
                  <Typography
                    color="#fff"
                    sx={{ fontSize: "15px", fontFamily: "Cooper Hewitt Book" }}
                  >{`Birthday ${
                    person.deathday != null ? "and deathday" : ""
                  }:`}</Typography>
                  <Typography
                    color="#fff"
                    sx={{
                      float: "right",
                      fontSize: "20px",
                      fontFamily: "Cooper Hewitt Medium",
                    }}
                  >{`${person.birthday} ${
                    person.deathday != null ? person.deathday : ""
                  }`}</Typography>
                </Grid>
              ) : (
                " "
              )}
              {person.known_for_department !== null ? (
                <Grid
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{
                    padding: "5px",
                  }}
                >
                  <Typography
                    color="#fff"
                    sx={{ fontSize: "15px", fontFamily: "Cooper Hewitt Book" }}
                  >
                    Role:
                  </Typography>
                  <Typography
                    color="#fff"
                    sx={{
                      float: "right",
                      fontSize: "20px",
                      fontFamily: "Cooper Hewitt Medium",
                    }}
                  >
                    {person.known_for_department}
                  </Typography>
                </Grid>
              ) : (
                " "
              )}
              {person.popularity !== null ? (
                <Grid
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{
                    padding: "5px",
                  }}
                >
                  <Typography
                    color="#fff"
                    sx={{ fontSize: "15px", fontFamily: "Cooper Hewitt Book" }}
                  >
                    Popularity:
                  </Typography>
                  <Typography
                    sx={{
                      color: "#fff",
                      float: "right",
                      fontSize: "20px",
                      fontFamily: "Cooper Hewitt Medium",
                    }}
                  >
                    {person.popularity}
                  </Typography>
                </Grid>
              ) : (
                " "
              )}
            </Container>
          </Container>
          <Typography
            color="#fff"
            sx={{
              margin: "auto",
              padding: "40px 20px 40px 20px",
              marginTop: { xs: "20em", sm: "15em", md: 0 },
            }}
          >
            {person.biography}
          </Typography>
          <Grid
            className="reveal"
            sx={{ marginBottom: "2ems" }}
            display="grid"
            gridTemplateColumns={{
              xs: "repeat(3, 1fr)",
              sm: "repeat(6, 1fr)",
              md: "repeat(9, 1fr)",
              lg: "repeat(12, 1fr)",
            }}
            gap={3}
          >
            {person.known_for !== undefined && person.known_for !== null
              ? person.known_for.map((item) => {
                  return (
                    <MoviePosterBox
                      id={item.id}
                      poster_path={item.poster_path}
                      title={item.title}
                      vote_average={item.vote_average}
                    />
                  );
                })
              : ""}
          </Grid>
        </Container>
      ) : (
        <Typography
          color="#fff"
          className="reveal"
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          Oops! <br></br> Nothing's here.
        </Typography>
      )}
    </Container>
  );
};

export default PersonPage;

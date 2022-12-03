import { useSearchParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { multiSearch } from "../middleware/multiSearch";
import { SMovie, SPerson, Tv } from "../models/MultiSearch";
import MultiSearchList from "../components/MultiSearchList";
import {
  Container,
  Grid,
  Box,
  Typography,
  Divider,
  Pagination,
  PaginationItem,
} from "@mui/material";
import { pluralizeUnlessSingle } from "../common/utils";
import notFound from "../assets/images/search.png";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

function Search() {

  const [searchTerm] = useSearchParams();
  const searchValue = searchTerm.get("message");
  const pageNumber = searchTerm.get("page")
    const [result, setResult] = useState<(SMovie | SPerson | Tv)[]>( []);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(parseInt(pageNumber !== null ? pageNumber: "1"));
  const handleMultiSearch = useCallback(async () => {
    setLoading(true);
    if (searchValue != null) {
      const temp = await multiSearch(searchValue,currentPage);
      console.log(temp.results);
      if (temp.results.length !== 0) {
        setLoading(false);
        setResult(
          temp.results.filter((obj) => {
            return obj.media_type !== "tv";
          })
        );
        setTotal(temp.total_pages);
        console.log(temp.results.length);
      } else {
      }
    } else {
      return null;
    }
  }, [searchValue, currentPage]);

  const onChange = (e: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    handleMultiSearch();
  }, [currentPage]);

  useEffect(() => {
    document.title = "Search | BestMovies";
  });

  return (
    <>
      <Container
        className="content"
        sx={{
          display: { xs: "block" },
          borderRadius: "30px",
          backgroundColor: "#000",
          marginTop: "2.5em",
          minHeight: "40em",
        }}
      >
        <Grid container>
          <Box
            sx={{
              display: { xs: "flex" },
              width: "100%",
              height: "auto",
            }}
          >
            {result ? (
              <Typography
                variant="h2"
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  textTransform: "none",
                  marginLeft: "2.4em",
                  fontSize: "1.5em",
                  fontWeight: "bold",
                }}
              >
                {total} Search {pluralizeUnlessSingle("Result", total)}:{" "}
                {searchValue ? `"${searchValue}"` : null}{" "}
              </Typography>
            ) : (
              <></>
            )}
            <Divider />
          </Box>
        </Grid>

        <Grid container justifyContent="center">
          <Divider
            sx={{
              backgroundColor: "#404040",
              width: "5em",
              height: "1px",
              marginTop: "3em",
            }}
          />
        </Grid>

        <Grid container sx={{ padding: "2em" }}>
          {loading ? (
            <Loading />
          ) : result.length != 0 ? (
            <>
              <Grid
                container
                display="grid"
                gridTemplateColumns={{
                  xs: "repeat(3, 1fr)",
                  sm: "repeat(6, 1fr)",
                  md: "repeat(9, 1fr)",
                  lg: "repeat(12, 1fr)",
                }}
                gap={3}
              >
                <MultiSearchList array={result} />
              </Grid>
              <Grid
                container
                xs={11}
                md={12}
                display="flex"
                justifyContent="flex-end"
              >
                <Pagination
                  sx={{
                    padding: "30px 0 0 0",
                    "& .MuiPaginationItem-root": {
                      color: "#fff",
                    },
                    "& .MuiPaginationItem-root.Mui-selected": {
                      color: "#fff",
                      backgroundColor: "#e70800",
                    },
                    "& .MuiPaginationItem-root:hover": {
                      color: "#fff",
                      backgroundColor: "#e70800",
                    },
                  }}
                  color="primary"
                  page={currentPage}
                  onChange={onChange}
                  count={total}
                  shape="rounded"
                  renderItem={(item) => (
                    <PaginationItem
                      component={Link}
                      to={`/search${
                        item.page === 1 ? "" : `?message=${searchValue}&page=${item.page}`
                      }`}
                      {...item}
                    />
                  )}
                />
              </Grid>
            </>
          ) : (
            <>
              <Box
                sx={{
                  color: "#fff",
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  marginLeft: "30px",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <img
                  width="200em"
                  height="200em"
                  src={notFound}
                  alt="Not Found Image"
                  className="not-found-image"
                />
              </Box>

              <Typography
                variant="h2"
                sx={{
                  top: "30em",
                  fontSize: "1em",
                  textTransform: "none",
                }}
              >
                Oops! Nothing's here. <br></br> Try something else!
              </Typography>
            </>
          )}
        </Grid>
      </Container>
    </>
  );
}

export default Search;

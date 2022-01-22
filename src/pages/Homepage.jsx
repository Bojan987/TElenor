import { useTheme } from "@emotion/react";
import { Grid, useMediaQuery } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import CardMobile from "../components/CardMobile";
import Loader from "../components/Loader";
import RatingChart from "../components/RatingChart";

const Homepage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down(700));

  const [movies, setMovies] = useState({ movie1: "", movie2: "", movie3: "" });
  const [loading, setLoading] = useState(false);

  //fetch movies data
  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      const { data: movie1 } = await axios(`https://api.tvmaze.com/shows/1`);
      const { data: movie2 } = await axios(`https://api.tvmaze.com/shows/2`);
      const { data: movie3 } = await axios(`https://api.tvmaze.com/shows/3`);

      //set movies data to state
      setMovies({ movie1, movie2, movie3 });

      setTimeout(() => {
        setLoading(false);
      }, 500);
    };
    getMovies();
  }, []);

  return (
    <>
      {loading && <Loader />}
      {movies.movie1 && !loading && (
        <Grid
          container
          sx={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: "3rem",
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {!matches ? (
              <Card movies={movies} />
            ) : (
              <CardMobile movies={movies} />
            )}
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <RatingChart movies={movies} />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Homepage;

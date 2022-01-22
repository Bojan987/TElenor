import { useTheme } from "@emotion/react";
import { Grid, useMediaQuery } from "@mui/material";
import React from "react";
import Card from "../components/Card";
import CardMobile from "../components/CardMobile";
import RatingChart from "../components/RatingChart";

const Homepage = ({ movies }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down(700));

  return (
    <>
      {movies.movie1 && (
        <Grid
          container
          sx={{
            justifyContent: "center",
            alignItems: "center",
            height: "97vh",
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

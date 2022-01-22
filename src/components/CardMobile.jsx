import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import parse from "html-react-parser";
import { Grid } from "@mui/material";

const CardMobile = ({ movies }) => {
  const { movie1, movie2, movie3 } = movies;
  // movie card for mobile screens
  return (
    <Grid container spacing={2} sx={{ margin: "10px 0" }}>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Card sx={{ maxWidth: 345, background: "#bcecff" }}>
          <CardMedia
            component="img"
            height="500"
            image={movie1.image.original}
            alt="movie1.name"
          />
          <CardContent>
            <Typography variant="h4">{movie1.name}</Typography>
            {parse(movie1.summary)}
          </CardContent>
        </Card>
      </Grid>

      <Grid
        item
        xs={12}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Card sx={{ maxWidth: 345, background: "#bcecff" }}>
          <CardMedia
            component="img"
            height="500"
            image={movie2.image.original}
            alt="movie1.name"
          />
          <CardContent>
            <Typography variant="h4">{movie2.name}</Typography>
            {parse(movie2.summary)}
          </CardContent>
        </Card>
      </Grid>

      <Grid
        item
        xs={12}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Card sx={{ maxWidth: 345, background: "#bcecff" }}>
          <CardMedia
            component="img"
            height="500"
            image={movie3.image.original}
            alt="movie1.name"
          />
          <CardContent>
            <Typography variant="h4">{movie3.name}</Typography>
            {parse(movie3.summary)}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CardMobile;

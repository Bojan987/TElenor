import { Button, Chip, Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ScheduleSendSharpIcon from "@mui/icons-material/ScheduleSendSharp";
import { useNavigate } from "react-router-dom";
import EventIcon from "@mui/icons-material/Event";
import parse from "html-react-parser";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Rating from "../components/Rating";

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getMovie = async () => {
      setLoading(true);
      const { data } = await axios(`https://api.tvmaze.com/shows/${id}`);

      //set movie data to state
      setMovie(data);

      setTimeout(() => {
        setLoading(false);
      }, 500);
    };
    getMovie();
  }, [id]);
  return (
    <>
      {loading && <Loader />}
      {!loading && movie.name && (
        <>
          <Grid
            container
            sx={{
              backgroundImage: `url(${movie.image.original})`,
              position: "absolute",
              //   minWidth: "100vw",
              minHeight: "100vh",
              top: "0",
              left: "0",

              backgroundSize: "cover",
              backgroundPosition: "15% 15%",
              backgroundRepeat: "no-repeat",
              opacity: 0.1,
              zIndex: -1,
            }}
          />
          <Grid container>
            <Container>
              <Grid container>
                <Grid item xs={12} sx={{ marginTop: "2rem" }}>
                  <Typography variant="h1">{movie.name}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Rating
                    value={movie.rating.average}
                    text={`${movie.rating.average} (Average)`}
                  />
                </Grid>
                <Grid item sx={{ marginTop: "1rem" }} xs={12}>
                  {movie.genres.map((genre) => (
                    <Chip
                      key={genre}
                      label={genre}
                      color="secondary"
                      sx={{ margin: "5px" }}
                    />
                  ))}
                </Grid>
                <Grid item sx={{ marginTop: "3rem" }} xs={12} sm={8} md={4}>
                  {parse(movie.summary)}
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <AccessTimeIcon />
                  <Typography
                    variant="body1"
                    sx={{ display: "inline", marginLeft: "20px" }}
                  >
                    {movie.averageRuntime} mins
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "20px",
                  }}
                >
                  <ScheduleSendSharpIcon />
                  <Typography
                    variant="body1"
                    sx={{
                      display: "inline",
                      marginLeft: "20px",
                    }}
                  >
                    Schedule : {movie.schedule.time}h{" "}
                    {movie.schedule.days.join("/ ")}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "20px",
                  }}
                >
                  <EventIcon />
                  <Typography
                    variant="body1"
                    sx={{
                      display: "inline",
                      marginLeft: "20px",
                    }}
                  >
                    Premiered : {movie.ended}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "20px",
                  }}
                >
                  <CalendarTodayIcon />
                  <Typography
                    variant="body1"
                    sx={{
                      display: "inline",
                      marginLeft: "20px",
                    }}
                  >
                    Ended : {movie.ended}
                  </Typography>
                </Grid>
                <Grid item sx={{ marginTop: "20px" }} xs={1}>
                  <Button
                    fullWidth
                    variant="outlined"
                    color="primary"
                    onClick={() => navigate(-1)}
                  >
                    Back
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </>
      )}
    </>
  );
};

export default MoviePage;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./components/Loader";
import Homepage from "./pages/Homepage";

const App = () => {
  const [movies, setMovies] = useState({ movie1: "", movie2: "", movie3: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      const { data: movie1 } = await axios(`https://api.tvmaze.com/shows/1`);
      const { data: movie2 } = await axios(`https://api.tvmaze.com/shows/2`);
      const { data: movie3 } = await axios(`https://api.tvmaze.com/shows/3`);
      setMovies({ movie1, movie2, movie3 });

      
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    getMovies();
  }, []);
  return <>{loading ? <Loader /> : <Homepage movies={movies} />}</>;
};

export default App;

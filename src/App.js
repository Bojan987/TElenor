import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


import Homepage from "./pages/Homepage";
import MoviePage from "./pages/MoviePage";

const App = () => {

  return <>
  
  <Router>
    <Routes>
      <Route  path="/" element={<Homepage  />} />
      <Route  path="/:id" element={<MoviePage  />} />
    </Routes>
  </Router>

  
  </>;
};

export default App;

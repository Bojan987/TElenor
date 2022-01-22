import { styled, useMediaQuery } from "@mui/material";
import React from "react";
import { options, optionsMobile } from "../utils/chartOptions";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useTheme } from "@emotion/react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartStyled = styled("div")((props) => ({
  background: "#001120",
  width: props.size,
  height: props.height,
}));

const RatingChart = ({ movies }) => {
  const theme = useTheme();
  // media Queries for differente screen sizes
  const matches1500up = useMediaQuery(theme.breakpoints.up(1500));
  const matches1500 = useMediaQuery(theme.breakpoints.between(1200, 1500));
  const matches1200down = useMediaQuery(theme.breakpoints.down(1200));
  const matches450down = useMediaQuery(theme.breakpoints.down(450));

  //movies data
  const { movie1, movie2, movie3 } = movies;

  // change chart size according to screen size
  const getChartSize = () => {
    if (matches1500up) return "60%";
    if (matches1500) return "80%";
    if (matches1200down) return "100%";
  };

  // Axis labels
  const labels = [movie1.name, movie2.name, movie3.name];
  const ratings = [
    movie1?.rating.average,
    movie2?.rating.average,
    movie3?.rating.average,
  ];

  // chart data and stylings
  const data = {
    labels,
    datasets: [
      {
        label: "Ratings",
        backgroundColor: "rgba(42, 169, 219,0.3)",
        borderColor: "rgba(119, 249, 253, 0.8)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(10, 118, 151, 0.8)",
        hoverBorderColor: "rgba(119, 249, 253, 0.8)",
        pointHitRadius: 1,
        data: ratings,
      },
    ],
  };

  return (
    <ChartStyled
      size={getChartSize()}
      height={matches450down ? "400px" : "100%"}
    >
      {movie1 && (
        <Bar options={!matches450down ? options : optionsMobile} data={data} />
      )}
    </ChartStyled>
  );
};

export default RatingChart;

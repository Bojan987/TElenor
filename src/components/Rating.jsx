import React from "react";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { Grid, Typography } from "@mui/material";

const Rating = ({ value, color, text }) => {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
        <span>
          {value >= 1 ? (
            <StarIcon sx={{ color }} />
          ) : value >= 0.5 ? (
            <StarHalfIcon sx={{ color }} />
          ) : (
            <StarOutlineIcon sx={{ color }} />
          )}
        </span>
        <span>
          {value >= 2 ? (
            <StarIcon sx={{ color }} />
          ) : value >= 1.5 ? (
            <StarHalfIcon sx={{ color }} />
          ) : (
            <StarOutlineIcon sx={{ color }} />
          )}
        </span>
        <span>
          {value >= 3 ? (
            <StarIcon sx={{ color }} />
          ) : value >= 2.5 ? (
            <StarHalfIcon sx={{ color }} />
          ) : (
            <StarOutlineIcon sx={{ color }} />
          )}
        </span>
        <span>
          {value >= 4 ? (
            <StarIcon sx={{ color }} />
          ) : value >= 3.5 ? (
            <StarHalfIcon sx={{ color }} />
          ) : (
            <StarOutlineIcon sx={{ color }} />
          )}
        </span>
        <span>
          {value >= 5 ? (
            <StarIcon sx={{ color }} />
          ) : value >= 4.5 ? (
            <StarHalfIcon sx={{ color }} />
          ) : (
            <StarOutlineIcon sx={{ color }} />
          )}
        </span>
        <span>
          {value >= 6 ? (
            <StarIcon sx={{ color }} />
          ) : value >= 5.5 ? (
            <StarHalfIcon sx={{ color }} />
          ) : (
            <StarOutlineIcon sx={{ color }} />
          )}
        </span>
        <span>
          {value >= 7 ? (
            <StarIcon sx={{ color }} />
          ) : value >= 6.5 ? (
            <StarHalfIcon sx={{ color }} />
          ) : (
            <StarOutlineIcon sx={{ color }} />
          )}
        </span>
        <span>
          {value >= 8 ? (
            <StarIcon sx={{ color }} />
          ) : value >= 7.5 ? (
            <StarHalfIcon sx={{ color }} />
          ) : (
            <StarOutlineIcon sx={{ color }} />
          )}
        </span>
        <span>
          {value >= 9 ? (
            <StarIcon sx={{ color }} />
          ) : value >= 8.5 ? (
            <StarHalfIcon sx={{ color }} />
          ) : (
            <StarOutlineIcon sx={{ color }} />
          )}
        </span>
        <span>
          {value >= 10 ? (
            <StarIcon sx={{ color }} />
          ) : value >= 9.5 ? (
            <StarHalfIcon sx={{ color }} />
          ) : (
            <StarOutlineIcon sx={{ color }} />
          )}
        </span>
        <Typography
          variant="body2"
          sx={{
            display: "inline-block",
            marginLeft: "15px",
            marginBottom: "5px",
          }}
        >
          {text}
        </Typography>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
};

Rating.defaultProps = {
  color: "#f8e825",
};

export default Rating;

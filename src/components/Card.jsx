import { styled, Typography } from "@mui/material";
import React from "react";
import parse from "html-react-parser";

//shared styles for images
const imageStyles = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  transition: "0.5s",
  backgroundSize: "cover",
};

const ImageContainer = styled("div")(() => ({
  position: "relative",
  width: "650px",
  height: "800px",
  background: "#001120",
}));

// clipped image 1- change clipp to full container size on hover
const ClipImage1 = styled("div")((props) => ({
  ...imageStyles,
  background: `url(${props.url})`,
  clipPath: "polygon(0 0, 55% 0,20% 100%,0% 100%)",
  "&:hover": {
    clipPath: "polygon(0 0, 100% 0,100% 100%,0 100%)",
  },
}));

// clipped image  2- change clipp to full container size on hover
const ClipImage2 = styled("div")((props) => ({
  ...imageStyles,
  background: `url(${props.url})`,
  clipPath: "polygon(55% 0, 100% 0,45% 100%,20% 100%)",
}));

// clipped image 3- change clipp to full container size on hover
const ClipImage3 = styled("div")((props) => ({
  ...imageStyles,
  background: `url(${props.url})`,
  clipPath: "polygon(100% 0, 100% 0,100% 100%,45% 100%)",
}));

// image content wrapper - hiden if not hovered / opacity set to 0 and moved -100 bottom
const ImageContent = styled("div")({
  position: "absolute",
  bottom: -100,
  left: 0,
  width: "70%",
  padding: "20px",
  background: "#fff",
  transition: "0.5s",
  color: "#111",
  opacity: 0,
});

const Card = ({ movies }) => {
  const { movie1, movie2, movie3 } = movies;

  return (
    <ImageContainer
      className="container"
      sx={{
        "&:hover": {
          "& .clip": {
            clipPath: "polygon(100% 0, 100% 0,100% 100%,100% 100%)",
          },
        },
      }}
    >
      {movie1 && (
        <ClipImage1
          url={movie1.image.original}
          className="clip clip1"
          sx={{
            "&:hover.clip1": {
              clipPath: "polygon(0 0, 100% 0,100% 100%,0 100%)",
            },
            "&:hover.clip1 .content1": {
              bottom: 0,
              opacity: 0.8,
            },
          }}
        >
          <ImageContent className="content1">
            <Typography variant="h4">{movie1.name}</Typography>
            {parse(movie1.summary)}
          </ImageContent>
        </ClipImage1>
      )}
      {movie2 && (
        <ClipImage2
          url={movie2.image.original}
          className="clip clip2"
          sx={{
            "&:hover.clip2": {
              clipPath: "polygon(0 0, 100% 0,100% 100%,0 100%)",
            },
            "&:hover.clip2 .content2": {
              bottom: 0,
              opacity: 0.7,
            },
          }}
        >
          <ImageContent className="content2">
            <Typography variant="h4">{movie2.name}</Typography>
            {parse(movie2.summary)}
          </ImageContent>
        </ClipImage2>
      )}
      {movie3 && (
        <ClipImage3
          url={movie3.image.original}
          className="clip clip3"
          sx={{
            "&:hover.clip3": {
              clipPath: "polygon(0 0, 100% 0,100% 100%,0 100%)",
            },
            "&:hover.clip3 .content3": {
              bottom: 0,
              opacity: 0.7,
            },
          }}
        >
          <ImageContent className="content3">
            <Typography variant="h4">{movie3.name}</Typography>
            {parse(movie3.summary)}
          </ImageContent>
        </ClipImage3>
      )}
    </ImageContainer>
  );
};

export default Card;

import styled from "@emotion/styled";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Popover,
  Tooltip,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { RefObject, useRef, useState } from "react";

type Props = {
  views: number;
  likes: number;
  title: string;
  contents: string;
};



export const Listvisualization = (props: Props) => {
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log(props.contents);
  };
  return (
      <CardActionArea onClick={handleClick}>
        <Card sx={{ display: "flex", m: 0.5 }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="caption">
                {props.title}
              </Typography>
              <Typography variant="h6" color="text.secondary" component="div">
                {props.contents}
              </Typography>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            // image=""
            alt="Instagram Img"
          />
        </Card>
      </CardActionArea>
  );
};

const CircleVisualization = (props: Props) => {
  const ranking: number = 0;
  const [isHovering, setIsHovering] = React.useState(false);

  const handleClose = () => {
    setIsHovering(false);
    console.log("12312412421");
  };

  var size: number = 0;

  // Circle 총 개수에 따라 사이즈 작게 수정해야함. 2022-11-13 [LHJ]
  size = props.views * 0.1;
  size += props.likes * 0.4;

  const Circle = styled.span`
    width: ${size}rem;
    height: ${size}rem;
    background: black;
    border-radius: 50%;
    margin: 0;
    position: relative;
    display: inline-block;
  `;

  return (
    <>
      <Circle
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
      />
      {props.contents}
    </>
  );
};

export default CircleVisualization;

import styled from '@emotion/styled';
import { Popover, Tooltip } from '@mui/material';
import React from 'react';
import {RefObject, useRef, useState} from 'react'

type Props = {
    // raingking: Number,
    // canvasSize: {x:Number, y:Number},
    views: number,
    likes: number,
    title: string,
    contents: string,
}



const CircleVisualization = (props: Props) => {
    const ranking: number = 0;
    const [isHovering, setIsHovering] = React.useState(false);

    const handleClose = () => {setIsHovering(false); console.log("12312412421");}
    // const canvasRef: RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null); 애니메이션은 나중에

    var size: number = 0;
    size = props.views * 0.2;
    size += (props.likes * 0.4);

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
  )
}

export default CircleVisualization
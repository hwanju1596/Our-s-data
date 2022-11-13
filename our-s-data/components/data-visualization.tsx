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
export const Listvisualization = () =>{
  console.log("List Vitualization");
  return(
  <>
  </>);
}

const CircleVisualization = (props: Props) => {
    const ranking: number = 0;
    const [isHovering, setIsHovering] = React.useState(false);

    const handleClose = () => {setIsHovering(false); console.log("12312412421");}

    var size: number = 0;

    // Circle 총 개수에 따라 사이즈 작게 수정해야함. 2022-11-13 [LHJ]
    size = props.views * 0.1;
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
import styled from '@emotion/styled';
import {RefObject, useRef} from 'react'

type Props = {
    // raingking: Number,
    // canvasSize: {x:Number, y:Number},
    views: Number,
    likes: Number,
    title: string,
    contents: string,
}

const CircleCanvas = styled.div`
  width: 100%;
  height: 10%;
  position: relative;
`;

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: black;
  border-radius: 50%;
  margin:auto;
`;


const CircleVisualization = (props: Props) => {
    const ranking: Number = 0;
    // const canvasRef: RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null); 애니메이션은 나중에

  return (
    <>
    <CircleCanvas>
      <Circle/>
      <Circle/>
      <Circle/>
      <Circle/>
      <Circle/>
    </CircleCanvas>
      
      <div>CircleVisualization</div>
    </>
  )
}

export default CircleVisualization
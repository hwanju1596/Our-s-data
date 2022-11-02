import {RefObject, useRef} from 'react'

type Props = {
    // raingking: Number,
    views: Number,
    likes: Number,
    title: string,
    contents: string
}

const CircleVisualization = (props: Props) => {
    const ranking: Number = 0;
    const canvasRef: RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null);

  return (
    <>
      <div>CircleVisualization</div>
      <canvas ref={canvasRef}/>
    </>
  )
}

export default CircleVisualization
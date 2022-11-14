import React, { useCallback, useEffect, useRef, useState } from 'react'

interface CanvasProps{
    width: number;
    height: number;
}

interface Coordinate {
    x: number;
    y: number;
  };
  
const CanvasTest = ({ width, height }: CanvasProps) => {

    // const canvasRef: RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null); 
    const canvasRef = useRef<HTMLCanvasElement>(null); 
    const [mousePosition, setMousePosition] = useState<Coordinate | undefined>(undefined);
    const [isPainting, setIsPainting] = useState(false);

    const getCoordinates = (event: MouseEvent): Coordinate | undefined => {
        if (!canvasRef.current) {
          return;
        }
        const canvas: HTMLCanvasElement = canvasRef.current;
        return {
          x: event.pageX - canvas.offsetLeft,
          y: event.pageY - canvas.offsetTop
        };
      };

      // canvas에 선을 긋는 함수
  const drawLine = (originalMousePosition: Coordinate, newMousePosition: Coordinate) => {
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;
    const context = canvas.getContext('2d');

    if (context) {
      context.strokeStyle = "red";  // 선 색깔
      context.lineJoin = 'round';	// 선 끄트머리(?)
      context.lineWidth = 5;		// 선 굵기

      context.beginPath();
      context.moveTo(originalMousePosition.x, originalMousePosition.y);
      context.lineTo(newMousePosition.x, newMousePosition.y);
      context.closePath();

      context.stroke();
    }
  };

 const startPaint = useCallback((event: MouseEvent) => {
    const coordinates = getCoordinates(event);
    if (coordinates) {
      setIsPainting(true);
      setMousePosition(coordinates);
    }
  }, []);

  const paint = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();   // drag 방지
      event.stopPropagation();  // drag 방지

      if (isPainting) {
        const newMousePosition = getCoordinates(event);
        if (mousePosition && newMousePosition) {
          drawLine(mousePosition, newMousePosition);
          setMousePosition(newMousePosition);
        }
      }
    },
    [isPainting, mousePosition]
  );

  const exitPaint = useCallback(() => {
    setIsPainting(false);
  }, []);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;

    canvas.addEventListener('mousedown', startPaint);
    canvas.addEventListener('mousemove', paint);
    canvas.addEventListener('mouseup', exitPaint);
    canvas.addEventListener('mouseleave', exitPaint);

    return () => {
      // Unmount 시 이벤트 리스터 제거
      canvas.removeEventListener('mousedown', startPaint);
      canvas.removeEventListener('mousemove', paint);
      canvas.removeEventListener('mouseup', exitPaint);
      canvas.removeEventListener('mouseleave', exitPaint);
    };
  }, [startPaint, paint, exitPaint]);
 

    return (
    <div className="App">
      <canvas ref={canvasRef} height={height} width={width} className="canvas"/>
    </div>
    )
}

CanvasTest.defaultProps = {
    width: 800,
    height: 600
  };
  

export default CanvasTest;
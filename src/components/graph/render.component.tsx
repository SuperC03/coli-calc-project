import React from 'react';

import * as renderFunctions from './render-functions';

import { Expression, GraphPresets } from '../../types/graph.types';

interface RenderProps {
  presets: GraphPresets;
  expression: Expression;
}

export const Render: React.FC<RenderProps> = ({ presets, expression }) => {

  const canvasRef = React.useRef<HTMLCanvasElement>();

  // Canvas Logic
  React.useEffect(() => {
    const c = canvasRef.current;
    const ctx = c.getContext('2d');
    
    renderFunctions.clear(c, ctx);
    renderFunctions.renderAxis(c, ctx);
    renderFunctions.drawCurve(c, ctx, presets, expression);
    console.log(presets)
  }, [presets, expression]);

  return (
    <>
      <canvas ref={canvasRef} width={1600} height={900} className="bg-white shadow-lg h-3/5 my-6 rounded-lg"></canvas>
    </>
  )
}
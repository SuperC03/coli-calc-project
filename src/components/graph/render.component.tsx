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
    console.log("Nom: ", c.width);
    console.log("Real: ", c.getBoundingClientRect().width);
  }, [presets, expression]);

  return (
    <>
      <canvas ref={canvasRef} width={presets.width * 10} height={presets.height * 10} className="bg-white shadow-lg h-3/5 my-6 rounded-lg"></canvas>
    </>
  )
}
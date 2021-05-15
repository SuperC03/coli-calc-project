import React from 'react';

import { useSum } from '../../utils/sum.store';

import * as renderFunctions from './render-functions';

import { Expression, GraphPresets, RectanglePresets } from '../../types/graph.types';

interface RenderProps {
  presets: GraphPresets;
  expression: Expression;
  rectanglePresets: RectanglePresets;
}

export const RenderComponent: React.FC<RenderProps> = ({ presets, expression, rectanglePresets }) => {
  const setSum = useSum(state => state.setSum);
  const canvasRef = React.useRef<HTMLCanvasElement>();

  // Canvas Logic
  React.useEffect(() => {
    const c = canvasRef.current;
    const ctx = c.getContext('2d');
    
    renderFunctions.clear(c, ctx);
    renderFunctions.renderAxis(c, ctx);
    renderFunctions.drawCurve(c, ctx, presets, expression);
    setSum(renderFunctions.drawRectangles(c, ctx, presets, expression, rectanglePresets));
  }, [presets, expression, rectanglePresets, setSum]);

  return (
    <>
      <canvas ref={canvasRef} width={1600} height={900} className="bg-white shadow-lg h-3/5 my-6 rounded-lg"></canvas>
    </>
  )
}
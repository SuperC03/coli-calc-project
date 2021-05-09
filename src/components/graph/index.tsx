import React from 'react';
import './graph.css';

import { Expression, GraphPresets } from '../../types/graph.types';

import { Render } from './render.component';

export const Graph: React.FC = () => {

  const graphPresets: GraphPresets = {
    width: 60,
    height: 42,
    curveVertexCount: 1000
  };

  const expression: Expression = [
    { coefficient: 1, power: 2 },
  ];

  return (
    <section className="p-2 md:h-screen md:my-4 md:ml-24 sm:ml-12 rounded-lg md:w-3/5 mx-6 my-4 flex md:flex-col justify-items-center">
      <Render presets={graphPresets} expression={expression} />
    </section>
  )
}
import React from 'react';
import './graph.css';

import { Render } from './render.component';
import { useSettings } from '../../utils/settings.store';

export const Graph: React.FC = () => {
  const settings = useSettings(state => state.settings);

  return (
    <section className="p-2 md:h-screen md:my-4 md:ml-24 sm:ml-12 rounded-lg md:w-3/5 mx-6 my-4 flex md:flex-col justify-items-center">
      <Render presets={{curveVertexCount: 1000, height: settings.graphHeight, width: settings.graphWidth  }} expression={settings.expression} />
    </section>
  )
}
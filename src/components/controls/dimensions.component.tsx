import React from 'react';

import { useSettings } from '../../utils/settings.store';

export const DimensionsComponent: React.FC = () => {
  const { settings, setGraphWidth, setGraphHeight } = useSettings();

  return (
    <div className="bg-white p-3 rounded-lg shadow-lg flex flex-col justify-center">
      <div className="flex flex-row my-1">
        <label htmlFor="graphWidth" className="p-2">Grapth Width: </label>
        <input 
          className="w-16 ml-3 border border-black focus:border-blue-400 focus:outline-none p-2 rounded-xl"
          type="number"
          name="graphWidth"
          id="graphWidth"
          min="4"
          value={settings.graphWidth}
          /* @ts-ignore */
          onInput={e => setGraphWidth(parseInt(e.target.value))}
          required />
      </div>
      <div className="flex flex-row my-1">
        <label htmlFor="graphHeight" className="p-2">Grapth Height:  </label>
        <input 
          className="w-16 ml-3 border border-black focus:border-blue-400 focus:outline-none p-2 rounded-xl"
          type="number"
          name="graphHeight"
          id="graphHeight"
          min="4"
          value={settings.graphHeight}
          /* @ts-ignore */
          onInput={e => setGraphHeight(parseInt(e.target.value))}
          required />
      </div>
    </div>
  )
}
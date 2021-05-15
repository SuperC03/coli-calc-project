import React from 'react';

import { useSettings } from '../../utils/settings.store';

export const RiemannComponent: React.FC = () => {
  const { settings, setRectangleCount, setRightSum } = useSettings();

  return (
    <div className="bg-white p-3 rounded-lg shadow-lg flex flex-col justify-center">
      <div className="flex flex-row my-1">
        <label htmlFor="rectangleCount" className="p-2"># of Rectangles</label>
        <input 
          className="w-16 ml-3 border border-black focus:border-blue-400 focus:outline-none p-2 rounded-xl"
          type="number"
          name="rectangleCount"
          id="rectangleCount"
          min="1"
          value={settings.rectangleCount}
          /* @ts-ignore */
          onInput={e => setRectangleCount(parseInt(e.target.value))}
          required />
      </div>
      <div className="flex flex-row mx-auto px-3">
        <label htmlFor="rightSumFalse" className="p-2">Left</label>
        <input 
          type="radio"
          className="form-radio mt-1"
          name="rightSum"
          id="rightSumFalse"
          onChange={() => setRightSum(false)}
          checked={!settings.rightSum}
          required />
        <label htmlFor="rightSumTrue" className="p-2 ml-3">Right</label>
        <input 
          type="radio"
          className="form-radio mt-1"
          name="rightSum"
          id="rightSumTrue"
          onChange={() => setRightSum(true)}
          checked={settings.rightSum}
          required />
      </div>
    </div>
  );
}
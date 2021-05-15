import React from 'react';

import { useSum } from '../../utils/sum.store';
import { useSettings } from '../../utils/settings.store';

export const ResultsComponent: React.FC = () => {
  const sum = useSum(value => value.value);
  const actualValue = useSettings(value => value.settings.value);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col text-center">
      <h1 className="text-4xl">{ sum.toFixed(4) }</h1>
      <h2 className="text-md text-gray-500">Reimann Sum Value</h2>
      <h1 className="text-4xl">{ actualValue.toFixed(4) }</h1>
      <h2 className="text-md text-gray-500">Calculated Value</h2>
    </div>
  );
}
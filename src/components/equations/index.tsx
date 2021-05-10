import React from 'react';

import { Equation } from './equation.component';
import { examples } from '../../examples';

export const Equations: React.FC = () => {
  return (
    <div className="w-full sm:w-1/3 md:w-1/3 md:px-6 md:py-4 sm:pr-12 md:pr-24 md:h-screen md:overflow-y-scroll">
      {
        examples.map((example, i) => (
          <Equation example={example} key={i} />
        ))
      }
    </div>
  )
}
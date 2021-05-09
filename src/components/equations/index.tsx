import React from 'react';
import { Equation } from './equation.component';

export const Equations: React.FC = () => {
  return (
    <div className="w-full sm:w-1/3 md:w-1/3 md:px-6 md:py-4 sm:pr-12 md:pr-24 md:h-screen md:overflow-y-scroll">
      {
        ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).map((i) => (
          <Equation key={i} />
        ))
      }
    </div>
  )
}
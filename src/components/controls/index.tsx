import React from 'react';

import { DimensionsComponent } from './dimensions.component';
import { ResultsComponent } from './results.component';
import { RiemannComponent } from './riemann.component';

export const Controls: React.FC = () => {  
  return (
    <section className="flex flex-row justify-between w-full">
      <DimensionsComponent />      
      <ResultsComponent />
      <RiemannComponent />
    </section>
);
}
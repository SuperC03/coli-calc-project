import React from 'react';
import { BlockMath } from 'react-katex';
import { Example } from '../../examples';
import { useSettings } from '../../utils/settings.store';

interface EquationProps {
  example: Example;
}

export const Equation: React.FC<EquationProps> = ({ example }) => {
  const setExample = useSettings(state => state.setExample);

  return (
    <div onClick={()=>setExample(example)} className="bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl hover:border-blue-600 hover:border cursor-pointer p-2 rounded-lg md:w-full md:my-6 h-24">
      <BlockMath>{ example.katex }</BlockMath>
    </div>
  );
}
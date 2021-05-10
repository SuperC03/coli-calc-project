import React from 'react';
import './App.css';
import 'katex/dist/katex.min.css';
import { Equations } from './components/equations';
import { Graph } from './components/graph';

const App: React.FC = () => {
  return (
    <div id="app" className="bg-gray-200">
      <main className="flex flex-col md:flex-row justify-between items-center w-full h-full mx-auto">
        <Graph />
        <Equations />
      </main>
    </div>
  );
}

export default App;

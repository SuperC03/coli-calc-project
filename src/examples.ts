import { Expression } from "./types/graph.types";

export interface Example {
  expression: Expression;
  katex: string;
  min: number;
  max: number;
  graphWidth: number;
  graphHeight: number;
  rightSum: boolean;
  rectangleCount: number;
}

const defaults = {
  graphWidth: 30,
  graphHeight: 20,
  rightSum: true,
  rectangleCount: 5,
}

export const examples: Array<Example> = [
  {
    expression: [{ coefficient: 1, power: 2 }],
    katex: `\\int_0^{5} x^2 dx`,
    min: 0, max: 5,
    ...defaults,
  },
  {
    expression: [{ coefficient: 1, power: 2 }, { coefficient: 4, power: 1 }, { coefficient: 6, power: 0 }],
    katex: `\\int_0^{5} x^4 + 4x + 6 dx`,
    min: 0, max: 5,
    ...defaults,
  },
  {
    ...defaults,
    expression: [{ coefficient: 3, power: 3 }, { coefficient: 1, power: 2 }, { coefficient: 2, power: 1 }, { coefficient: 9, power: 0 }],
    katex: `\\int_{-1}^{3} 3x^3 + x^2 + 2x + 9 dx`,
    min: -1, max: 3, graphHeight: 60, graphWidth: 10
  },
]
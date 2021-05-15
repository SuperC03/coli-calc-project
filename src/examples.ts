import { Expression } from "./types/graph.types";

export interface Example {
  expression: Expression;   // Algebreic Expression
  katex: string;            // Expression to Render
  min: number;              // Low End of Integral
  max: number;              // High End of Intergral
  graphWidth: number;       // Initial Graph Width
  graphHeight: number;      // Initial Graph Height
  rightSum: boolean;        // Use Right Riemann Sums?
  rectangleCount: number;   // Rectangle Count for Riemann Sum
  value: number;            // Actuall Answer
}

const defaults = {
  graphWidth: 30,
  graphHeight: 20,
  rightSum: true,
  rectangleCount: 30,
}

export const examples: Array<Example> = [
  {
    ...defaults,
    expression: [{ coefficient: 1, power: 2 }],
    katex: `\\int_0^{5} x^2 dx`,
    min: 0, max: 5, graphHeight: 40, value: 125 / 3,
  },
  {
    ...defaults,
    expression: [{ coefficient: 1, power: 4 }, { coefficient: 4, power: 1 }, { coefficient: 6, power: 0 }],
    katex: `\\int_0^{5} x^4 + 4x + 6 dx`,
    min: 0, max: 5, graphHeight: 120, value: 705,
  },
  {
    ...defaults,
    expression: [{ coefficient: 3, power: 3 }, { coefficient: 1, power: 2 }, { coefficient: 2, power: 1 }, { coefficient: 9, power: 0 }],
    katex: `\\int_{-1}^{2} 3x^3 + x^2 + 2x + 9 dx`,
    min: -1, max: 2, graphHeight: 60, value: 177 / 4,
  },
  {
    ...defaults,
    expression: [{ coefficient: 1, power: 2 }],
    katex: `\\int_0^{5} x^2 dx`,
    min: 0, max: 5, graphHeight: 40, value: 125 / 3,
  },
  {
    ...defaults,
    expression: [{ coefficient: 1, power: 4 }, { coefficient: 4, power: 1 }, { coefficient: 6, power: 0 }],
    katex: `\\int_0^{5} x^4 + 4x + 6 dx`,
    min: 0, max: 5, graphHeight: 120, value: 705,
  },
  {
    ...defaults,
    expression: [{ coefficient: 3, power: 3 }, { coefficient: 1, power: 2 }, { coefficient: 2, power: 1 }, { coefficient: 9, power: 0 }],
    katex: `\\int_{-1}^{2} 3x^3 + x^2 + 2x + 9 dx`,
    min: -1, max: 2, graphHeight: 60, value: 177 / 4,
  },
  {
    ...defaults,
    expression: [{ coefficient: 1, power: 2 }],
    katex: `\\int_0^{5} x^2 dx`,
    min: 0, max: 5, graphHeight: 40, value: 125 / 3,
  },
  {
    ...defaults,
    expression: [{ coefficient: 1, power: 4 }, { coefficient: 4, power: 1 }, { coefficient: 6, power: 0 }],
    katex: `\\int_0^{5} x^4 + 4x + 6 dx`,
    min: 0, max: 5, graphHeight: 120, value: 705,
  },
  {
    ...defaults,
    expression: [{ coefficient: 3, power: 3 }, { coefficient: 1, power: 2 }, { coefficient: 2, power: 1 }, { coefficient: 9, power: 0 }],
    katex: `\\int_{-1}^{2} 3x^3 + x^2 + 2x + 9 dx`,
    min: -1, max: 2, graphHeight: 60, value: 177 / 4,
  },
]
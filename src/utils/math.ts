import { Expression } from "../types/graph.types"

export const computeExpression = (exp: Expression, x: number): number => {
  let sum: number = 0;
  exp.forEach(c => {
    sum += (c.coefficient * Math.pow(x, c.power));
  });
  return sum;
}
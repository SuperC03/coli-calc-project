import { Expression } from '../types/graph.types';
import { computeExpression } from './math';

const expressions: Array<Expression> = [
  [{ coefficient: 1, power: 1 }],
  [{ coefficient: 2, power: 2 }],
  [{ coefficient: 1, power: 2 }, { coefficient: 1, power: 1 }, { coefficient: 4, power: 0 }],
];

test('returns output of function with given x-value', () => {
  expect(computeExpression(expressions[0], 4)).toEqual(4);
  expect(computeExpression(expressions[0], 6)).toEqual(6);
  expect(computeExpression(expressions[1], 4)).toEqual(32);
  expect(computeExpression(expressions[1], 6)).toEqual(72);
  expect(computeExpression(expressions[2], 0)).toEqual(4);
  expect(computeExpression(expressions[2], 1)).toEqual(6);
  expect(computeExpression(expressions[2], 5)).toEqual(34);
})
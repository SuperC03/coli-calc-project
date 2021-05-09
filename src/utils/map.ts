// https://github.com/processing/p5.js/blob/main/src/math/calculation.js#L440
export const map = function(n: number, start1: number, stop1: number, start2: number, stop2: number) {
  return ((n-start1)/(stop1-start1))*(stop2-start2)+start2;
};
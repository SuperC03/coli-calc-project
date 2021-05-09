import { Expression, GraphPresets } from "../../types/graph.types";
import { map } from "../../utils/map";
import { computeExpression } from "../../utils/math";

export const clear = (c: HTMLCanvasElement, ctx: CanvasRenderingContext2D): void => {
  ctx.fillStyle = "#FFF";
  ctx.fillRect(0, 0, c.width, c.height);
}

export const renderAxis = ({ width, height }: HTMLCanvasElement, ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath();
  ctx.strokeStyle = "#000";
  ctx.lineWidth = width / 200;
  // ctx.lineWidth = height / 300;
  ctx.moveTo(0, height / 2);
  ctx.lineTo(width, height / 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.lineWidth = width / 200;
  ctx.moveTo(width / 2, 0);
  ctx.lineTo(width / 2, height);
  ctx.stroke();
}

export const drawCurve = (c: HTMLCanvasElement, ctx: CanvasRenderingContext2D, presets: GraphPresets, exp: Expression) => {
  ctx.lineWidth = c.width / 250;
  ctx.moveTo(0, computeExpression(exp, -presets.width / 2));
  ctx.beginPath();
  ctx.strokeStyle = "#F00";
  for(let i = (-presets.width / 2) + (presets.width / presets.curveVertexCount); i <= presets.width / 2; i += presets.width / presets.curveVertexCount) {
    ctx.lineTo(
      map(i, -presets.width / 2, presets.width / 2, 0, presets.width * 10),
      map(computeExpression(exp, i), 0, presets.height, presets.height * 5, 0),
    );
  }
  ctx.stroke();
}
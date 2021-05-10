export interface GraphPresets {
  width: number;
  height: number;
  curveVertexCount: number;
}

export interface RectanglePresets {
  min: number;
  max: number;
  rectangleCount: number;
  rightSum: boolean;
}

export interface ExpressionComponent {
  coefficient: number;
  power: number;
}

export type Expression = Array<ExpressionComponent>;
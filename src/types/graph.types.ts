export interface GraphPresets {
  width: number;
  height: number;
  curveVertexCount: number;
}

export interface ExpressionComponent {
  coefficient: number;
  power: number;
}

export type Expression = Array<ExpressionComponent>;
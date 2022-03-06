import { ReactNode } from 'react';

export type Position = {
  x: number;
  y: number;
};

export type DraggableProps = {
  children: ReactNode;
  customWidth?: string;
  customHeight?: string;
  defaultPosition: Position;
};

export type StyledDraggableProps = {
  customWidth: string;
  customHeight: string;
  clientX: number;
  clientY: number;
};

export type DragState = {
  isDrag: boolean;
  mouseX: number | null;
  mouseY: number | null;
};

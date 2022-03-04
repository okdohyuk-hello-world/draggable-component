import React from 'react';
import { ReactNode } from 'react';
import styled from 'styled-components';

type DraggableProps = {
  children: ReactNode;
  customWidth?: string;
  customHeight?: string;
};

type StyledDraggableProps = {
  customWidth: string;
  customHeight: string;
};

const StyledDraggable = styled.div<StyledDraggableProps>`
  width: ${({ customWidth }) => customWidth};
  height: ${({ customHeight }) => customHeight};
  background-color: rgb(29, 29, 33);
`;

function Draggable({ children, customWidth = '100%', customHeight = '100%' }: DraggableProps) {
  return (
    <StyledDraggable customWidth={customWidth} customHeight={customHeight}>
      {children}
    </StyledDraggable>
  );
}

export default Draggable;

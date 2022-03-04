import React from 'react';
import { storiesOf } from '@storybook/react';
import Draggable from '../../components/Draggable';
import styled from 'styled-components';

const StyledBox = styled.div`
  width: 300px;
  height: 100px;
  border-radius: 26px;
  background-color: rgb(45, 45, 50);
  transition: box-shadow 0.3s ease-in-out;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.6);
  }
`;

export const draggable = () => {
  return (
    <Draggable>
      <StyledBox />
    </Draggable>
  );
};

storiesOf('Draggable Test', module).add('base', () => (
  <Draggable customHeight={'1000px'}>
    <StyledBox />
  </Draggable>
));

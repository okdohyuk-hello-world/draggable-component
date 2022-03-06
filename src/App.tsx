import React from 'react';
import Draggable from './components/Draggable';
import styled from 'styled-components';

const StyledBox = styled.div`
  width: 300px;
  height: 100px;
  border-radius: 26px;
  background-color: rgb(45, 45, 50);
`;

function App() {
  return (
    <Draggable customHeight={'1000px'} defaultPosition={{ x: 100, y: 100 }}>
      <StyledBox />
    </Draggable>
  );
}

export default App;

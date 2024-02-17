import React from 'react';
import styled from 'styled-components';

const VSpace = styled.div<{ height: number }>`
  height: ${props => props.height}px;
`;

export default VSpace;

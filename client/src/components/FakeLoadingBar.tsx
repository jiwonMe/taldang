import React from 'react';
import styled, { keyframes } from 'styled-components';

// 애니메이션 정의
const loading = keyframes`
  0% { width: 0; }
  100% { width: 100%; }
`;

// 스타일링된 div 생성
const Bar = styled.div<{ duration: number }>`
  height: 4px;
  width: 0;
  background-color: #000000;
  animation: ${loading} ${props => props.duration}s linear forwards;
`;

interface FakeLoadingBarProps {
  duration: number;
}
// FakeLoadingBar 컴포넌트 정의
const FakeLoadingBar: React.FC<FakeLoadingBarProps> = ({ duration }) => {
  return <Bar duration={duration} />;
};

export default FakeLoadingBar;
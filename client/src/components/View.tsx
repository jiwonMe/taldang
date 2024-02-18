import React from 'react';
import styled from 'styled-components';

// iOS 스타일의 View를 만들기 위한 Styled Component
const View = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh; // 전체 높이를 차지하도록 설정
  width: 100dvw; // 전체 너비를 차지하도록 설정
`;

export default View;
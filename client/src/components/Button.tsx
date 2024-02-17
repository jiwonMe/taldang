import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  /* Button */
  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 16px;
  gap: 10px;

  width: 100%;
  height: 50px;

  background: linear-gradient(180deg, #414141 0%, #101010 100%);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  /* Text */
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #FFFFFF;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;

  /* Hover and Active states */
  &:hover {
    background: linear-gradient(180deg, #515151 0%, #202020 100%);
  }

  &:active {
    background: linear-gradient(180deg, #616161 0%, #303030 100%);
  }
`;

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({ className, children }) => {
  return <StyledButton className={className}>{children}</StyledButton>;
};

export default Button;
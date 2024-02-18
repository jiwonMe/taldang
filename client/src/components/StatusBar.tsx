import getPartyColor from '@/utils/getPartyColor'
import React from 'react'
import styled from 'styled-components'

interface StatusBarProps {
  children: React.ReactNode,
  backgroundColor?: string
}

const StatusBar: React.FC<StatusBarProps> = (props) => {
  return (
    props.children &&
    <StatusBarLayout
      backgroundColor={props.backgroundColor}
    >
      {props.children}
    </StatusBarLayout>
  )
}

export default StatusBar

const StatusBarLayout = styled.div<{
  backgroundColor?: string
}>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 32px;
  background-color: ${props => props.backgroundColor || '#fff'};
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  font-size: 12px;
  color: #fff;
  font-weight: 400;
  b {
    font-weight: 700;
  }
`
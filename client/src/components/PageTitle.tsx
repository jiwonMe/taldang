import React from 'react'
import styled from 'styled-components'

interface PageTitleProps {
  title: string | React.ReactNode
  subtitle?: string | React.ReactNode
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
  return (
    <PageTitleLayout>
      <h1>{props.title}</h1>
      {props.subtitle && <p>{props.subtitle}</p>}
    </PageTitleLayout>
  )
}

export default PageTitle

const PageTitleLayout = styled.div`
  margin-bottom: 36px;
  word-break: keep-all;

  h1 {
    font-size: 20px;
    margin-bottom: 4px;
  }
  p {
    font-size: 12px;
    color: #666;
  }
`
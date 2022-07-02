import React from 'react'
import { css } from '@emotion/react'
import { textColor } from '../../styles/colors'

type Props = {
  children?: React.ReactNode
}

const PageTitle: React.FC<Props> = (props) => {
  return (
    <h1 css={titleStyle}>
      {props.children}
    </h1>
  )
}

const titleStyle = css`
  text-align: center;
  font-size: 27px;
  color: ${textColor};
  margin: 20px 0;
  line-height: 1.7;
  @media(min-width: 500px) {
    font-size: 30px;
  }
`

export default PageTitle
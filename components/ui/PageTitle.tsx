import React from 'react'
import { css } from '@emotion/react'
import { textColor } from '../../styles/colors'
import { toFontName } from '../../styles/Font.type'
import { breakpoints } from '../../styles/constants'

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
  font-size: 30px;
  font-family: ${toFontName("NotoSans")};
  text-align: center;
  color: ${textColor};
  margin: 20px 0;
  line-height: 1.7;
  @media(min-width: ${breakpoints.desktop}) {
    font-size: 32px;
  }
`

export default PageTitle
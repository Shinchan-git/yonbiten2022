import React from 'react'
import { css } from '@emotion/react'

type Props = {
  children: React.ReactNode
}

const Divider: React.FC<Props> = (props) => {
  return (
    <div css={textContainerStyle}>
      {props.children}
    </div>
  )
}

const textContainerStyle = css`
  padding: 4px;
`

export default Divider
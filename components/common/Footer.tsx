import React from 'react'
import { css } from '@emotion/react'

const Footer: React.FC = () => {
  return (
    <footer css={footerStyle}>
      &copy; 2022 Yonbiten
    </footer>
  )
}

const footerStyle = css`
  padding: 3px 0;
  background-color: #fff;
  text-align: center;
  font-size: 10pt;
  color: #999;
`

export default Footer
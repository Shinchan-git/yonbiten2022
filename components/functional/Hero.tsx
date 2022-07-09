import React from 'react'
import { css } from '@emotion/react'
import { toFontName } from '../../styles/Font.type'
import Spacer from '../ui/Spacer'
import { breakpoints } from '../../styles/constants'

const Hero: React.FC = () => {
  return (
    <React.Fragment>
      <Spacer size={12} />
      <div css={containerStyle}>
        <img src={require("@public/images/gradation.png")} css={imageStyle} />
        <h1 css={titleStyle}>
          四美展
        </h1>
      </div>
    </React.Fragment>
  )
}

const containerStyle = css`
  position: relative;
`

const imageStyle = css`
  object-fit: cover;
  width: 100%;
  height: 200px;
  @media(min-width: ${breakpoints.desktop}) {
    height: 300px;
  }
`

const titleStyle = css`
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  margin: 0;
  padding: 0;
  font-family: ${toFontName("ZennAntiqueSoft")};
  color: #fff;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
  font-size: 55px;
  @media(min-width: ${breakpoints.desktop}) {
    font-size: 65px;
  }
`

export default Hero
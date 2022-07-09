import React from 'react'
import { css } from '@emotion/react'
import Spacer from '../ui/Spacer'
import PageTitle from '../ui/PageTitle'
import TextContainer from '../ui/TextContainer'

const Works: React.FC = () => {
  return (
    <TextContainer>
      <PageTitle >参加校・作品紹介</PageTitle>
      <ul>
        <li>
          <p css={titleStyle}>東大美術サークル</p>
        </li>
        <Spacer size={11} />
        <li>
          <p css={titleStyle}>慶應義塾大学 パレットクラブ</p>
        </li>
        <Spacer size={11} />
        <li>
          <p css={titleStyle}>東京女子大学 洋画研究会</p>
        </li>
        <Spacer size={11} />
        <li>
          <p css={titleStyle}>早稲田大学 絵画会</p>
        </li>
      </ul>
    </TextContainer>
  )
}

const titleStyle = css`
  font-size: 20px;
`

export default Works
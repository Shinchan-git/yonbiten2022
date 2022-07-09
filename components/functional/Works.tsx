import React from 'react'
import { css } from '@emotion/react'
import Spacer from '../ui/Spacer'
import PageTitle from '../ui/PageTitle'
import TextContainer from '../ui/TextContainer'
import TextLink from '../ui/TextLink'

const Works: React.FC = () => {
  return (
    <TextContainer>
      <PageTitle >参加校・作品紹介</PageTitle>
      <ul>
        <li>
          <p css={titleStyle}>東大美術サークル</p>
        </li>
        <Spacer size={18} />
        <li>
          <p css={titleStyle}>慶應大学 パレットクラブ</p>
          <p>--作品の画像--</p>
          <p>Twitter: <TextLink href="https://twitter.com/palette_KEIO">@palette_KEIO</TextLink></p>
        </li>
        <Spacer size={18} />
        <li>
          <p css={titleStyle}>東京女子大学 洋画研究会</p>
        </li>
        <Spacer size={18} />
        <li>
          <p css={titleStyle}>早稲田大学 絵画会</p>
        </li>
      </ul>
    </TextContainer>
  )
}

const titleStyle = css`
  font-size: 22px;
  margin: 8px 0;
`

export default Works
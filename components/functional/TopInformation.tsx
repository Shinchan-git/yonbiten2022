import React from 'react'
import { css } from '@emotion/react'
import Spacer from '../ui/Spacer'
import { dividerColor, supportingTextColor } from '../../styles/colors'
import TextLink from '../ui/TextLink'
import TextContainer from '../ui/TextContainer'

type Item = {
  label: string
  content: string
}

const data: Item[] = [
  {
    label: "会期",
    content: "2022年８月10日(水)〜12日(金)"
  },
  {
    label: "時間",
    content: "11時〜20時"
  },
  {
    label: "",
    content: ""
  },
  {
    label: "入場料",
    content: "無料"
  }
]

const TopInformation: React.FC = () => {
  return (
    <React.Fragment>
      <TextContainer>
        <p css={topMessageStyle}>
          東京大学, 慶應大学, 東京女子大学, 早稲田大学の美術サークルによる合同展です。
          <Spacer size={6} />
          私たちの日頃の成果をぜひご覧ください。
        </p>
      </TextContainer>
      <Spacer size={18} />

      <ul css={listStyle}>
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <li>
              <p css={labelStyle}>{item.label}</p>
              <p css={textStyle}>{item.content}</p>
            </li>
            <Spacer size={11} />
          </React.Fragment>
        ))}
        <li>
          <p css={labelStyle}>場所</p>
          <p css={textStyle}><TextLink href="https://designfestagallery.com/access/">デザインフェスタギャラリー East101</TextLink></p>
          <p css={textStyle}>原宿駅から徒歩９分、明治神宮前駅から徒歩５分</p>
        </li>
        <Spacer size={11} />
        <li>
          <p css={labelStyle}>展示内容</p>
          <p css={textStyle}>絵画、立体作品</p>
        </li>
      </ul>
    </React.Fragment>
  )
}

const topMessageStyle = css`
  font-size: 19px;
`

const listStyle = css`
  background-color: #fff;
  border: solid 1px ${dividerColor};
  border-radius: 6px;
  padding: 8px 6px;
`

const labelStyle = css`
  color: ${supportingTextColor};
  font-size: 16px;
`

const textStyle = css`
  line-height: 1.5;
`

export default TopInformation
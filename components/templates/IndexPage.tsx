import React from 'react'
import { css } from '@emotion/react'
import PageTitle from '../ui/PageTitle'
import Seo from '../common/Seo'

const IndexPage: React.FC = () => {
  return (
    <React.Fragment>
      <Seo />

      <PageTitle>
        四美展2022
      </PageTitle>
      <img src={require("@public/images/logo.png")} css={logoStyle} />
    </React.Fragment>
  )
}

const logoStyle = css`
  max-width: 300px;
  max-height: 300px;
`

export default IndexPage
import React from 'react'
import { css } from '@emotion/react'
import PageTitle from '../ui/PageTitle'
import PrimaryImage from '../ui/PrimaryImage'
import Seo from '../common/Seo'

const IndexPage: React.FC = () => {
  return (
    <React.Fragment>
      <Seo />

      <PageTitle>
        四美展2022
      </PageTitle>
      <PrimaryImage src="../../public/logo.png" />
    </React.Fragment>
  )
}

export default IndexPage
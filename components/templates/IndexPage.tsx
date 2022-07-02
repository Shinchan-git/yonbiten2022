import React from 'react'
import { css } from '@emotion/react'
import PageTitle from '../ui/PageTitle'
import PrimaryImage from '../ui/PrimaryImage'
import Seo from '../common/Seo'
import Image from 'next/image'

const IndexPage: React.FC = () => {
  return (
    <React.Fragment>
      <Seo />

      <PageTitle>
        四美展2022
      </PageTitle>
      {/* <PrimaryImage src="/logo.png" /> */}
      <Image src="/logo.png" width={100} height={100} />
    </React.Fragment>
  )
}

export default IndexPage
import React from 'react'
import { css } from '@emotion/react'
import Seo from '../common/Seo'
import Hero from '../functional/Hero'
import TopInformation from '../functional/TopInformation'
import Spacer from '../ui/Spacer'
import Works from '../functional/Works'
import TextLink from '../ui/TextLink'

const IndexPage: React.FC = () => {
  return (
    <React.Fragment>
      <Seo />

      <Hero />
      <Spacer size={18} />

      <TopInformation />
      <Spacer size={50} />

      {/* <Works /> */}

      <Spacer size={18} />
    </React.Fragment>
  )
}

export default IndexPage
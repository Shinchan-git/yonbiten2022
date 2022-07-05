import React from 'react'
import { css } from '@emotion/react'
import Seo from '../common/Seo'
import Hero from '../functional/Hero'

const IndexPage: React.FC = () => {
  return (
    <React.Fragment>
      <Seo />

      <Hero />

      <p>このページは現在準備中です。</p>
    </React.Fragment>
  )
}

export default IndexPage
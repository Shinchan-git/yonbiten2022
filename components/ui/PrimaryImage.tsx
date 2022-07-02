import React from 'react'
import Image from 'next/image'

const normalizeSrc = (src) => {
  return src.startsWith('/') ? src.slice(1) : src
}

const cloudflareLoader = ({ src, width, quality }) => {
  const params = [`width=${width}`]
  if (quality) {
    params.push(`quality=${quality}`)
  }
  const paramsString = params.join(',')
  // return `/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`
  return `/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`
}

type Props = {
  src: string
}

const PrimaryImage: React.FC<Props> = (props) => {
  return (
    <Image
      // loader={cloudflareLoader}
      src={props.src}
      width={500}
      height={500}
    />
  )
}

export default PrimaryImage
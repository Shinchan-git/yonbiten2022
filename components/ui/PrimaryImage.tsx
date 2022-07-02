import React from 'react'
import Image, { ImageLoader } from 'next/image'

const normalizeSrc = (src) => {
  return src.startsWith('/') ? src.slice(1) : src
}

const cloudflareLoader = ({ src, width, quality }) => {
  const params = [`width=${width}`]
  if (quality) {
    params.push(`quality=${quality}`)
  }
  const paramsString = params.join(',')
  return `/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`
}

type Props = {
  src: string
}

const PrimaryImage: React.FC<Props> = (props) => {
  const loader = cloudflareLoader as ImageLoader

  return (
    <Image
      loader={loader}
      src={props.src}
      width={100}
      height={100}
    />
  )
}

export default PrimaryImage
import React from 'react'

export interface ImageProps {
  src: string
  alt?: string
  width?: string
  height?: string
  style?: React.CSSProperties
}

const Image = ({
  src,
  alt = '사진',
  width = '100%',
  height = 'auto',
  style
}: ImageProps) => {
  if (!src) {
    throw new Error('src가 필요합니다.')
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{ ...style }}
    />
  )
}

export default Image

import { ImgHTMLAttributes } from 'react'

const Image = ({
  src,
  alt = '사진',
  width = '100%',
  height = 'auto',
  style,
  ...rest
}: ImgHTMLAttributes<HTMLImageElement>) => {
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
      {...rest}
    />
  )
}

export default Image

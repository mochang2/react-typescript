import React from 'react'
import styled from 'styled-components'

interface ContentProps {
  paddingLeft: string
  children: React.ReactNode
}

const Wrapper = styled.div<{ paddingLeft: string }>`
  padding-left: ${({ paddingLeft }) => paddingLeft};
`

function Content({ paddingLeft, children }: ContentProps) {
  return <Wrapper paddingLeft={paddingLeft}>{children}</Wrapper>
}

export default Content

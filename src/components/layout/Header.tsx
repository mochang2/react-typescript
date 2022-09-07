import styled from 'styled-components'

interface HeaderProps {
  paddingLeft: string
}

const Wrapper = styled.div<{ paddingLeft: string }>`
  padding-left: ${({ paddingLeft }) => paddingLeft};
`

function Header({ paddingLeft }: HeaderProps) {
  return <Wrapper paddingLeft={paddingLeft}>this is header</Wrapper>
}

export default Header

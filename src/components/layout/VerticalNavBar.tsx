import styled from 'styled-components'

interface VerticalNavBarProps {
  width: string
}

const Wrapper = styled.div<{ width: string }>`
  position: fixed;
  left: 0;
  top: 0;
  width: ${({ width }) => width};
  height: 100%;

  background-color: black;
  color: white;
`

function VerticalNavBar({ width }: VerticalNavBarProps) {
  return <Wrapper width={width}>hoho</Wrapper>
}

export default VerticalNavBar

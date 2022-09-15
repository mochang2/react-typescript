import styled from 'styled-components'

interface TitleProps {
  content: string
  route: string
}

const Wrapper = styled.section`
  margin-bottom: 3.6vh;
`

const Title = styled.h2`
  margin: 0 0 4px;
`

const SubTitle = styled.h4`
  margin: 0;

  font-weight: 400;
  color: #7e7e7e;
`

function Header({ content, route }: TitleProps) {
  return (
    <Wrapper>
      <Title>{content}</Title>
      <SubTitle>{route}</SubTitle>
    </Wrapper>
  )
}

export default Header

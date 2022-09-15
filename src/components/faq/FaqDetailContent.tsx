import styled from 'styled-components'

interface FaqContentProps {
  category: string
  title: string
  content: string
}

const Container = styled.div`
  display: grid;
  grid-template-rows: minmax(85px, auto) minmax(726px, auto);
  grid-template-columns: 160px auto;

  border: 1px solid #e5e5e5;
  border-radius: 10px;

  & div:nth-child(3) {
    grid-column: 1 / 3;
  }
`

const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  font-weight: 700;
  font-size: 1rem;

  &::after {
    content: '|';

    position: absolute;
    right: 0;

    font-size: 1.2rem;
    color: #e5e5e5;
  }
`

const Title = styled.div`
  padding: 18px 30px;

  font-weight: 500;
  font-size: 2rem;
`

const Content = styled.div`
  padding: 1.2vh 1.2vw;

  font-weight: 500;
  font-size: 1rem;

  border-top: 1px solid #e5e5e5;
`

function FaqDetailContent({ category, title, content }: FaqContentProps) {
  return (
    <Container>
      <Category>{category}</Category>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Container>
  )
}

export default FaqDetailContent

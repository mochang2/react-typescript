import { ReactNode } from 'react'
import styled from 'styled-components'

interface DialogboxProps {
  open: boolean
  title?: string
  subtitle?: string
  children?: ReactNode
}

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.3);
`

const Wrapper = styled.section`
  padding: 8px 16px;

  min-width: 8vw;
  min-height: 8vh;

  font-size: 1.2rem;

  background-color: #ffffff;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

const Title = styled.h3`
  margin: 1.2vh 1.2vw;
`

const SubTitle = styled.h5`
  margin: 1vh 1vw;
`

function Dialogbox({ open, title, subtitle, children }: DialogboxProps) {
  return open ? (
    <Background>
      <Wrapper>
        {Boolean(title) && <Title>{title}</Title>}
        {Boolean(subtitle) && <SubTitle>{subtitle}</SubTitle>}
        {children}
      </Wrapper>
    </Background>
  ) : (
    <></>
  )
}

export default Dialogbox

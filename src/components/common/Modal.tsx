import { useEffect, ReactNode, MouseEvent } from 'react'
import styled from 'styled-components'

interface ModalProps {
  onClose: (event?: MouseEvent) => void
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

  background-color: transparent;
`

const Wrapper = styled.section`
  padding: 8px 16px;

  min-width: 8vw;
  min-height: 8vh;

  font-size: 1.2rem;

  background-color: #ffffff;

  border: 1px solid #c4c4c4;
  border-radius: 10px;

  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`

const Title = styled.h2`
  margin: 1.2vh 1.2vw;
`

const SubTitle = styled.h4`
  margin: 1vh 1vw;
`

function Modal({ onClose, title, subtitle, children }: ModalProps) {
  useEffect(() => {
    const documentEventCallback = (event: KeyboardEvent) => {
      if (event.key === 'Esc' || event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', documentEventCallback)

    return () => document.removeEventListener('keydown', documentEventCallback)
  }, [])

  return (
    <Background onClick={onClose} id="background">
      <Wrapper onClick={(event) => event.stopPropagation()}>
        {Boolean(title) && <Title>{title}</Title>}
        {Boolean(subtitle) && <SubTitle>{subtitle}</SubTitle>}
        {children}
      </Wrapper>
    </Background>
  )
}

export default Modal

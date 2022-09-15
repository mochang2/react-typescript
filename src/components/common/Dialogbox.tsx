import styled from 'styled-components'
import TransparentButton from './TransparentButton'

interface DialogboxProps {
  open: boolean
  title: string
  onAgree?: () => void
  onClose?: () => void
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
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 8px 16px;

  min-width: 8vw;
  min-height: 8vh;

  font-size: 1.2rem;

  background-color: #ffffff;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

function Dialogbox({ open, title, onAgree, onClose }: DialogboxProps) {
  return open ? (
    <Background onClick={onClose}>
      <Wrapper>
        {title}
        <ButtonContainer>
          {Boolean(onAgree) && (
            <TransparentButton onClick={onAgree}>예</TransparentButton>
          )}
          {Boolean(onClose) && (
            <TransparentButton onClick={onClose}>아니오</TransparentButton>
          )}
        </ButtonContainer>
      </Wrapper>
    </Background>
  ) : (
    <></>
  )
}

export default Dialogbox

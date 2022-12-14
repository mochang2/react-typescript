import styled from 'styled-components'
import Image from './Image'
import { LoadingGif } from 'assets/gif'

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

function PageLoading() {
  return (
    <Background>
      <Image src={LoadingGif} width={'50vw'} />
    </Background>
  )
}

export default PageLoading

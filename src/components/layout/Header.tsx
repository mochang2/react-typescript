import styled from 'styled-components'

interface HeaderProps {
  paddingLeft: string
}

const Wrapper = styled.div<{ paddingLeft: string }>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: ${({ paddingLeft }) => `20px 4vw 30px ${paddingLeft}`};

  font-size: 16px;
  font-family: 'notosans medium';
`

// 사진이면 backgroud로 사진 넣어주면 됨
const Profile = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 4px;

  background-color: #c4c4c4;

  border-radius: 100%;
`

function Header({ paddingLeft }: HeaderProps) {
  return (
    <Wrapper paddingLeft={paddingLeft}>
      <Profile /> {localStorage.getItem('username')}님 안녕하세요.
    </Wrapper>
  )
}

export default Header

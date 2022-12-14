import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { SideMenuLogo } from 'assets/image'
import { Image } from 'components/common'
import VerticalMenuList from './VerticalMenuList'
import ROUTE from 'routes/routeMap'
import { getToday } from 'libs/datetime.helper'

interface VerticalNavBarProps {
  width: string
}

const Wrapper = styled.section<{ width: string }>`
  display: flex;
  flex-direction: column;
  padding: 20px 14px;

  position: fixed;
  left: 0;
  top: 0;
  width: calc(${({ width }) => width} - 28px);
  height: 100%;

  background-color: black;
  color: white;
`

const Logo = styled(Link)`
  width: 50%;
  margin-bottom: 7.2vh;

  &:hover {
    cursor: pointer;
  }
`

const DateContainer = styled.footer`
  display: flex;
  align-items: center;
  margin: 30px 24px;

  position: fixed;
  left: 0;
  bottom: 0;

  & span {
    margin-right: 4px;
  }
`

const Today = styled.span`
  padding: 2px 8px;

  color: #000000;
  font-weight: 500;
  font-size: 13px;

  background-color: #e5e5e5;

  border-radius: 37px;
`

const TodayDate = styled.span`
  font-size: 14px;
`

function VerticalNavBar({ width }: VerticalNavBarProps) {
  return (
    <Wrapper width={width}>
      <Logo to={ROUTE.main}>
        <Image src={SideMenuLogo} alt="메인로고" width={'100%'} />
      </Logo>
      <VerticalMenuList />
      <DateContainer>
        <Today>Today</Today>
        <TodayDate>{getToday().replace(/-/g, ' - ')}</TodayDate>
      </DateContainer>
    </Wrapper>
  )
}

export default VerticalNavBar

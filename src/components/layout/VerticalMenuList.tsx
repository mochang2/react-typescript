import styled from 'styled-components'
import VerticalMenu, { VerticalMenuProps } from './VerticalMenu'
import {
  WhiteCouponIcon,
  WhiteManageBoardIcon,
  WhiteManagerSettingIcon,
  WhiteMessageIcon,
  WhiteMoneyIcon,
  WhiteProfileIcon,
  WhiteStationManageIcon
} from 'assets/image'
import ROUTE from 'routes/routeMap'

const Wrapper = styled.nav`
  max-height: calc(100% - 250px);

  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

function VerticalMenuList() {
  const menuList: VerticalMenuProps[] = [
    {
      icon: WhiteStationManageIcon,
      name: '스테이션 관리',
      children: []
    },
    {
      icon: WhiteMoneyIcon,
      name: '정산 관리',
      children: []
    },
    {
      icon: WhiteProfileIcon,
      name: '회원 관리',
      children: []
    },
    {
      icon: WhiteCouponIcon,
      name: '쿠폰 관리',
      children: [],
      linkTo: ROUTE.coupon
    },
    {
      icon: WhiteMessageIcon,
      name: '발송 이력 관리',
      children: []
    },
    {
      icon: WhiteManageBoardIcon,
      name: '게시판 관리',
      children: [
        { name: '공지사항', linkTo: ROUTE.notice },
        { name: '자주 묻는 질문', linkTo: ROUTE.faq },
        { name: '신고/문의', linkTo: ROUTE.inquiry }
      ]
    },
    {
      icon: WhiteManagerSettingIcon,
      name: '관리자 설정',
      children: [
        { name: '비밀번호 초기화', linkTo: ROUTE.passwordInitialization },
        { name: 'IP 변경', linkTo: ROUTE.changeIp },
        { name: '통계', linkTo: ROUTE.statistics }
      ]
    }
  ]

  return (
    <Wrapper>
      {menuList.map((menu, index) => {
        return <VerticalMenu key={index} {...menu} />
      })}
    </Wrapper>
  )
}

export default VerticalMenuList

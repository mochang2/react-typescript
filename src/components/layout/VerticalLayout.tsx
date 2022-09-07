import Content from 'components/common/Content'
import React from 'react'
import Header from './Header'
import VerticalNavBar from './VerticalNavBar'

interface VerticalLayoutProps {
  children: React.ReactNode
}

const NAV_BAR_WIDTH = '300px' // 반응형이라면 고정되면 안됨

function VerticalLayout({ children }: VerticalLayoutProps) {
  return (
    <React.Fragment>
      <VerticalNavBar width={NAV_BAR_WIDTH} />
      <Header paddingLeft={NAV_BAR_WIDTH} />
      <Content paddingLeft={NAV_BAR_WIDTH}>{children}</Content>
    </React.Fragment>
  )
}

export default VerticalLayout

import React from 'react'
import { VerticalLayout } from 'components/layout'

const withLayout = (Component: React.ComponentType) => (props: any) => {
  // horizontal layout이 생긴다면
  // vertical vs horizontal 중 사용자 설정을 전역으로 저장(cookie 등)
  // 해당 layout을 고르게 만듦

  const getLayout = () => {
    // switch case
    return VerticalLayout
  }

  const Layout = getLayout()

  return (
    <Layout>
      <Component {...props} />
    </Layout>
  )
}

export default withLayout

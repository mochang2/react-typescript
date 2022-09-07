import { Link } from 'react-router-dom'
import ROUTE from 'routes/routeMap'
import VerticalLayout from 'components/layout/VerticalLayout'

function Main() {
  return (
    <VerticalLayout>
      <Link to={ROUTE.faq}>링크</Link>
      <div>여기는 메인 페이지입니다.</div>
    </VerticalLayout>
  )
}

export default Main

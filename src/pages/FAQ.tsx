import VerticalLayout from 'components/layout/VerticalLayout'
import { Link } from 'react-router-dom'
import ROUTE from 'routes/routeMap'

function FAQ() {
  return (
    <VerticalLayout>
      <Link to={ROUTE.main}>링크</Link>
      <div>여기는 FAQ 페이지입니다.</div>
    </VerticalLayout>
  )
}

export default FAQ

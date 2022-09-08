import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ROUTE from 'routes/routeMap'
import Coupon from 'pages/Coupon'
import Inquiry from 'pages/Inquiry'
import Notice from 'pages/Notice'
import Main from 'pages/Main'
import Faq from 'pages/Faq'
import Page404 from 'pages/Page404'

function App() {
  const USER_NAME = 'Admin'
  localStorage.setItem('username', USER_NAME)

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE.main} element={<Main />} />

        <Route path={ROUTE.coupon} element={<Coupon />} />
        <Route path={ROUTE.notice} element={<Notice />} />
        <Route path={ROUTE.faq} element={<Faq />} />
        <Route path={ROUTE.inquiry} element={<Inquiry />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

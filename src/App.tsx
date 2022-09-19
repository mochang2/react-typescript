import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  Coupon,
  Faq,
  FaqCategoryManagement,
  FaqDetail,
  FaqRegister,
  Inquiry,
  Main,
  Notice,
  Page404
} from 'pages'
import ROUTE from 'routes/routeMap'

function App() {
  const USER_NAME = 'Admin'
  localStorage.setItem('username', USER_NAME)

  // TODO: auth가 생기면 Main 대신 Login페이지로 변경.

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE.main} element={<Main />} />

        <Route path={ROUTE.coupon} element={<Coupon />} />

        <Route path={ROUTE.notice} element={<Notice />} />
        <Route path={ROUTE.faqDetail} element={<FaqDetail />} />
        <Route path={ROUTE.faqRegister} element={<FaqRegister />} />
        <Route path={ROUTE.faq} element={<Faq />} />
        <Route
          path={ROUTE.faqCategoryManagement}
          element={<FaqCategoryManagement />}
        />
        <Route path={ROUTE.inquiry} element={<Inquiry />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

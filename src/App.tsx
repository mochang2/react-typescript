import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ROUTE from 'routes/routeMap'
import Main from 'pages/Main'
import FAQ from 'pages/FAQ'
import Page404 from 'pages/Page404'

function App() {
  const USER_NAME = 'Admin'
  localStorage.setItem('username', USER_NAME)

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE.main} element={<Main />} />
        <Route path={ROUTE.faq} element={<FAQ />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

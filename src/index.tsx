import React from 'react'
import ReactDOM from 'react-dom/client'
import 'settings/index.css'
import GlobalFont from 'settings/fontStyle'
import App from './App'
import reportWebVitals from './reportWebVitals'

if (process.env.NODE_ENV === 'development') {
  // require를 사용할 수도 있음
  // eslint 설정에서 require를 사용하지 못하게 해서 import 비동기 처리를 함
  import('apis/handlers').then((worker) => worker.default.start())
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <GlobalFont />
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

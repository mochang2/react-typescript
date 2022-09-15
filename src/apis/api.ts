import axios from 'axios'

// TODO: api 모듈화하여 모든 곳에서 사용할 수 있도록. 인증이 추가되면 헤더도 추가
// interceptor 추가. 매 요청 전에 만료됐는지 확인하도록 할 수 있음.

const api = axios.create({
  baseURL: '/api',
  headers: {}
})

api.interceptors.request.use(
  (config) => {
    // 요청 성공 직전
    // axios 설정값을 넣음
    return config
  },
  (error) => {
    console.error('API 요청 중 에러 발생')

    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (response) => {
    // http status가 200
    // 응답 성공 직전
    // .then(
    return response
  },

  (error) => {
    console.error('API 응답 중 에러 발생')

    return Promise.reject(error)
  }
)

export default api

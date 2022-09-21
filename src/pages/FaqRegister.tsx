import { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import withLayout from 'hocs/Layout'
import { Header, PageLoading } from 'components/common'
import { FormContent } from 'components/faq'
import api from 'apis/api'
import ROUTES from 'routes/routeMap'
import { FaqFormType } from 'types'

const Wrapper = styled.section`
  margin: 0 1.2vw 9.6vh;

  position: relative;
`

function FaqRegister() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const registerFaq = async ({ categoryId, title, content }: FaqFormType) => {
    try {
      setIsLoading(true)

      await api.post('/faq', {
        categoryId,
        title,
        content
      })

      navigate(ROUTES.faq)
    } catch (err) {
      alert('FAQ 작성에 실패했습니다.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Wrapper>
      <Header content={'FAQ'} route={'게시판 관리 > FAQ > FAQ 작성'} />
      <FormContent onClick={registerFaq} />
      {isLoading && <PageLoading />}
    </Wrapper>
  )
}

export default withLayout(FaqRegister)

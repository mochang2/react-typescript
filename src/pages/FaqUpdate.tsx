import { useState } from 'react'
import styled from 'styled-components'
import { useNavigate, useLocation } from 'react-router-dom'
import withLayout from 'hocs/Layout'
import { Header, PageLoading } from 'components/common'
import { FaqFormContent } from 'components/faq'
import api from 'apis/api'
import ROUTES from 'routes/routeMap'
import { FaqFormType, FaqLocationType } from 'types'

const Wrapper = styled.section`
  margin: 0 1.2vw 9.6vh;

  position: relative;
`

function FaqUpdate() {
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  const updateFaq = async ({ categoryId, title, content }: FaqFormType) => {
    try {
      setIsLoading(true)

      const { id } = location.state as FaqLocationType

      await api.put(`/faq/${id}`, {
        categoryId,
        title,
        content
      })

      navigate(`${ROUTES.notice}/${id}`)
    } catch (err) {
      alert('FAQ 수정에 실패했습니다.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Wrapper>
      <Header content={'FAQ'} route={'게시판 관리 > FAQ > FAQ 수정'} />
      <FaqFormContent onClick={updateFaq} />
      {isLoading && <PageLoading />}
    </Wrapper>
  )
}

export default withLayout(FaqUpdate)

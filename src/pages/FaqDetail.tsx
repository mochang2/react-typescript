import { useState, useEffect, Fragment } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import withLayout from 'hocs/Layout'
import {
  Header,
  PageLoading,
  TransparentButton,
  Dialogbox
} from 'components/common'
import api from 'apis/api'
import { DetailContent } from 'components/faq'
import ROUTES from 'routes/routeMap'
import { FaqDetailType } from 'types'
import { useFaqCategories } from 'hooks'

const Wrapper = styled.section`
  margin: 0 1.2vw 9.6vh;

  position: relative;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 4vh;

  & > button {
    margin-right: 8px;
  }
`

const DialogButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

function FaqDetail() {
  const [isLoading, setIsLoading] = useState(false)
  const [faq, setFaq] = useState<FaqDetailType | null>(null)
  const [openDialog, setOpenDialog] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()
  const { faqCategories } = useFaqCategories()

  useEffect(() => {
    fetchFaq()
  }, [])

  const fetchFaq = async () => {
    try {
      setIsLoading(true)

      const {
        data: { faq }
      } = await api.get(`/faq/${id}`)

      setFaq(faq)
    } catch (err) {
      // do notiong
    } finally {
      setIsLoading(false)
    }
  }

  const reviseFaq = () => {
    const index = faqCategories?.findIndex(
      (category) => category.id === faq?.category.id
    )

    navigate(ROUTES.faqUpdate, {
      state: {
        id,
        categoryIndex: index === -1 ? 0 : index,
        title: faq?.title ?? '',
        content: faq?.content ?? ''
      }
    })
  }

  const deleteFaq = () => {
    setOpenDialog(true)
  }

  const handleAgreement = async () => {
    try {
      await api.delete(`/faq/${id}`)

      alert('삭제되었습니다.')

      navigate(ROUTES.faq)
    } catch (err) {
      alert('삭제에 실패했습니다.')
    }
  }

  const handleClose = () => {
    setOpenDialog(false)
  }

  return (
    <Wrapper>
      <Header content={'FAQ'} route={'게시판 관리 > FAQ > FAQ 상세'} />
      {faq && (
        <Fragment>
          <DetailContent
            category={faq.category.name}
            title={faq.title}
            content={faq.content}
          />
          <ButtonContainer>
            <TransparentButton onClick={reviseFaq} color="#DF1F26">
              수정
            </TransparentButton>
            <TransparentButton onClick={deleteFaq}>삭제</TransparentButton>
          </ButtonContainer>
        </Fragment>
      )}
      {isLoading && <PageLoading />}
      <Dialogbox open={openDialog} title="정말로 삭제하시겠습니까?">
        <DialogButtonContainer>
          <TransparentButton onClick={handleAgreement}>예</TransparentButton>
          <TransparentButton onClick={handleClose}>아니오</TransparentButton>
        </DialogButtonContainer>
      </Dialogbox>
    </Wrapper>
  )
}

export default withLayout(FaqDetail)

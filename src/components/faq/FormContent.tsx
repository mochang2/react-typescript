import { useState, ChangeEvent, MouseEvent, Fragment } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Selection, TransparentButton } from 'components/common'
import styled from 'styled-components'
import { useFaqCategories } from 'hooks'
import ROUTES from 'routes/routeMap'
import { FaqFormType, FaqLocationType } from 'types'

interface FaqFormContentProps {
  onClick: ({ categoryId, title, content }: FaqFormType) => void
}

const FormContainer = styled.div`
  display: grid;
  grid-template-rows: minmax(85px, auto) minmax(726px, auto);
  grid-template-columns: 180px auto;

  color: #000000;

  border: 1px solid #e5e5e5;
  border-radius: 10px;

  & > div:nth-child(3) {
    grid-column: 1 / 3;
  }

  & input::placeholder,
  & text::placeholder {
    color: #c4c4d4;
  }

  & input:focus,
  & textarea:focus {
    outline: none;
  }
`

const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  font-size: 1rem;
  color: #c4c4c4;

  &::after {
    content: '|';

    position: absolute;
    right: 0;

    font-size: 1.2rem;
    color: #e5e5e5;
  }
`

const TitleContainer = styled.div``

const Title = styled.input`
  padding: 18px 30px;

  width: calc(100% - 64px); // border가 가려져서 4px 추가
  height: calc(100% - 36px);

  font-weight: 500;
  font-size: 2rem;

  border: none;
`

const ContentContainer = styled.div``

const Content = styled.textarea`
  padding: 1.2vh 1.2vw;

  width: calc(100% - 2.4vw);
  height: calc(100% - 3vh); // border가 가려져서 4px 추가

  font-weight: 500;
  font-size: 1rem;
  font-family: 'notosans';

  border-top: 1px solid #e5e5e5;
  border-right: 0;
  border-bottom: 0;
  border-left: 0;

  resize: none;
`

const ButtonContainer = styled.div`
  margin-top: 4vh;

  display: flex;
  justify-content: space-between;

  & > button {
    margin-right: 8px;
  }
`

const RegisterButton = styled.button`
  padding: 9.5px 23.5px;

  min-width: 84px;
  height: 42px;

  font-size: 1rem;
  color: #ffffff;

  background-color: #df1f26;

  border-radius: 10px;
  border: none;

  &:hover {
    cursor: pointer;
  }
`

function FaqFormContent({ onClick }: FaqFormContentProps) {
  // state의 초기값을 위해 다른 훅을 useState 위에 선언
  // primitive type
  const locationState = useLocation().state as FaqLocationType

  const [categoryIndex, setCategoryIndex] = useState(
    locationState.categoryIndex ?? 0
  )
  const [title, setTitle] = useState(locationState.title ?? '')
  const [content, setContent] = useState(locationState.content ?? '')
  const { faqCategories } = useFaqCategories()
  const navigate = useNavigate()

  const handleCategoryIndex = (event: MouseEvent) => {
    const element = event.target as HTMLElement
    const index = parseInt(element.ariaValueText as string)
    setCategoryIndex(index)
  }

  const handleTitle = (event: ChangeEvent) => {
    const element = event.target as HTMLInputElement
    setTitle(element.value)
  }

  const handleContent = (event: ChangeEvent) => {
    const element = event.target as HTMLTextAreaElement
    setContent(element.value)
  }

  const handleCancel = () => {
    navigate(`${ROUTES.notice}/${locationState.id}`)
  }

  const handleSubmit = () => {
    if (title.length === 0) {
      alert('제목을 입력해주세요.')
    } else {
      onClick({
        categoryId: faqCategories[categoryIndex].id,
        title,
        content
      })
    }
  }

  return (
    <Fragment>
      <FormContainer>
        <Category>
          <Selection
            options={faqCategories}
            selectedOption={faqCategories[categoryIndex]?.name}
            onClick={handleCategoryIndex}
          />
        </Category>
        <TitleContainer>
          <Title
            placeholder="제목을 입력해주세요."
            value={title}
            onChange={handleTitle}
          ></Title>
        </TitleContainer>
        <ContentContainer>
          <Content
            placeholder="내용을 입력해주세요."
            value={content}
            onChange={handleContent}
          ></Content>
        </ContentContainer>
      </FormContainer>
      <ButtonContainer>
        <TransparentButton onClick={handleCancel}>취소</TransparentButton>
        <RegisterButton onClick={handleSubmit}>등록</RegisterButton>
      </ButtonContainer>
    </Fragment>
  )
}

export default FaqFormContent

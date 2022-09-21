import { useState, ChangeEvent } from 'react'
import styled from 'styled-components'
import { Modal, PageLoading, TransparentButton } from 'components/common'
import api from 'apis/api'
import { useFaqCategories } from 'hooks'

interface CategoryRevisionModalProps {
  onClose: () => void
}

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin: 2.4vh 0;
`

const NameInput = styled.input`
  padding: 4px 10px 4px 10px;

  height: 42px;
  width: 300px;

  border: 1px solid #c4c4c4;
  border-radius: 10px;
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 2%;
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

function CategoryCreationModal({ onClose }: CategoryRevisionModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [categoryName, setCategoryName] = useState('')
  const { fetchFaqCategories } = useFaqCategories()

  const handleCategoryName = (event: ChangeEvent) => {
    const element = event.target as HTMLInputElement
    setCategoryName(element.value.trim())
  }

  const submitCategory = async () => {
    if (categoryName.length === 0) {
      alert('이름은 1글자 이상이어야 합니다.')
      return
    }

    try {
      setIsLoading(true)

      await api.post('/faq/category', {
        categoryName
      })

      await fetchFaqCategories()
    } catch (err) {
      // do nothing
    } finally {
      setIsLoading(false)
      onClose()
    }
  }

  return (
    <Modal title="카테고리 추가" onClose={onClose}>
      <NameContainer>
        <NameInput
          placeholder="이름을 입력해주세요."
          value={categoryName}
          onChange={handleCategoryName}
        />
      </NameContainer>
      <ButtonContainer>
        <TransparentButton onClick={onClose}>취소</TransparentButton>
        <RegisterButton onClick={submitCategory}>등록</RegisterButton>
      </ButtonContainer>
      {isLoading && <PageLoading />}
    </Modal>
  )
}

export default CategoryCreationModal

import { useState, ChangeEvent, Fragment } from 'react'
import styled from 'styled-components'
import {
  Checkbox,
  Image,
  PageLoading,
  TransparentButton
} from 'components/common'
import { useFaqCategories } from 'hooks'
import { BlackHamburger } from 'assets/image'
import api from 'apis/api'
import { FaqCategoryType } from 'types'
import CategoryRevisionModal from './CategoryRevisionModal'

const Wrapper = styled.div<{ rowCount: number }>`
  display: grid;
  grid-template-columns: 100px minmax(128px, 1fr) 80px 50px;
  grid-template-rows: ${({ rowCount }) => `repeat(${rowCount}, 60px)`};
  margin: 2.4vh 0 4.8vh;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > div:nth-child(2) {
    grid-column: 2 / 5;
  }

  & > div:nth-child(4n + 4),
  & > div:nth-child(2) {
    justify-content: flex-start;

    padding-left: 40px;
  }
`

const HeaderCell = styled.div`
  position: relative;

  font-weight: 700;

  border-bottom: 2px solid #e5e5e5;

  &:first-child::after {
    position: absolute;
    right: 0;
    bottom: 21px;

    content: '|';
    color: #e5e5e5;
  }
`

const DataCell = styled.div`
  font-weight: 500;

  border-bottom: 1px solid #e5e5e5;
`

const ChangeButton = styled.button`
  padding: 6px 10px;

  font-size: 12px;

  background-color: transparent;

  border: 1px solid #c4c4c4;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }
`

function FaqCategoryList() {
  const { faqCategories, fetchFaqCategories } = useFaqCategories()
  const [isLoading, setIsLoading] = useState(false)
  const [checked, setChecked] = useState(
    Array.from({ length: faqCategories.length }, () => false)
  )
  const [open, setOpen] = useState(false)
  const [category, setCategory] = useState<FaqCategoryType | null>(null)

  const handleParentCheckbox = () => {
    const allChecked = checked.every((check) => check)

    if (allChecked) {
      setChecked(Array.from({ length: faqCategories.length }, () => false))
    } else {
      setChecked(Array.from({ length: faqCategories.length }, () => true))
    }
  }

  const handleCheckbox = (event: ChangeEvent) => {
    const element = event.target as HTMLElement
    const id = parseInt(element.id)

    if (!isNaN(id)) {
      setChecked([
        ...checked.slice(0, id),
        !checked[id],
        ...checked.slice(id + 1, faqCategories.length)
      ])
    }
  }

  const handleOpen = (category: FaqCategoryType) => {
    setCategory(category)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const getCheckedCategoryIds = () => {
    return faqCategories
      .filter((_, index) => checked[index])
      .map((category) => category.id)
  }

  const deleteCategory = async () => {
    const ids = getCheckedCategoryIds()

    if (ids.length === 0) {
      alert('삭제할 카테고리를 선택해주세요')
      return
    }

    try {
      setIsLoading(true)

      await api.delete('/faq/categories', { data: ids })
      await fetchFaqCategories()
    } catch (err) {
      // do nothing
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Fragment>
      <Wrapper rowCount={faqCategories.length + 1}>
        <HeaderCell>
          <Checkbox
            onChange={handleParentCheckbox}
            checked={checked.every((check) => check)}
          />
        </HeaderCell>
        <HeaderCell>카테고리</HeaderCell>
        {faqCategories.map((category, index) => (
          <Fragment key={category.id}>
            <DataCell>
              <Checkbox
                onChange={handleCheckbox}
                id={index}
                checked={checked[index]}
              />
            </DataCell>
            <DataCell>{category.name}</DataCell>
            <DataCell>
              <ChangeButton onClick={() => handleOpen(category)}>
                이름 수정
              </ChangeButton>
            </DataCell>
            <DataCell>
              <Image src={BlackHamburger} width={'22px'} />
            </DataCell>
          </Fragment>
        ))}
      </Wrapper>
      <TransparentButton onClick={deleteCategory}>선택삭제</TransparentButton>
      {open && (
        <CategoryRevisionModal category={category} onClose={handleClose} />
      )}
      {isLoading && <PageLoading />}
    </Fragment>
  )
}

export default FaqCategoryList

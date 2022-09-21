import { MouseEvent, Fragment, useState, useEffect, ChangeEvent } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  Checkbox,
  Pagination,
  TransparentButton,
  PageLoading
} from 'components/common'
import { getDate } from 'libs/datetime.helper'
import api from 'apis/api'
import ROUTES from 'routes/routeMap'
import { FaqType } from 'types'

interface FaqListProps {
  faqs: FaqType[]
  fetchFaqs: () => void
}

const PER_PAGE_COUNT = 10
const HEADERS = ['글번호', '카테고리', '제목', '등록일', '등록자']

const GridBox = styled.div<{ rowCount: number }>`
  display: grid;
  grid-template-columns: 100px 128px 128px minmax(128px, 1fr) 128px 128px;
  grid-template-rows: ${({ rowCount }) => `repeat(${rowCount}, 60px)`};
  margin: 2.4vh 0 4.8vh;

  & div {
    display: flex;
    align-items: center;
  }

  & div:not(:nth-child(6n + 4)) {
    justify-content: center;
  }

  & div:nth-child(6n + 4) {
    padding: 0 30px;
  }
`

const HeaderCell = styled.div`
  font-weight: 700;

  border-left: 1px solid #e5e5e5;
  border-bottom: 2px solid #e5e5e5;

  &:first-child {
    border-left: none;
  }
`

const DataCell = styled.div`
  font-weight: 500;

  border-bottom: 1px solid #e5e5e5;
`

const Text = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const TitleLink = styled(Link)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const currentPageFaqs = (faqs: FaqType[], page: number) => {
  return faqs.slice((page - 1) * PER_PAGE_COUNT, page * PER_PAGE_COUNT)
}

const getInitialChecked = (faqs: FaqType[], page: number, value = false) => {
  return Array.from({ length: currentPageFaqs(faqs, page).length }, () => value)
}

function FaqList({ faqs, fetchFaqs }: FaqListProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [checked, setChecked] = useState(getInitialChecked(faqs, page))

  const submitSelectedFaqs = async () => {
    try {
      setIsLoading(true)

      const currentFaqs = currentPageFaqs(faqs, page)
      const ids = currentFaqs
        .filter((_, index) => checked[index])
        .map((faq) => faq.no)

      if (ids.length === 0) {
        alert('삭제할 FAQ를 선택해주세요.')
        return
      }

      await api.delete('/faq', {
        data: ids
      })

      fetchFaqs()
      setChecked(getInitialChecked(faqs, page))
    } catch (err) {
      alert('삭제에 실패했습니다.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleParentCheckbox = () => {
    const allChecked = checked.every((check) => check)

    if (allChecked) {
      setChecked(getInitialChecked(faqs, page))
    } else {
      setChecked(getInitialChecked(faqs, page, true))
    }
  }

  const handleCheckbox = (event: ChangeEvent) => {
    const element = event.target as HTMLElement
    const id = parseInt(element.id)

    if (!isNaN(id)) {
      setChecked([
        ...checked.slice(0, id),
        !checked[id],
        ...checked.slice(id + 1, currentPageFaqs(faqs, page).length)
      ])
    }
  }

  const handlePage = (event: MouseEvent) => {
    const element = event.target as HTMLElement
    const newPage = parseInt(element.ariaLabel as string)

    if (!isNaN(newPage)) {
      setPage(newPage)
    }
  }

  useEffect(() => {
    setChecked(getInitialChecked(faqs, page))
  }, [page])

  return (
    <Fragment>
      <TransparentButton onClick={submitSelectedFaqs}>
        선택 삭제
      </TransparentButton>
      {isLoading && <PageLoading />}
      <GridBox rowCount={currentPageFaqs(faqs, page).length + 1}>
        <HeaderCell>
          <Checkbox
            onChange={handleParentCheckbox}
            checked={checked.every((check) => check)}
          />
        </HeaderCell>
        {HEADERS.map((header, index) => (
          <HeaderCell key={index}>{header}</HeaderCell>
        ))}
        {currentPageFaqs(faqs, page).map((faq, index) => (
          <Fragment key={faq.no}>
            <DataCell>
              <Checkbox
                onChange={handleCheckbox}
                id={index}
                checked={checked[index]}
              />
            </DataCell>
            <DataCell>{faq.no}</DataCell>
            <DataCell>
              <Text>{faq.category}</Text>
            </DataCell>
            <DataCell>
              <TitleLink to={`${ROUTES.notice}/${faq.no}`}>
                {faq.title}
              </TitleLink>
            </DataCell>
            <DataCell>{getDate(faq.createdAt)}</DataCell>
            <DataCell>
              <Text>{faq.writer}</Text>
            </DataCell>
          </Fragment>
        ))}
      </GridBox>
      <Pagination
        currentPage={page}
        totalCount={faqs.length}
        perCount={PER_PAGE_COUNT}
        pageRange={9}
        onChange={handlePage}
      />
    </Fragment>
  )
}

export default FaqList

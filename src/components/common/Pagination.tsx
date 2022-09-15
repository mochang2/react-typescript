import { MouseEvent } from 'react'
import styled from 'styled-components'
import Image from './Image'
import { WhiteLeftArrow, WhiteLeftDoubleArrow } from 'assets/image'

interface PaginationProps {
  currentPage: number
  totalCount: number
  perCount: number
  pageRange?: number
  prevPage?: boolean
  nextPage?: boolean
  prevEndPage?: boolean
  nextEndPage?: boolean
  onChange: (event: MouseEvent) => void
}

const Wrapper = styled.ul`
  display: flex;
  justify-content: center;

  font-size: 0.75rem;

  list-style: none;
  padding: 0;
`

const Item = styled.li<{ $active?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 4px;

  width: 30px;
  height: 30px;

  font-weight: ${({ $active }) => ($active ? '900' : '500')};
  color: ${({ $active }) => ($active ? '#DF1F26' : '#000000')};

  &:hover {
    cursor: pointer;
  }
`

const BehindImage = styled(Image)<{ $rotate?: boolean }>`
  transform: ${({ $rotate }) => ($rotate ? 'rotate(180deg)' : '')};
  z-index: -1;
`

function Pagination({
  currentPage,
  totalCount,
  perCount,
  pageRange = 5,
  prevPage = true,
  nextPage = true,
  prevEndPage = true,
  nextEndPage = true,
  onChange
}: PaginationProps) {
  const totalPageCount = Math.ceil(totalCount / perCount)
  const halfPageRange = Math.ceil(pageRange / 2)

  const getPageNumbers = (): number[] => {
    if (totalPageCount <= pageRange) {
      return Array.from({ length: totalPageCount }, (_, index) => index + 1)
    }

    if (currentPage <= halfPageRange) {
      return Array.from({ length: pageRange }, (_, index) => index + 1)
    }

    if (currentPage > totalPageCount - halfPageRange) {
      return Array.from(
        { length: pageRange },
        (_, index) => totalPageCount - pageRange + index + 1
      )
    }

    return Array.from(
      { length: pageRange },
      (_, index) => currentPage - halfPageRange + index + 1
    )
  }

  return (
    <Wrapper onClick={onChange}>
      {prevEndPage && (
        <Item aria-label="1">
          <BehindImage src={WhiteLeftDoubleArrow} width={'12rem'} />
        </Item>
      )}
      {prevPage && (
        <Item
          aria-label={currentPage === 1 ? '1' : (currentPage - 1).toString()}
        >
          <BehindImage src={WhiteLeftArrow} width={'6rem'} />
        </Item>
      )}
      {getPageNumbers().map((number) => (
        <Item
          key={number}
          $active={currentPage === number}
          aria-label={number.toString()}
        >
          {number}
        </Item>
      ))}
      {nextPage && (
        <Item
          aria-label={
            currentPage === totalPageCount
              ? totalPageCount.toString()
              : (currentPage + 1).toString()
          }
        >
          <BehindImage src={WhiteLeftArrow} $rotate width={'6rem'} />
        </Item>
      )}
      {nextEndPage && (
        <Item aria-label={totalPageCount.toString()}>
          <BehindImage src={WhiteLeftDoubleArrow} $rotate width={'12rem'} />
        </Item>
      )}
    </Wrapper>
  )
}

export default Pagination

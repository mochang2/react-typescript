import { useState, useEffect, MouseEvent, ChangeEvent } from 'react'
import styled from 'styled-components'
import withLayout from 'hocs/Layout'
import {
  Header,
  SearchInput,
  Selection,
  Image,
  TransparentButton,
  PageLoading
} from 'components/common'
import { FaqList } from 'components/faq'
import { useFaqCategories } from 'hooks'
import { RedDelete } from 'assets/image'
import { FaqType } from 'types'
import api from 'apis/api'

const DEFAULT_OPTION = '전체'

const Wrapper = styled.section`
  margin: 0 1.2vw 9.6vh;

  position: relative;
`

const Filter = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3.6vh;

  & input {
    margin: 0 10px 0 18px;
  }
`

const ClearFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #c4c4c4;
  font-size: 14px;

  &:hover {
    cursor: pointer;
  }
`

const ButtonContainer = styled.div`
  position: absolute;
  right: 0;

  & button {
    margin-right: 8px;
  }
`

function Faq() {
  const [faqs, setFaqs] = useState<FaqType[] | null>(null)
  const [categoryOption, setCategoryOption] = useState(DEFAULT_OPTION)
  const [searchText, setSearchText] = useState('')

  const { faqCategories } = useFaqCategories()

  useEffect(() => {
    fetchFaqs()
  }, [])

  const fetchFaqs = async () => {
    try {
      const {
        data: { faqs }
      } = await api.get('/faq')

      setFaqs(faqs)
    } catch (err) {
      // do notiong
    }
  }

  const handleCategoryOption = (event: MouseEvent) => {
    const element = event.target as HTMLElement
    setCategoryOption(element.ariaValueText as string)
  }

  const handleSearchText = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value)
  }

  const clearFaqFilter = () => {
    setCategoryOption(DEFAULT_OPTION)
    setSearchText('')
  }

  const getFilteredFaqs = (faqs: FaqType[]): FaqType[] => {
    const category = categoryOption === DEFAULT_OPTION ? '' : categoryOption
    return faqs.filter(
      (faq) => faq.category.includes(category) && faq.title.includes(searchText)
    )
  }

  // performance: Header -> FaqHeader로 바꿔서 memo

  return (
    <Wrapper>
      <Header content={'FAQ'} route={'게시판 관리 > FAQ'} />
      <Filter>
        <Selection
          defaultOption={DEFAULT_OPTION}
          options={faqCategories}
          selectedOption={categoryOption}
          onClickOption={handleCategoryOption}
        />
        <SearchInput value={searchText} onChangeValue={handleSearchText} />
        {(categoryOption !== DEFAULT_OPTION || searchText !== '') && (
          <ClearFilter onClick={clearFaqFilter}>
            <Image src={RedDelete} width={'16px'} />
            초기화
          </ClearFilter>
        )}
      </Filter>
      <ButtonContainer>
        <TransparentButton onClick={(e) => console.log(e)}>
          카테고리 관리
        </TransparentButton>
        <TransparentButton onClick={(e) => console.log(e)} color={'#DF1F26'}>
          FAQ 등록
        </TransparentButton>
      </ButtonContainer>
      {faqs ? (
        <FaqList faqs={getFilteredFaqs(faqs)} fetchFaqs={fetchFaqs} />
      ) : (
        <PageLoading />
      )}
    </Wrapper>
  )
}

export default withLayout(Faq)

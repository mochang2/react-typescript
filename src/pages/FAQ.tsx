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
import { Link } from 'react-router-dom'
import { FaqList } from 'components/faq'
import { useFaqCategories } from 'hooks'
import { RedDelete } from 'assets/image'
import ROUTES from 'routes/routeMap'
import api from 'apis/api'
import { FaqType } from 'types'

const defaultOption = {
  id: 0,
  name: '전체'
}

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

  & > button {
    margin-right: 8px;
  }
`

function Faq() {
  const [faqs, setFaqs] = useState<FaqType[] | null>(null)
  const [categoryOption, setCategoryOption] = useState(defaultOption.name)
  const [searchText, setSearchText] = useState('')

  const { faqCategories } = useFaqCategories(defaultOption)

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
      alert('faq를 가져오는데 실패했습니다.')
      setFaqs([])
    }
  }

  const handleCategoryOption = (event: MouseEvent) => {
    const element = event.target as HTMLElement
    const index = parseInt(element.ariaValueText as string)
    setCategoryOption(faqCategories[index].name)
  }

  const handleSearchText = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value)
  }

  const clearFaqFilter = () => {
    setCategoryOption(defaultOption.name)
    setSearchText('')
  }

  const getFilteredFaqs = (faqs: FaqType[]): FaqType[] => {
    const category = categoryOption === defaultOption.name ? '' : categoryOption
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
          options={faqCategories}
          selectedOption={categoryOption}
          onClick={handleCategoryOption}
        />
        <SearchInput value={searchText} onChangeValue={handleSearchText} />
        {(categoryOption !== defaultOption.name || searchText !== '') && (
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
        <TransparentButton color={'#DF1F26'}>
          <Link to={ROUTES.faqRegister}>FAQ 등록</Link>
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

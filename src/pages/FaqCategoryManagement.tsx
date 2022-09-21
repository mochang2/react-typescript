import styled from 'styled-components'
import withLayout from 'hocs/Layout'
import { Header } from 'components/common'
import { CategoryCreationButton, CategoryList } from 'components/faq'

const Wrapper = styled.section`
  margin: 0 1.2vw 9.6vh;

  position: relative;
`

const ButtonContainer = styled.div`
  float: right;
`

function FaqCategoryManagement() {
  return (
    <Wrapper>
      <Header content={'FAQ'} route={'게시판 관리 > FAQ > 카테고리 관리'} />
      <CategoryList />
      <ButtonContainer>
        <CategoryCreationButton />
      </ButtonContainer>
    </Wrapper>
  )
}

export default withLayout(FaqCategoryManagement)

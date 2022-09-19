import { useRecoilState } from 'recoil'
import { FaqCategoryState } from 'stores/faq'
import api from 'apis/api'
import { FaqCategoryType } from 'types'

const useFaqCategories = (defaultCategory?: FaqCategoryType) => {
  const [faqCategories, setFaqCategories] = useRecoilState(FaqCategoryState)

  async function fetchFaqCategories() {
    try {
      const {
        data: { categories }
      } = await api.get('/faq/categories')

      setFaqCategories(categories)
    } catch (err) {
      alert('카테고리를 가져오는데 실패했습니다. 제목을 먼저 입력해주세요.')
    }
  }

  if (faqCategories.length === 0) {
    fetchFaqCategories()
  }

  return {
    faqCategories: defaultCategory
      ? [{ ...defaultCategory }, ...faqCategories]
      : faqCategories,
    fetchFaqCategories
  }
}

export default useFaqCategories

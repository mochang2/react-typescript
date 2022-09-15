import { useRecoilState } from 'recoil'
import { FaqCategoryState } from 'stores/faq'
import api from 'apis/api'

const useFaqCategories = () => {
  const [faqCategories, setFaqCategories] = useRecoilState(FaqCategoryState)

  async function fetchFaqCategories() {
    try {
      const {
        data: { categories }
      } = await api.get('/faq/categories')

      setFaqCategories(categories)
    } catch (err) {
      // do nothing
    }
  }

  if (faqCategories.length === 0) {
    fetchFaqCategories()
  }

  return {
    faqCategories,
    fetchFaqCategories
  }
}

export default useFaqCategories

import React, { useState, useEffect } from 'react'
import withLayout from 'hocs/Layout'
import api from 'apis/api'
import { FaqCategoryType } from 'types'

function Faq() {
  // TODO: recoil + hook으로 빼기(메타 데이터)
  const [categories, setCategories] = useState<FaqCategoryType[]>([])

  useEffect(() => {
    async function getFaqs() {
      const {
        data: { categories }
      } = await api.get('/faq/categories')

      setCategories(categories)
    }

    getFaqs()
  }, [])

  return (
    <React.Fragment>
      <div>여기는 FAQ 카테고리 페이지입니다.</div>
      {categories.length !== 0 &&
        categories.map((category) => {
          return <div key={category.id}>{category.name}</div>
        })}
    </React.Fragment>
  )
}

export default withLayout(Faq)

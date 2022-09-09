import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import withLayout from 'hocs/Layout'
import api from 'apis/api'
import ROUTE from 'routes/routeMap'
import { FaqType } from 'types'

function Faq() {
  const [faqs, setFaqs] = useState<FaqType[]>([])

  useEffect(() => {
    async function getFaqs() {
      const {
        data: { faqs }
      } = await api.get('/faq')

      setFaqs(faqs)
    }

    getFaqs()
  }, [])

  return (
    <React.Fragment>
      <div>여기는 FAQ 페이지입니다.</div>
      {faqs.length !== 0 &&
        faqs.map((faq) => {
          return (
            <div key={faq.id}>
              {faq.category} {faq.title} {faq.writer}
            </div>
          )
        })}
      <Link to={ROUTE.faqCategoryManagement}>to category</Link>
    </React.Fragment>
  )
}

export default withLayout(Faq)

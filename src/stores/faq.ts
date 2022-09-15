import { atom } from 'recoil'
import { FaqCategoryType } from 'types'

export const FaqCategoryState = atom<FaqCategoryType[]>({
  key: 'faq-category-state',
  default: []
})

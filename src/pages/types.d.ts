declare module 'types' {
  interface FaqType {
    id: number
    category: string
    title: string
    createdAt: string
    writer: string
  }

  interface FaqCategoryType {
    id: number
    name: string
  }
}

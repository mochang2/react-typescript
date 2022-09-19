declare module 'types' {
  interface FaqType {
    no: number
    category: string
    title: string
    createdAt: string
    writer: string
  }

  interface FaqDetailType {
    no: number
    category: {
      id: number
      name: string
    }
    title: string
    content: string
  }

  interface FaqFormType {
    categoryId: number
    title: string
    content: string
  }
}

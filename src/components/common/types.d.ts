declare module 'types' {
  interface TitleHeaderType {
    field: string
    displayName: string
    width?: string
    height?: string
    headerAlign?:
      | 'start'
      | 'end'
      | 'left'
      | 'right'
      | 'center'
      | 'justify'
      | 'match-parent'
  }
}

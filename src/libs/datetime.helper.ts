export const getToday = () => {
  return new Date().toISOString().slice(0, 10)
}

export const getDate = (datetime: string) => {
  return datetime.split(' ')[0]
}

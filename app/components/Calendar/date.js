export const format = (dateStr, layout) => {
  const padzero = (num) => (num < 10 ? `0${num}` : `${num}`)

  const date = new Date(dateStr)
  const year = date.getFullYear()
  const month = padzero(date.getMonth() + 1)
  const day = padzero(date.getDate())
  const hour = padzero(date.getHours())
  const minute = padzero(date.getMinutes())
  const second = padzero(date.getSeconds())

  switch (layout) {
    case 'YYYY-MM-DD HH:mm:ss': {
      return `${year}-${month}-${day} ${hour}:${minute}:${second}`
    }
    case 'YYYY-MM-DD': {
      return `${year}-${month}-${day}`
    }
    default:
      throw new Error('unsupported')
  }
}

export const shiftDate = (date, numDays) => {
  const newDate = new Date(date)
  newDate.setDate(newDate.getDate() + numDays)
  return newDate
}

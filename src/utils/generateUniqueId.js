export const generateUniqueId = () => {
  const datePart = new Date().getTime().toString(36)
  const randomPart = Math.random().toString(36).substring(2, 8)
  return `${datePart}-${randomPart}`
}

import { Item } from '@/shared/types/item'

export const generateShareableLink = (items: Item[]): string => {
  const serializedData = JSON.stringify(items)
  const encodedData = encodeURIComponent(serializedData)
  const url = `${window.location.origin}?sharedList=${encodedData}`

  return url
}

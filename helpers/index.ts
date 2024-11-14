import { ItemType } from '@/types/item'

export const getCurrentState = (name: string) => {
  try {
    const currentState = JSON.parse(window.localStorage.getItem(name) || '{}')

    return currentState
  } catch (err) {
    window.localStorage.setItem(name, '{}')
  }
}

export function getErrorMessage(error: any): string | null {
  return error?.message ? String(error.message) : null
}

export const parseProsConsText = (responseText: string) => {
  try {
    const jsonArrays = responseText.match(/\[.*?\]/gs)

    if (!jsonArrays || jsonArrays.length === 0) {
      throw new Error('No valid JSON arrays found in response text')
    }

    const jsonString = jsonArrays[jsonArrays.length - 1]

    const parsedData = JSON.parse(jsonString)

    if (Array.isArray(parsedData)) {
      return parsedData.map((item, index) => ({
        id: (index + 1).toString(),
        name: item.name.toString(),
        weight: 0,
        type: item.type === 'pros' ? ItemType.Pros : ItemType.Cons,
      }))
    } else {
      throw new Error('Parsed data is not an array')
    }
  } catch (error) {
    console.error('Error parsing pros/cons list:', error)

    return []
  }
}

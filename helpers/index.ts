import { FieldError } from 'react-hook-form'

import { Item, ItemType } from '@/types/item'

export const getCurrentState = (name: string) => {
  try {
    const currentState = JSON.parse(window.localStorage.getItem(name) || '{}')

    return currentState
  } catch (err) {
    window.localStorage.setItem(name, '{}')
  }
}

export function getErrorMessage(error: FieldError | undefined): string | null {
  return error?.message ? String(error.message) : null
}

export const parseProsConsText = (responseText: string) => {
  try {
    const jsonArrays = responseText.match(/\[[\s\S]*?\]/g)

    if (!jsonArrays || jsonArrays.length === 0) {
      throw new Error(
        'No valid JSON arrays found in response text. Try to reformulate the ideas and generate them again.',
      )
    }

    const jsonString = jsonArrays[jsonArrays.length - 1]
    const parsedData = JSON.parse(jsonString)

    if (!Array.isArray(parsedData)) {
      throw new Error(
        'Parsed data is not an array of pros and cons. Try to reformulate the ideas and generate them again.',
      )
    }

    const data = parsedData.map(item => ({
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      name: item.name.toString(),
      weight: 0,
      type: item.type === 'pros' ? ItemType.Pros : ItemType.Cons,
    }))

    return { data, error: null }
  } catch (error) {
    return {
      data: [],
      error:
        error instanceof Error
          ? error.message
          : 'Error parsing pros/cons list: An unknown error occurred. Try to reformulate the ideas and generate them again.',
    }
  }
}

export const generateShareableLink = (items: Item[]): string => {
  const serializedData = JSON.stringify(items)
  const encodedData = encodeURIComponent(serializedData)
  const url = `${window.location.origin}?sharedList=${encodedData}`

  return url
}

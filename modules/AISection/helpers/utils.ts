import { nanoid } from 'nanoid'

import { ProsConsItem, ProsConsType } from '@/shared/types/item'

import { ERR_NO_JSON_ARRAYS, ERR_NOT_AN_ARRAY, ERR_UNKNOWN } from './constants'

type ProsConsRawData = {
  name: string
  type: 'pros' | 'cons'
}

const mapProsConsData = (data: ProsConsRawData[]): ProsConsItem[] =>
  data.map(item => ({
    id: nanoid(),
    name: item.name.toString(),
    weight: 0,
    type: item.type === 'pros' ? ProsConsType.Pros : ProsConsType.Cons,
  }))

export const parseProsConsText = (responseText: string) => {
  try {
    const jsonMatches = responseText.match(/\[[\s\S]*?\]/g)

    if (!jsonMatches || jsonMatches.length === 0) {
      throw new Error(ERR_NO_JSON_ARRAYS)
    }

    const lastJsonArrayMatch = jsonMatches[jsonMatches.length - 1]
    const parsedData = JSON.parse(lastJsonArrayMatch)

    if (!Array.isArray(parsedData)) {
      throw new Error(ERR_NOT_AN_ARRAY)
    }

    const data = mapProsConsData(parsedData)

    return { data, error: null }
  } catch (error) {
    return {
      data: [],
      error: error instanceof Error ? error.message : ERR_UNKNOWN,
    }
  }
}

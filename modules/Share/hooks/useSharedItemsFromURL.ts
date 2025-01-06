'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import { useProsConsStore } from '@/shared/store'
import { Item } from '@/shared/types/item'

const isValidItem = (item: unknown): item is Item =>
  typeof item === 'object' &&
  item !== null &&
  typeof (item as Item).id === 'string' &&
  typeof (item as Item).name === 'string' &&
  typeof (item as Item).weight === 'number' &&
  ['pros', 'cons'].includes((item as Item).type)

export const useSharedItemsFromURL = () => {
  const searchParams = useSearchParams()
  const [setSharedItems, setSharedItemsError] = useProsConsStore(state => [
    state.setSharedItems,
    state.setSharedItemsError,
  ])

  const [error, setError] = useState<string | null>(null)
  const sharedList = searchParams.get('sharedList')

  useEffect(() => {
    setSharedItemsError('')

    if (sharedList) {
      try {
        const decodedData = decodeURIComponent(sharedList)
        const parsedItems = JSON.parse(decodedData)

        if (
          Array.isArray(parsedItems) &&
          parsedItems.every(item => isValidItem(item))
        ) {
          setSharedItems(parsedItems)
        }
      } catch (currentError) {
        console.error('Error while decoding URL data:', currentError)
        setError(
          'Error while decoding shared list from URL: parsed data in URL is not a valid array',
        )
        setSharedItemsError(
          'Error while decoding shared list from URL: parsed data in URL is not a valid array',
        )
      }
    } else {
      setSharedItems([])
    }
  }, [sharedList, setSharedItems])

  return error
}

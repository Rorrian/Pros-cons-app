import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useRef, useTransition } from 'react'

import huggingFaceService from '@/services/huggingFaceService'
import { useProsConsStore } from '@/store'
import { Item } from '@/types/item'

interface FormData {
  idea: string
  resetCheckbox: boolean
}

export function useAIVariants() {
  const setAiItems = useProsConsStore(state => state.setAiItems)
  const [isPending, startTransition] = useTransition()
  const resetCheckboxValueRef = useRef<boolean | null>(null)

  const {
    mutate: generateProsCons,
    isPending: isGenerateProsConsPending,
    error,
  } = useMutation<Item[], Error, FormData>({
    mutationKey: ['generate-pros-cons'],
    mutationFn: (data: FormData) => {
      resetCheckboxValueRef.current = data.resetCheckbox

      return huggingFaceService.generateProsCons(data.idea)
    },
    onSuccess: data => {
      startTransition(() => {
        setAiItems(data, resetCheckboxValueRef.current || false)
      })
    },
    onError: (error: any) => {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data?.message || 'An error occurred'
        console.error(message)
      } else {
        console.error('An unknown error occurred')
      }
    },
  })

  return {
    isLoading: isPending || isGenerateProsConsPending,
    error,
    generateProsCons,
  }
}

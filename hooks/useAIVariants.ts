import { useMutation } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'
import { useRef, useTransition } from 'react'

import huggingFaceService from '@/services/huggingFaceService'
import { useProsConsStore } from '@/store'
import { Item } from '@/types/item'

export type FormData = {
  idea: string
  resetCheckbox: boolean
}

type CustomAxiosError = AxiosError & {
  response?: {
    data: {
      error: string
    }
  }
}

export function useAIVariants() {
  const setAiItems = useProsConsStore(state => state.setAiItems)
  const [isPending, startTransition] = useTransition()
  const resetCheckboxValueRef = useRef<boolean | null>(null)

  const {
    mutate: generateProsCons,
    isPending: isGenerateProsConsPending,
    error,
  } = useMutation<Item[], CustomAxiosError, FormData>({
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
    onError: (currentError: any) => {
      if (axios.isAxiosError(currentError)) {
        const errorMessage =
          currentError.response?.data?.error ||
          currentError.message ||
          'An unknown error occurred'

        if (currentError.response) {
          console.error(
            `Error Status: ${currentError.response.status} - ${errorMessage}`,
          )
        } else {
          console.error('Network Error:', errorMessage)
        }
      } else {
        console.error('An unknown error occurred:', currentError)
      }
    },
  })

  return {
    isLoading: isPending || isGenerateProsConsPending,
    error: error?.response?.data?.error,
    generateProsCons,
  }
}

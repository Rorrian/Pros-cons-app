import { useMutation } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'
import { useRef, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import {
  AI_IDEA_MAX_LENGTH,
  AI_IDEA_MIN_LENGTH,
  AI_IDEA_REGEXP,
} from '@/helpers/constants'
import huggingFaceService from '@/services/huggingFaceService'
import { useProsConsStore } from '@/store'
import { Item } from '@/types/item'

export type AIRequestFormData = {
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

export function useAIForm() {
  const { t } = useTranslation()
  const [isPending, startTransition] = useTransition()
  const setAiItems = useProsConsStore(state => state.setAiItems)
  const resetCheckboxValueRef = useRef<boolean | null>(null)
  const formMethods = useForm<AIRequestFormData>()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = formMethods

  const textFieldRules = {
    required: t('errors.aiIdea.required'),
    pattern: {
      value: AI_IDEA_REGEXP,
      message: t('errors.aiIdea.pattern'),
    },
    minLength: {
      value: AI_IDEA_MIN_LENGTH,
      message: t('errors.aiIdea.minLength'),
    },
    maxLength: {
      value: AI_IDEA_MAX_LENGTH,
      message: t('errors.aiIdea.maxLength'),
    },
  }

  const {
    mutate: generateProsCons,
    isPending: isGenerateProsConsPending,
    error,
  } = useMutation<Item[], CustomAxiosError, AIRequestFormData>({
    mutationKey: ['generate-pros-cons'],
    mutationFn: (data: AIRequestFormData) => {
      resetCheckboxValueRef.current = data.resetCheckbox

      return huggingFaceService.generateProsCons(data.idea)
    },
    onSuccess: data => {
      startTransition(() => {
        setAiItems(data, resetCheckboxValueRef.current || false)
      })
    },
    onError: (currentError: any) => {
      let errorMessage =
        'Error request pros/cons generation: An unknown error occurred'

      if (axios.isAxiosError(currentError)) {
        const apiError =
          currentError.response?.data?.error || currentError.message
        errorMessage = `API Error: ${apiError}`

        if (currentError.response) {
          console.error(
            `Error Status: ${currentError.response.status} - ${apiError}`,
          )
        } else {
          console.error('Network Error:', apiError)
        }
      } else {
        console.error('An unknown error occurred:', currentError)
      }

      return errorMessage
    },
  })

  const handleFormSubmit = handleSubmit(data => generateProsCons(data))

  return {
    formMethods,
    handleFormSubmit,
    register,
    errors,
    textFieldRules,
    isLoading: isPending || isGenerateProsConsPending,
    error: error?.response?.data?.error || error?.message,
  }
}

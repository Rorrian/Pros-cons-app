import { useMutation } from '@tanstack/react-query'
import { AxiosError, isAxiosError } from 'axios'
import { useRef, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { useProsConsStore } from '@/shared/store'
import { ProsConsItem } from '@/shared/types/item'

import {
  AI_IDEA_MAX_LENGTH,
  AI_IDEA_MIN_LENGTH,
  AI_IDEA_REGEXP,
} from '../helpers/constants'
import huggingFaceService from '../services/huggingFace.service'

type AIRequestFormData = {
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

const handleApiError = (error: CustomAxiosError): string => {
  if (isAxiosError(error)) {
    const apiErrorMessage = error.response?.data?.error || error.message
    if (error.response) {
      console.error(
        `Error Status: ${error.response.status} - ${apiErrorMessage}`,
      )
    } else {
      console.error('Network Error:', apiErrorMessage)
    }

    return `API Error: ${apiErrorMessage}`
  }
  console.error('An unknown error occurred:', error)

  return 'Error request pros/cons generation: An unknown error occurred'
}

export function useAIForm() {
  const { t } = useTranslation()
  const [isPending, startTransition] = useTransition()
  const setAiItemsToCurrentList = useProsConsStore(
    state => state.setAiItemsToCurrentList,
  )
  const resetCheckboxValueRef = useRef<boolean | null>(null)
  const formMethods = useForm<AIRequestFormData>()
  const {
    handleSubmit,
    register,
    formState: { errors: formErrors },
  } = formMethods

  const {
    mutate: generateProsCons,
    isPending: isGenerateProsConsPending,
    error,
  } = useMutation<ProsConsItem[], CustomAxiosError, AIRequestFormData>({
    mutationKey: ['generate-pros-cons'],
    mutationFn: (data: AIRequestFormData) => {
      resetCheckboxValueRef.current = data.resetCheckbox

      return huggingFaceService.generateProsCons(data.idea)
    },
    onSuccess: data => {
      startTransition(() => {
        setAiItemsToCurrentList(data, resetCheckboxValueRef.current || false)
      })
    },
    onError: (currentError: CustomAxiosError) => handleApiError(currentError),
  })

  const ideaInputRules = {
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

  const handleFormSubmit = handleSubmit(data => generateProsCons(data))
  const isLoading = isPending || isGenerateProsConsPending
  const apiErrorMessage = error?.response?.data?.error || error?.message

  return {
    formMethods,
    handleFormSubmit,
    register,
    formErrors,
    ideaInputRules,
    isLoading,
    apiErrorMessage,
  }
}

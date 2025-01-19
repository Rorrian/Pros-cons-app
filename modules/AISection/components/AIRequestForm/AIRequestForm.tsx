'use client'

import clsx from 'clsx'
import { m } from 'framer-motion'
import { Brain } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { FormProvider } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import {
  Button,
  Checkbox,
  Error,
  Form,
  Kind,
  Loader,
  TextField,
  Tooltip,
} from '@/shared/components/UI'
import { getErrorMessage } from '@/shared/helpers'
import { opacityAnimation } from '@/shared/helpers/constants'
import { errorText, fullWidth } from '@/shared/styles/shared.css'
import { MotionElementProps } from '@/shared/types/common'

import { aiRequestFormStyles } from './AIRequestForm.css'
import { useAIForm } from '../../hooks/useAIForm'

export const AIRequestForm = (props: MotionElementProps) => {
  const { t } = useTranslation()
  const hasSharedList = useSearchParams().get('sharedList')
  const {
    formMethods,
    handleFormSubmit,
    register,
    formErrors,
    ideaInputRules,
    isLoading,
    apiErrorMessage,
  } = useAIForm()

  const textFieldErrorMessage = getErrorMessage(formErrors?.idea)

  if (hasSharedList) return null

  return (
    <m.div className={fullWidth} {...opacityAnimation} {...props}>
      <FormProvider {...formMethods}>
        <Form
          className={aiRequestFormStyles.form}
          id="aiRequestForm"
          onSubmit={handleFormSubmit}
        >
          <TextField
            className={aiRequestFormStyles.input}
            errorClassName={aiRequestFormStyles.error}
            errorMessage={textFieldErrorMessage}
            isValid={!textFieldErrorMessage}
            placeholder={t('main.aiRequestForm.inputPlaceholder')}
            {...register('idea', ideaInputRules)}
          />

          <Button
            aria-label="Get Ai answer"
            disabled={isLoading}
            icon={!isLoading ? <Brain size={24} /> : <Loader />}
            iconClassName={aiRequestFormStyles.icon}
            kind={Kind.Secondary}
            type="submit"
          />

          <Tooltip text={t('main.aiRequestForm.tooltipText')} />

          <Checkbox
            className={aiRequestFormStyles.checkbox}
            label={t('main.aiRequestForm.checkboxLabel')}
            {...register('resetCheckbox')}
          />

          {apiErrorMessage && (
            <Error
              text={apiErrorMessage}
              className={clsx(errorText, aiRequestFormStyles.error)}
            />
          )}
        </Form>
      </FormProvider>
    </m.div>
  )
}

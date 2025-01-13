'use client'

import clsx from 'clsx'
import { m, MotionProps } from 'framer-motion'
import { Brain } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { BaseHTMLAttributes } from 'react'
import { FormProvider } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import {
  Button,
  Checkbox,
  Error,
  Form,
  Loader,
  TextField,
  Tooltip,
} from '@/shared/components/UI'
import { getErrorMessage } from '@/shared/helpers'
import { opacityAnimation } from '@/shared/helpers/constants'
import { errorText, fullWidth } from '@/shared/styles/shared.css'
import { Kind, Size } from '@/shared/types/button/enums'

import { aiRequestFormStyles } from './AIRequestForm.css'
import { useAIForm } from '../../hooks/useAIForm'

type AIRequestFormProps = BaseHTMLAttributes<HTMLElement> & MotionProps

export const AIRequestForm = (props: AIRequestFormProps) => {
  const { t } = useTranslation()
  const hasSharedList = useSearchParams().get('sharedList')
  const {
    formMethods,
    handleFormSubmit,
    register,
    errors,
    textFieldRules,
    isLoading,
    error: responseError,
  } = useAIForm()

  const textFieldErrorMessage = getErrorMessage(errors?.idea)

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
            {...register('idea', textFieldRules)}
          />

          <Button
            aria-label="Get Ai answer"
            disabled={isLoading}
            icon={!isLoading ? <Brain size={24} /> : <Loader />}
            iconClassName={aiRequestFormStyles.icon}
            kind={Kind.Secondary}
            size={Size.Small}
            type="submit"
          />

          <Tooltip text={t('main.aiRequestForm.tooltipText')} />

          <Checkbox
            className={aiRequestFormStyles.checkbox}
            label={t('main.aiRequestForm.checkboxLabel')}
            {...register('resetCheckbox')}
          />

          {responseError && (
            <Error
              text={responseError}
              className={clsx(errorText, aiRequestFormStyles.error)}
            />
          )}
        </Form>
      </FormProvider>
    </m.div>
  )
}

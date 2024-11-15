'use client'

import clsx from 'clsx'
import { m } from 'framer-motion'
import { Brain, LoaderCircle } from 'lucide-react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { getErrorMessage } from '@/helpers'
import { AI_IDEA_REGEXP } from '@/helpers/constants'
import { useAIVariants } from '@/hooks/useAIVariants'
import { errorText } from '@/styles/shared.css'
import { Kind, Size } from '@/types/button/enums'

import { aiInputBlockStyles } from './AIInputBlock.css'
import { Button } from '../UI/Button/Button'
import { Checkbox } from '../UI/Checkbox/Checkbox'
import { Form } from '../UI/Form/Form'
import { TextField } from '../UI/InputBoxes/TextField'
import { Tooltip } from '../UI/Tooltip/Tooltip'

export const AIInputBlock = () => {
  const { t } = useTranslation()
  const { isLoading, error, generateProsCons } = useAIVariants()
  const formMethods = useForm()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = formMethods

  // FIXME: заменить тип any
  const handleFormSubmit: SubmitHandler<any> = data => {
    generateProsCons(data)
  }

  // FIXME: вынести ?
  const textFieldErrorMessage = getErrorMessage(errors?.idea)
  const textFieldRules = {
    required: t('errors.aiIdea.required'),
    pattern: {
      value: AI_IDEA_REGEXP,
      message: t('errors.aiIdea.pattern'),
    },
    minLength: {
      value: 5,
      message: t('errors.aiIdea.minLength'),
    },
    maxLength: {
      value: 1000000,
      message: t('errors.aiIdea.maxLength'),
    },
  }

  return (
    <FormProvider {...formMethods}>
      <Form
        className={aiInputBlockStyles.aiBlock}
        id="changePasswordForm"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <TextField
          className={aiInputBlockStyles.input}
          errorClassName={aiInputBlockStyles.error}
          errorMessage={textFieldErrorMessage}
          isValid={!textFieldErrorMessage}
          placeholder={t('main.aiBlock.inputPlaceholder')}
          {...register('idea', textFieldRules)}
        />

        <Checkbox
          className={aiInputBlockStyles.checkbox}
          label={t('main.aiBlock.checkboxLabel')}
          {...register('resetCheckbox')}
        />

        <Button
          aria-label="Get Ai answer"
          disabled={isLoading}
          icon={
            !isLoading ? (
              <Brain size={24} />
            ) : (
              <m.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <LoaderCircle size={24} />
              </m.div>
            )
          }
          iconClassName={aiInputBlockStyles.icon}
          kind={Kind.Secondary}
          size={Size.Small}
          type="submit"
        />

        <Tooltip text={t('main.aiBlock.tooltipText')} />

        {error && (
          <p className={clsx(errorText, aiInputBlockStyles.error)}>
            {t('main.aiBlock.tooltipText')}
          </p>
        )}
      </Form>
    </FormProvider>
  )
}

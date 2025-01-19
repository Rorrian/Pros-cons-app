'use client'

import { usePathname, useRouter } from 'next/navigation'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import SaveIcon from '@/public/icons/save.svg'
import {
  Button,
  Checkbox,
  Form,
  Kind,
  Size,
  Tooltip,
} from '@/shared/components/UI'
import { Position } from '@/shared/components/UI/Tooltip/Tooltip'
import { useProsConsStore } from '@/shared/store'

import { saveListFormStyles } from './SaveListForm.css'

type SaveListFormData = {
  resetCheckbox: boolean
}

export const SaveListForm = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const pathname = usePathname()
  const [saveSharedItems, setSharedItems] = useProsConsStore(state => [
    state.saveSharedItems,
    state.setSharedItems,
  ])
  const formMethods = useForm<SaveListFormData>()
  const { register, handleSubmit } = formMethods

  const handleSaveList = () => {
    saveSharedItems()
    router.replace(pathname)
    setSharedItems([])
  }

  const handleFormSubmit: SubmitHandler<SaveListFormData> = () => {
    handleSaveList()
  }

  return (
    <FormProvider {...formMethods}>
      <Form
        className={saveListFormStyles.form}
        id="saveListForm"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div className={saveListFormStyles.inner}>
          <Button
            aria-label="Save list"
            icon={<SaveIcon />}
            kind={Kind.Primary}
            size={Size.Big}
            title={t('main.footer.saveButton')}
            onClick={() => handleSaveList()}
          />
          <Tooltip
            position={Position.Top}
            text={t('main.footer.tooltipText')}
          />
        </div>

        <Checkbox
          className={saveListFormStyles.checkbox}
          defaultChecked={true}
          label={t('main.footer.checkboxLabel')}
          {...register('resetCheckbox')}
        />
      </Form>
    </FormProvider>
  )
}

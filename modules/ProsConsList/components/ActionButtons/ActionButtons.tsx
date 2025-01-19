'use client'

import { m } from 'framer-motion'
import React from 'react'
import { useTranslation } from 'react-i18next'

import BulbIcon from '@/public/icons/bulb.svg'
import DeleteIcon from '@/public/icons/delete.svg'
import { Button, Kind } from '@/shared/components/UI'
import { opacityAnimation } from '@/shared/helpers/constants'
import { useProsConsStore } from '@/shared/store'
import { MotionElementProps } from '@/shared/types'

import { actionButtonsStyles } from './ActionButtons.css'

export const ActionButtons = (props: MotionElementProps) => {
  const { t } = useTranslation()
  const [setExampleItemsToCurrentList, removeAllItemsFromCurrentList] =
    useProsConsStore(state => [
      state.setExampleItemsToCurrentList,
      state.removeAllItemsFromCurrentList,
    ])

  return (
    <m.div
      className={actionButtonsStyles.wrapper}
      {...opacityAnimation}
      {...props}
    >
      <Button
        aria-label="Delete all"
        className={actionButtonsStyles.button}
        icon={<DeleteIcon />}
        kind={Kind.Secondary}
        title={t('main.deleteAll')}
        onClick={() => removeAllItemsFromCurrentList()}
      />

      <Button
        aria-label="Reset all and load sample"
        className={actionButtonsStyles.button}
        icon={<BulbIcon />}
        kind={Kind.Secondary}
        title={t('main.resetAndLoadSample')}
        onClick={() => setExampleItemsToCurrentList()}
      />
    </m.div>
  )
}

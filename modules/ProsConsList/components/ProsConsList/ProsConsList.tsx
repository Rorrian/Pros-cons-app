'use client'

import { useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { Caption, Error, Title } from '@/shared/components/UI'
import { useProsConsStore } from '@/shared/store'

import { getCurrentState } from '../../helpers/utils'
import { ActionButtons } from '../ActionButtons/ActionButtons'
import { Tables } from '../Tables/Tables'

export const ProsConsList = () => {
  const { t } = useTranslation()
  const hasSharedList = useSearchParams().get('sharedList')
  const [currentListName, setExampleLists, sharedItemsError] = useProsConsStore(
    state => [
      state.lists[state.currentListId]?.name,
      state.setExampleLists,
      state.sharedItemsError,
    ],
  )

  useEffect(() => {
    const currentState = getCurrentState('PropsCons')
    const listsData = Object.values(currentState?.state?.lists)
    if (!listsData?.length) setExampleLists()
  }, [])

  if (sharedItemsError) return <Error text={sharedItemsError} />

  return (
    <>
      <Title headingType="h2">{currentListName}</Title>

      {hasSharedList && <Caption text={t('main.sharedListWarning')} />}

      <Tables />

      {!hasSharedList && <ActionButtons />}
    </>
  )
}

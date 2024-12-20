'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { getCurrentState } from '@/helpers'
import { useSharedItemsFromURL } from '@/hooks/useSharedItemsFromURL'
import BulbIcon from '@/public/icons/bulb.svg'
import DeleteIcon from '@/public/icons/delete.svg'
import { useProsConsStore } from '@/store'
import { Kind, Size } from '@/types/button/enums'
import { ItemType } from '@/types/item'

import { tablesStyles } from './Tables.css'
import { Caption, Error, MButton } from '../UI'
import { Table } from './Table/Table'

// TODO: Fix вопрос с рендером

export const Tables = () => {
  const { t } = useTranslation()
  const searchParams = useSearchParams()
  const hasSharedList = searchParams.get('sharedList')
  const [
    lists,
    currentListId,
    setExampleItemsToCurrentList,
    removeAllItemsFromCurrentList,
    sharedItems,
    sharedItemsError,
    setExampleLists,
  ] = useProsConsStore(state => [
    state.lists,
    state.currentListId,
    state.setExampleItemsToCurrentList,
    state.removeAllItemsFromCurrentList,
    state.sharedItems,
    state.sharedItemsError,
    state.setExampleLists,
  ])
  useSharedItemsFromURL()

  const currentListItems = lists.find(list => list.id === currentListId)?.items
  const isSharedItems = !!sharedItems?.length
  const usingItems = isSharedItems ? sharedItems : currentListItems

  // FIXME: Проверить как реализовать с помощью onRehydrateStorage(persist) - https://www.youtube.com/watch?v=SYk6F7tWCa0&t=220s
  useEffect(() => {
    const currentState = getCurrentState('PropsCons')
    if (!currentState?.state?.lists?.length) setExampleLists()
  }, [])

  if (sharedItemsError) return <Error text={sharedItemsError} />

  return (
    <>
      {!!hasSharedList && <Caption text={t('main.sharedListWarning')} />}

      <div className={tablesStyles.tableWrapper}>
        <Table
          isSharedItems={isSharedItems}
          items={usingItems?.filter(item => item.type === ItemType.Pros)}
          type={ItemType.Pros}
        />
        <Table
          isSharedItems={isSharedItems}
          items={usingItems?.filter(item => item.type === ItemType.Cons)}
          type={ItemType.Cons}
        />
      </div>

      {!hasSharedList && (
        <div className={tablesStyles.buttons}>
          <MButton
            aria-label="Delete all"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={tablesStyles.button}
            icon={<DeleteIcon />}
            kind={Kind.Secondary}
            size={Size.Small}
            title={t('main.deleteAll')}
            onClick={() => removeAllItemsFromCurrentList()}
          />

          <MButton
            aria-label="Reset all and load sample"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={tablesStyles.button}
            icon={<BulbIcon />}
            kind={Kind.Secondary}
            size={Size.Small}
            title={t('main.resetAndLoadSample')}
            onClick={() => {
              setExampleItemsToCurrentList()
            }}
          />
        </div>
      )}
    </>
  )
}

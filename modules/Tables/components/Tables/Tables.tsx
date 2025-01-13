'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import BulbIcon from '@/public/icons/bulb.svg'
import DeleteIcon from '@/public/icons/delete.svg'
import { Caption, Error, MButton, Title } from '@/shared/components/UI'
import { opacityAnimation } from '@/shared/helpers/constants'
import { useSharedItemsFromURL } from '@/shared/hooks/useSharedItemsFromURL'
import { useProsConsStore } from '@/shared/store'
import { Kind, Size } from '@/shared/types/button/enums'
import { Item, ItemType } from '@/shared/types/item'

import { Table } from './Table/Table'
import { tablesStyles } from './Tables.css'
import { getCurrentState } from '../../helpers/utils'

export const Tables = () => {
  const { t } = useTranslation()
  const searchParams = useSearchParams()
  const hasSharedList = searchParams.get('sharedList')
  const [
    currentList,
    setExampleLists,
    setExampleItemsToCurrentList,
    removeAllItemsFromCurrentList,
    sharedItems,
    sharedItemsError,
  ] = useProsConsStore(state => [
    state.lists[state.currentListId],
    state.setExampleLists,
    state.setExampleItemsToCurrentList,
    state.removeAllItemsFromCurrentList,
    state.sharedItems,
    state.sharedItemsError,
  ])

  useSharedItemsFromURL()

  const isSharedItems = !!sharedItems?.length
  const usingItems = isSharedItems ? sharedItems : currentList?.items

  useEffect(() => {
    const currentState = getCurrentState('PropsCons')
    const listsData = Object.values(currentState?.state?.lists)
    if (!listsData?.length) setExampleLists()
  }, [])

  if (sharedItemsError) return <Error text={sharedItemsError} />

  return (
    <>
      <Title headingType="h2">{currentList?.name}</Title>

      {!!hasSharedList && <Caption text={t('main.sharedListWarning')} />}

      <div className={tablesStyles.tableWrapper}>
        <Table
          isSharedItems={isSharedItems}
          items={usingItems?.filter(
            (item: Item) => item.type === ItemType.Pros,
          )}
          type={ItemType.Pros}
        />
        <Table
          isSharedItems={isSharedItems}
          items={usingItems?.filter(
            (item: Item) => item.type === ItemType.Cons,
          )}
          type={ItemType.Cons}
        />
      </div>

      {!hasSharedList && (
        <div className={tablesStyles.buttons}>
          <MButton
            aria-label="Delete all"
            {...opacityAnimation}
            className={tablesStyles.button}
            icon={<DeleteIcon />}
            kind={Kind.Secondary}
            size={Size.Small}
            title={t('main.deleteAll')}
            onClick={() => removeAllItemsFromCurrentList()}
          />

          <MButton
            aria-label="Reset all and load sample"
            {...opacityAnimation}
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

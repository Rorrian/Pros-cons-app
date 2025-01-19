'use client'

import React, { useMemo } from 'react'

import { useSharedItemsFromURL } from '@/shared/hooks/useSharedItemsFromURL'
import { useProsConsStore } from '@/shared/store'
import { ProsConsItem, ProsConsType } from '@/shared/types/item'

import { Table } from './Table/Table'
import { tablesStyles } from './Tables.css'

export const Tables = () => {
  const { currentList, sharedItems } = useProsConsStore(state => ({
    currentList: state.lists[state.currentListId],
    sharedItems: state.sharedItems,
  }))

  useSharedItemsFromURL()

  const isSharedItems = !!sharedItems?.length
  const usingItems = isSharedItems ? sharedItems : currentList?.items

  const prosItems = useMemo(
    () =>
      usingItems?.filter(
        (item: ProsConsItem) => item.type === ProsConsType.Pros,
      ),
    [usingItems],
  )
  const consItems = useMemo(
    () =>
      usingItems?.filter(
        (item: ProsConsItem) => item.type === ProsConsType.Cons,
      ),
    [usingItems],
  )

  return (
    <div className={tablesStyles.tableWrapper}>
      <Table
        isSharedItems={isSharedItems}
        items={prosItems}
        type={ProsConsType.Pros}
      />
      <Table
        isSharedItems={isSharedItems}
        items={consItems}
        type={ProsConsType.Cons}
      />
    </div>
  )
}

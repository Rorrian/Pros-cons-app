'use client'

import { useProsConsStore } from '@/store'

import { Title } from '../UI'

export const ListTitle = () => {
  const [lists, currentListId] = useProsConsStore(state => [
    state.lists,
    state.currentListId,
  ])
  const currentListName = lists.find(list => list.id === currentListId)?.name

  return <Title headingType="h2">{currentListName}</Title>
}

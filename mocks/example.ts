import { Item, ItemType } from '@/types/item'

export const mockProsConsData: Item[] = [
  {
    id: '1',
    name: 'Собеседник в любое время',
    weight: 10,
    type: ItemType.Pros,
  },
  { id: '2', name: 'Живой будильник', weight: 8, type: ItemType.Pros },
  { id: '3', name: 'Домашний шпион', weight: 6, type: ItemType.Pros },
  {
    id: '4',
    name: 'Бесконечные комплименты',
    weight: 9,
    type: ItemType.Pros,
  },
  { id: '5', name: 'Музыкальный талант', weight: 7, type: ItemType.Pros },

  { id: '6', name: 'Повторюшка', weight: 4, type: ItemType.Cons },
  { id: '7', name: 'Вечно шумно', weight: 5, type: ItemType.Cons },
  { id: '8', name: 'Частные тренировки', weight: 3, type: ItemType.Cons },
  {
    id: '9',
    name: 'Ненадежный сторожевой',
    weight: 2,
    type: ItemType.Cons,
  },
]

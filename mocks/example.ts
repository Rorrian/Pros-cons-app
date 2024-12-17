import { Item, ItemType, List } from '@/types/item'

export const mockProsConsData: Item[] = [
  {
    id: '1',
    name: 'Companion anytime',
    weight: 10,
    type: ItemType.Pros,
  },
  { id: '2', name: 'Living alarm clock', weight: 8, type: ItemType.Pros },
  { id: '3', name: 'Home spy', weight: 6, type: ItemType.Pros },
  {
    id: '4',
    name: 'Endless compliments',
    weight: 9,
    type: ItemType.Pros,
  },
  { id: '5', name: 'Musical talent', weight: 7, type: ItemType.Pros },

  { id: '6', name: 'Copycat', weight: 4, type: ItemType.Cons },
  { id: '7', name: 'Always noisy', weight: 5, type: ItemType.Cons },
  { id: '8', name: 'Private training', weight: 3, type: ItemType.Cons },
  {
    id: '9',
    name: 'Unreliable guard',
    weight: 2,
    type: ItemType.Cons,
  },
]

export const mockProsConsData2: Item[] = [
  {
    id: '1',
    name: 'It is a cat',
    weight: 10,
    type: ItemType.Pros,
  },

  { id: '2', name: 'Why not?', weight: 0, type: ItemType.Cons },
]

export const mockProsConsLists: List[] = [
  {
    id: '1',
    name: 'Idea: "Get a parrot"',
    items: mockProsConsData,
  },
  {
    id: '2',
    name: 'Idea: "Get a cat"',
    items: mockProsConsData2,
  },
]

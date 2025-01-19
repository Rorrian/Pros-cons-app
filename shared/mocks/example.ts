import { ProsConsItem, ProsConsType, ProsConsList } from '../types/item'

export const mockProsConsData: ProsConsItem[] = [
  {
    id: '1',
    name: 'Companion anytime',
    weight: 10,
    type: ProsConsType.Pros,
  },
  { id: '2', name: 'Living alarm clock', weight: 8, type: ProsConsType.Pros },
  { id: '3', name: 'Home spy', weight: 6, type: ProsConsType.Pros },
  {
    id: '4',
    name: 'Endless compliments',
    weight: 9,
    type: ProsConsType.Pros,
  },
  { id: '5', name: 'Musical talent', weight: 7, type: ProsConsType.Pros },

  { id: '6', name: 'Copycat', weight: 4, type: ProsConsType.Cons },
  { id: '7', name: 'Always noisy', weight: 5, type: ProsConsType.Cons },
  { id: '8', name: 'Private training', weight: 3, type: ProsConsType.Cons },
  {
    id: '9',
    name: 'Unreliable guard',
    weight: 2,
    type: ProsConsType.Cons,
  },
]

export const mockProsConsData2: ProsConsItem[] = [
  {
    id: '1',
    name: 'It is a cat',
    weight: 10,
    type: ProsConsType.Pros,
  },

  { id: '2', name: 'Why not?', weight: 0, type: ProsConsType.Cons },
]

export const mockProsConsLists: Record<string, ProsConsList | undefined> = {
  '1': {
    id: '1',
    name: 'Example idea: "Get a parrot"',
    items: mockProsConsData,
  },
  '2': {
    id: '2',
    name: 'Example idea: "Get a cat"',
    items: mockProsConsData2,
  },
}

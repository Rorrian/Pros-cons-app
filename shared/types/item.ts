export const enum ProsConsType {
  Pros = 'pros',
  Cons = 'cons',
}

export interface ProsConsItem {
  id: string
  name: string
  weight: number
  type: ProsConsType
}

export interface ProsConsList {
  id: string
  name: string
  items: ProsConsItem[]
}

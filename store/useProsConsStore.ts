import { create } from "zustand"

import { generateId } from "@/helpers"
import { Item, ItemType } from "@/types/item"

interface PropsConsStore {
	items: Item[]
	setItems: (newItems: Item[], type: ItemType) => void
	createItem: (name: string, weight: number, type: ItemType) => void
	updateItem: (id: string, name: string, weight: number) => void
	removeItem: (id: string) => void
	removeAllItems: () => void
}

export const useProsConsStore = create<PropsConsStore>((set, get) => ({
	items: [
		{
			id: "1",
			name: "Собеседник в любое время",
			weight: 10,
			type: ItemType.Pros,
		},
		{ id: "2", name: "Живой будильник", weight: 8, type: ItemType.Pros },
		{ id: "3", name: "Домашний шпион", weight: 6, type: ItemType.Pros },
		{
			id: "4",
			name: "Бесконечные комплименты",
			weight: 9,
			type: ItemType.Pros,
		},
		{ id: "5", name: "Музыкальный талант", weight: 7, type: ItemType.Pros },

		{ id: "6", name: "Повторюшка", weight: 4, type: ItemType.Cons },
		{ id: "7", name: "Вечно шумно", weight: 5, type: ItemType.Cons },
		{ id: "8", name: "Частные тренировки", weight: 3, type: ItemType.Cons },
		{ id: "9", name: "Ненадежный сторожевой", weight: 2, type: ItemType.Cons },
	],
	setItems: (newItems: Item[], type: ItemType) => {
		const { items } = get()

		const prosItems = items.filter(item => item.type === ItemType.Pros)
		const consItems = items.filter(item => item.type === ItemType.Cons)

		const updatedItems =
			type === ItemType.Pros
				? [...newItems, ...consItems]
				: [...prosItems, ...newItems]

		set({
			items: updatedItems,
		})
	},
	createItem: (name: string, weight: number, type: ItemType) => {
		const { items } = get()
		const newItem: Item = {
			id: generateId(),
			name,
			weight,
			type,
		}

		set({
			items: [...items, newItem],
		})
	},
	updateItem: (id: string, name: string, weight: number) => {
		const { items } = get()

		set({
			items: items.map(item =>
				item.id === id ? { ...item, name, weight } : item
			),
		})
	},
	removeItem: (id: string) => {
		const { items } = get()

		set({
			items: items.filter(item => item.id !== id),
		})
	},
	removeAllItems: () => {
		set({ items: [] })
	},
}))

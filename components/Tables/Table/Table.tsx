import React from "react"

import Row from "@/components/Row/Row"
import { Item, ItemType } from "@/types/item"

import { tableStyles } from "./Table.css"

interface TablesProps {
	items?: Item[]
	type?: ItemType
}

const Table: React.FC<TablesProps> = ({ items, type }) => {
	const isInversion = type === ItemType.Cons
	const totalScore = (items: Item[]) =>
		items?.reduce((acc, item) => acc + item.weight, 0)

	return (
		<div className={tableStyles.table}>
			<Row isTitle isInversion={isInversion} />

			{!!items?.length &&
				items.map(item => (
					<Row key={item.name} item={item} isInversion={isInversion} />
				))}

			<Row
				isInversion={isInversion}
				isTotal
				totalWeight={totalScore(items || [])}
			/>
		</div>
	)
}

export default Table

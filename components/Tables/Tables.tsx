"use client"

import React from "react"

import DeleteIcon from "@/public/icons/delete.svg"
import { useProsConsStore } from "@/store/useProsConsStore"
import { Kind } from "@/types/button/enums"
import { ItemType } from "@/types/item"

import { Button } from "../UI/Button/Button"
import Table from "./Table/Table"
import { tablesStyles } from "./Tables.css"

const Tables: React.FC = () => {
	const [items, removeAllItems] = useProsConsStore(state => [
		state.items,
		state.removeAllItems,
	])

	return (
		<>
			<div className={tablesStyles.tableWrapper}>
				<Table
					items={items.filter(item => item.type === ItemType.Pros)}
					type={ItemType.Pros}
				/>
				<Table
					items={items.filter(item => item.type === ItemType.Cons)}
					type={ItemType.Cons}
				/>
			</div>

			<Button
				className={tablesStyles.button}
				kind={Kind.Secondary}
				onClick={() => removeAllItems()}
				icon={<DeleteIcon />}
				title="Delete all data"
			/>
		</>
	)
}

export default Tables

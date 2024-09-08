"use client"

import { AnimatePresence, motion, Reorder } from "framer-motion"
import { forwardRef, LegacyRef } from "react"

import { Row } from "@/components/Row/Row"
import { useProsConsStore } from "@/store"
import { Item, ItemType } from "@/types/item"

import { tableStyles } from "./Table.css"

interface TablesProps {
	items: Item[]
	type?: ItemType
}

const tableVariants = {
	left: {
		x: -100,
		opacity: 0,
	},
	right: {
		x: 100,
		opacity: 0,
	},
	show: {
		x: 0,
		opacity: 1,
	},
}

const rowAnimation = {
	initial: {
		y: 20,
		height: 0,
		opacity: 0,
	},
	animate: {
		y: 0,
		height: "auto",
		opacity: 1,
	},
	exit: {
		y: -20,
		opacity: 0,
		height: 0,
		transition: { duration: 0.35 },
	},
}

export const Table = forwardRef(
	(
		{ items, type }: TablesProps,
		ref: LegacyRef<HTMLDivElement> | undefined
	) => {
		const setItems = useProsConsStore(state => state.setItems)

		const isInversion = type === ItemType.Cons
		const totalScore = (items: Item[]) =>
			items?.reduce((acc, item) => acc + item.weight, 0)

		return (
			<motion.div
				ref={ref}
				initial={!isInversion ? "left" : "right"}
				animate={"show"}
				variants={tableVariants}
				transition={{
					duration: 0.35,
				}}
				className={tableStyles.table}
			>
				<Row isTitle isInversion={isInversion} />

				<Reorder.Group
					axis="y"
					values={items}
					onReorder={newItems => setItems(newItems, type!)}
				>
					<AnimatePresence initial={false}>
						{!!items?.length &&
							items.map(item => (
								<Reorder.Item
									key={item.id}
									value={item}
									whileDrag={{
										scale: 1.05,
									}}
									{...rowAnimation}
								>
									<Row item={item} isInversion={isInversion} />
								</Reorder.Item>
							))}
					</AnimatePresence>
				</Reorder.Group>

				<Row
					isInversion={isInversion}
					isTotal
					totalWeight={totalScore(items || [])}
				/>
			</motion.div>
		)
	}
)

export const MTable = motion(Table)

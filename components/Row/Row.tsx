"use client"

import { motion } from "framer-motion"
import { forwardRef, LegacyRef, useState } from "react"

import CrossIcon from "@/public/icons/cross.svg"
import PlusIcon from "@/public/icons/plus.svg"
import { useProsConsStore } from "@/store/useProsConsStore"
import { Kind } from "@/types/button/enums"
import { Item, ItemType } from "@/types/item"

import { Button } from "../UI/Button/Button"
import { TextArea } from "../UI/InputBoxes/TextArea"
import { TextField } from "../UI/InputBoxes/TextField"
import { rowStyles } from "./Row.css"

interface RowProps {
	item?: Item
	isInversion: boolean
	isTitle?: boolean
	isTotal?: boolean
	totalWeight?: number
}

export const Row = forwardRef(
	(
		{
			item,
			isInversion = false,
			isTitle = false,
			isTotal = false,
			totalWeight,
		}: RowProps,
		ref: LegacyRef<HTMLDivElement> | undefined
	) => {
		const { createItem, updateItem, removeItem } = useProsConsStore()

		const [name, setName] = useState(item?.name)
		const [weight, setWeight] = useState(item?.weight)
		const [isValidWeight, setIsValidWeight] = useState(true)

		const confirmWeightValue = (id: string, name: string, weight: number) => {
			if (weight && weight > 10) {
				setIsValidWeight(false)
			} else {
				setIsValidWeight(true)
				updateItem(id, name, weight)
			}
		}

		return (
			<motion.div ref={ref} className={rowStyles.row({ isInversion })}>
				{isTitle && (
					<>
						<span className={rowStyles.col({ isInversion, isTitle })}>
							{!isInversion ? "Pros" : "Cons"}
						</span>
						<span className={rowStyles.col({ isInversion, isTitle })}>
							Weight(1-10)
						</span>

						<Button
							aria-label="Add row"
							className={rowStyles.button({ isInversion })}
							icon={<PlusIcon />}
							kind={Kind.Transparent}
							onClick={() =>
								createItem("", 0, isInversion ? ItemType.Cons : ItemType.Pros)
							}
						/>
					</>
				)}

				{item && (
					<>
						<div className={rowStyles.col({ isInversion })}>
							<TextArea
								className={rowStyles.input}
								value={name}
								onChange={e => setName(e.target.value)}
								onBlur={() => updateItem(item?.id, name || "", weight || 0)}
								onClearButtonClick={() => setName("")}
							/>
						</div>
						<div
							className={rowStyles.col({ isInversion, isValid: isValidWeight })}
						>
							<TextField
								className={rowStyles.input}
								errorMessage="Введите число от 0 до 10"
								isValid={isValidWeight}
								type="number"
								value={weight}
								onChange={e => setWeight(Number(e.target.value))}
								onBlur={() =>
									confirmWeightValue(item?.id, name || "", weight || 0)
								}
							/>
						</div>

						<Button
							aria-label="Remove row"
							className={rowStyles.button({ isInversion })}
							icon={<CrossIcon />}
							kind={Kind.Transparent}
							onClick={() => removeItem(item.id)}
						/>
					</>
				)}

				{isTotal && (
					<>
						<span className={rowStyles.col({ isInversion, isTotal })}>
							Total
						</span>
						<span className={rowStyles.col({ isInversion, isTotal })}>
							{totalWeight}
						</span>
					</>
				)}
			</motion.div>
		)
	}
)

export const MRow = motion(Row)

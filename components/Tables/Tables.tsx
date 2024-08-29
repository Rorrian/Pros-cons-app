import { useEffect } from "react"
import { useTranslation } from "react-i18next"

import { getCurrentState } from "@/helpers"
import BulbIcon from "@/public/icons/bulb.svg"
import DeleteIcon from "@/public/icons/delete.svg"
import { useProsConsStore } from "@/store"
import { Kind, Size } from "@/types/button/enums"
import { ItemType } from "@/types/item"

import { Button } from "../UI/Button/Button"
import { Table } from "./Table/Table"
import { tablesStyles } from "./Tables.css"

export const Tables = () => {
	const [items, setInitialItems, removeAllItems] = useProsConsStore(state => [
		state.items,
		state.setInitialItems,
		state.removeAllItems,
	])
	const { t } = useTranslation()

	// TODO: Проверить как реализовать с помощью onRehydrateStorage(persist)
	// https://www.youtube.com/watch?v=SYk6F7tWCa0&t=220s
	useEffect(() => {
		const currentState = getCurrentState("PropsCons")
		if (!currentState?.state?.items?.length) setInitialItems()
	}, [])

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

			<div className={tablesStyles.buttons}>
				<Button
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className={tablesStyles.button}
					icon={<DeleteIcon />}
					kind={Kind.Secondary}
					size={Size.Small}
					title={t("main.deleteAll")}
					onClick={() => removeAllItems()}
				/>

				<Button
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className={tablesStyles.button}
					icon={<BulbIcon />}
					kind={Kind.Secondary}
					size={Size.Small}
					title={t("main.resetAndLoadSample")}
					onClick={() => {
						setInitialItems()
					}}
				/>
			</div>
		</>
	)
}

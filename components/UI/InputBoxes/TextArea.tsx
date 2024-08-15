import clsx from "clsx"
import React, { useId } from "react"

import ClearIcon from "@/public/icons/close.svg"

import { inputBoxesStyles } from "./InputBoxes.css"

const MAX_LENGTH_CHARACTERS_IN_NAME = 100

export type TextAreaProps = React.ComponentPropsWithoutRef<"textarea"> & {
	errorMessage?: string | null
	isValid?: boolean
	onClearButtonClick?: () => void
}

export const TextArea: React.FC<TextAreaProps> = ({
	className,
	errorMessage,
	isValid = true,
	value,
	onChange,
	onClearButtonClick,
	...props
}) => {
	const id = useId()

	return (
		<>
			<textarea
				className={clsx(inputBoxesStyles.textarea, className)}
				id={id}
				maxLength={MAX_LENGTH_CHARACTERS_IN_NAME}
				spellCheck={false}
				value={value}
				{...props}
				onChange={onChange}
			/>
			<button
				type="button"
				className={inputBoxesStyles.clearButton}
				onClick={onClearButtonClick}
			>
				<ClearIcon />
			</button>

			{!isValid && errorMessage && (
				<b className={inputBoxesStyles.error}>{errorMessage}</b>
			)}
		</>
	)
}

import clsx from "clsx"
import React, { useId } from "react"

import { inputBoxesStyles } from "./InputBoxes.css"

export type TextFieldProps = React.ComponentPropsWithoutRef<"input"> & {
	errorMessage?: string | null
	isValid?: boolean
}

export const TextField = ({
	className,
	errorMessage,
	isValid = true,
	type,
	value,
	onChange,
	...props
}: TextFieldProps) => {
	const id = useId()

	return (
		<>
			<input
				className={clsx(inputBoxesStyles.textfield, className)}
				id={id}
				type={type}
				spellCheck={false}
				value={value}
				{...props}
				onChange={onChange}
			/>

			{!isValid && errorMessage && (
				<b className={inputBoxesStyles.error}>{errorMessage}</b>
			)}
		</>
	)
}

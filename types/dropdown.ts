type Option = {
	alt?: string
	icon?: string
	label: string
	value: string
}

export interface DropdownProps {
	buttonClassName?: string
	icon?: JSX.Element
	iconClassName?: string
	listClassName?: string
	options: Option[]
	optionClassName?: string
	selectedOptionValue?: string
	title?: string
	titleClassName?: string
	wrapperClassName?: string
	onSelect: (value: string) => void
}

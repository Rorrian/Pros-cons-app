type GenerateId = () => string

export const generateId: GenerateId = () =>
	Math.random().toString(16).slice(2) + new Date().getTime().toString(36)

export const getCurrentState = (name: string) => {
	try {
		const currentState = JSON.parse(window.localStorage.getItem(name) || "{}")
		return currentState
	} catch (err) {
		window.localStorage.setItem(name, "{}")
	}
}

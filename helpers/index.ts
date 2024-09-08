export const getCurrentState = (name: string) => {
	try {
		const currentState = JSON.parse(window.localStorage.getItem(name) || "{}")
		return currentState
	} catch (err) {
		window.localStorage.setItem(name, "{}")
	}
}

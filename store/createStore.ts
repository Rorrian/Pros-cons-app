// Обертка для разделения дева и прода:
// Для того, чтобы у нас мидлвар devtools для стора использовался только в режиме development, а на проде не использовался

import { StateCreator, StoreApi, UseBoundStore } from "zustand"
import { devtools } from "zustand/middleware"
import { createWithEqualityFn } from "zustand/traditional"

type StoreWithDevtools<T, A = string> = UseBoundStore<StoreApi<T>> & {
	getState: () => T
	setState: (partial: T | Partial<T>, replace?: boolean) => void
	subscribe: (listener: (state: T) => void) => () => void
}

// export const createStore = <T>(
// 	fn: StateCreator<T, [], [["zustand/persist", T]]>,
// 	name: string
// ): StoreWithDevtools<T> => {
// 	if (process.env.NODE_ENV === "development") {
// 		return createWithEqualityFn(devtools(fn, { name })) as StoreWithDevtools<T>
// 	}
// 	return createWithEqualityFn(fn) as StoreWithDevtools<T>
// }

export const createStore = <T>(
	fn: StateCreator<T, [], [["zustand/persist", T]]>,
	name: string
): StoreWithDevtools<T> => {
	const store =
		process.env.NODE_ENV === "development"
			? createWithEqualityFn(devtools(fn, { name }))
			: createWithEqualityFn(fn)
	const originalSetState = store.setState

	store.setState = (partial, replace = false, actionName) => {
		if (process.env.NODE_ENV === "development" && actionName) {
			originalSetState(partial, replace, actionName)
		} else {
			originalSetState(partial, replace)
		}
	}

	// TODO: Обертка для setState, кот. автоматически добавляет указание actionName в девтулзах для дева
	// store.setState = (partial, replace = false) => {
	// 	if (process.env.NODE_ENV === "development") {
	// 		const actionName = getCallerName()
	// 		originalSetState(partial, replace, actionName)
	// 	} else {
	// 		originalSetState(partial, replace)
	// 	}
	// }

	return store as StoreWithDevtools<T>
}

// const getCallerName = (): string => {
// 	try {
// 		throw new Error()
// 	} catch (e: any) {
// 		const stack = e.stack?.split("\n")
// 		if (stack && stack[3]) {
// 			const methodName = stack[3].trim().split(" ")[1]
// 			return methodName || "anonymous_action"
// 		}
// 	}
// 	return "anonymous_action"
// }

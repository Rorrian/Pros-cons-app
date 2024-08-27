import { shallow } from "zustand/shallow"

import {
	PropsConsStore,
	useProsConsStore as useProsConsStoreZus,
} from "./useProsConsStore"
import { ThemeStore, useThemeStore as useThemeStoreZus } from "./useThemeStore"

const useThemeStore = <T>(
	selector: (state: ThemeStore) => T,
	equalityFn: (a: T, b: T) => boolean = shallow
): T => useThemeStoreZus(selector, equalityFn)

const useProsConsStore = <T>(
	selector: (state: PropsConsStore) => T,
	equalityFn: (a: T, b: T) => boolean = shallow
): T => useProsConsStoreZus(selector, equalityFn)

export { useProsConsStore, useThemeStore }

import { shallow } from 'zustand/shallow'

import {
  PropsConsStore,
  useProsConsStore as useProsConsStoreZus,
} from './useProsConsStore'
import {
  SidebarStore,
  useSidebarStore as useSidebarStoreZus,
} from './useSidebarStore'
import { ThemeStore, useThemeStore as useThemeStoreZus } from './useThemeStore'

const useThemeStore = <T>(
  selector: (state: ThemeStore) => T,
  equalityFn: (a: T, b: T) => boolean = shallow,
): T => useThemeStoreZus(selector, equalityFn)

const useProsConsStore = <T>(
  selector: (state: PropsConsStore) => T,
  equalityFn: (a: T, b: T) => boolean = shallow,
): T => useProsConsStoreZus(selector, equalityFn)

const useSidebarStore = <T>(
  selector: (state: SidebarStore) => T,
  equalityFn: (a: T, b: T) => boolean = shallow,
): T => useSidebarStoreZus(selector, equalityFn)

export { useProsConsStore, useThemeStore, useSidebarStore }

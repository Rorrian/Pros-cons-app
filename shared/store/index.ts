import { shallow } from 'zustand/shallow'

import { ProsConsStore } from './useProsConsStore/types'
import { useProsConsStore as useProsConsStoreZus } from './useProsConsStore/useProsConsStore'
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
  selector: (state: ProsConsStore) => T,
  equalityFn: (a: T, b: T) => boolean = shallow,
): T => useProsConsStoreZus(selector, equalityFn)

const useSidebarStore = <T>(
  selector: (state: SidebarStore) => T,
  equalityFn: (a: T, b: T) => boolean = shallow,
): T => useSidebarStoreZus(selector, equalityFn)

export { useProsConsStore, useThemeStore, useSidebarStore }

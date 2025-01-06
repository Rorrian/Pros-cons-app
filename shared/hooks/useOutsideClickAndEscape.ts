import { RefObject, useCallback, useEffect } from 'react'

export const useOutsideClickAndEscape = (
  isCollapsed: boolean,
  toggleSidebarHandler: () => void,
  refs?: RefObject<HTMLElement | null>[],
) => {
  const handleOutsideClickAndEscape = useCallback(
    (e: MouseEvent | KeyboardEvent) => {
      // const isEscapePressed = e instanceof KeyboardEvent && e.code === 'Escape'
      const isOutsideClick =
        e instanceof MouseEvent &&
        refs?.every(
          ref => ref.current && !ref.current.contains(e.target as Node),
        )

      // if ((isEscapePressed || isOutsideClick) && !isCollapsed) {
      if (isOutsideClick && !isCollapsed) {
        toggleSidebarHandler()
      }
    },
    [isCollapsed, toggleSidebarHandler, refs],
  )

  useEffect(() => {
    if (!isCollapsed) {
      document.body.addEventListener('keydown', handleOutsideClickAndEscape)
      document.body.addEventListener('click', handleOutsideClickAndEscape)
    }

    return () => {
      document.body.removeEventListener('keydown', handleOutsideClickAndEscape)
      document.body.removeEventListener('click', handleOutsideClickAndEscape)
    }
  }, [isCollapsed, handleOutsideClickAndEscape])
}

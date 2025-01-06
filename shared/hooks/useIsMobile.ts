import debounce from 'lodash.debounce'
import { useEffect, useState } from 'react'
import { useWindowSize } from 'react-use'

export default function useIsMobile(size: number = 768) {
  const { width } = useWindowSize()
  const [isMobile, setIsMobile] = useState<boolean>(width <= size)

  useEffect(() => {
    const handleResize = debounce(() => {
      setIsMobile(width <= size)
    }, 100)

    handleResize()

    return () => handleResize.cancel()
  }, [width, size])

  return { isMobile }
}

'use client'

import { useState } from 'react'

export const useDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(prev => !prev)
  const close = () => setIsOpen(false)

  return {
    isOpen,
    toggle,
    close,
  }
}

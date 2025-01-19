'use client'

import clsx from 'clsx'
import { m } from 'framer-motion'
import { PanelLeftOpen, PanelLeftClose } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { PropsWithChildren, ReactNode } from 'react'

import { defaultTransition, SIDEBAR_WIDTH } from '@/shared/helpers/constants'
import useIsMobile from '@/shared/hooks/useIsMobile'
import { useSidebarStore } from '@/shared/store'
import { MotionElementProps } from '@/shared/types'

import { sidebarStyles } from './Sidebar.css'

type SidebarProps = PropsWithChildren &
  MotionElementProps & { footer?: ReactNode }

const BUTTON_STYLES = {
  collapsed: { top: '1.5%', left: '26%', size: 24 },
  expanded: { top: '15px', left: '88%', size: 20 },
}

export const Sidebar = ({ children, footer, ...props }: SidebarProps) => {
  const hasSharedList = useSearchParams().get('sharedList')
  const [isCollapsed, toggleSidebar] = useSidebarStore(state => [
    state.isCollapsed,
    state.toggleSidebar,
  ])
  const { isMobile } = useIsMobile(999)

  const adaptiveSidebarWidth = isMobile ? '100vw' : '400px'

  const buttonStyle = () => {
    const state = isCollapsed ? 'collapsed' : 'expanded'

    return {
      top: BUTTON_STYLES[state].top,
      left: BUTTON_STYLES[state].left,
      width: BUTTON_STYLES[state].size,
      height: BUTTON_STYLES[state].size,
    }
  }

  if (hasSharedList) return null

  return (
    <m.aside
      className={clsx(sidebarStyles.wrapper({ isCollapsed }))}
      animate={{ width: isCollapsed ? SIDEBAR_WIDTH : adaptiveSidebarWidth }}
      transition={defaultTransition}
      {...props}
    >
      <m.button
        className={sidebarStyles.toggleButton}
        animate={buttonStyle()}
        initial={{ opacity: 0.5 }}
        whileHover={{ opacity: 1 }}
        transition={defaultTransition}
        onClick={toggleSidebar}
        {...(props as MotionElementProps)}
      >
        {isCollapsed ? <PanelLeftOpen /> : <PanelLeftClose />}
      </m.button>

      <m.div
        className={sidebarStyles.inner({ isCollapsed })}
        animate={isMobile ? { opacity: isCollapsed ? 0 : 1 } : undefined}
        transition={{
          duration: 0.15,
        }}
        {...(props as MotionElementProps)}
      >
        {children}
        {footer && <div className={sidebarStyles.footer}>{footer}</div>}
      </m.div>
    </m.aside>
  )
}

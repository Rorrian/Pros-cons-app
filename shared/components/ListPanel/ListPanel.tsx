'use client'

import { AnimatePresence, m } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import PlusIcon from '@/public/icons/plus.svg'
import { defaultTransition } from '@/shared/helpers/constants'
import useIsMobile from '@/shared/hooks/useIsMobile'
import { useSidebarStore } from '@/shared/store'
import { MotionElementProps } from '@/shared/types/common'

import { Button, Kind, Size } from '../UI'
import { ListItem } from './ListItem'
import { listStyles } from './ListPanel.css'
import { useListPanelContext } from './ListPanelContext/ListPanelContext'

const wrapperAnimation = {
  initial: { height: 0, opacity: 0 },
  animate: { height: 'auto', opacity: 1 },
  exit: { height: 0, opacity: 0 },
  transition: defaultTransition,
}

//! Pattern Compound components - for practice

export const ListPanel = (props: MotionElementProps) => {
  const { t } = useTranslation()
  const { isMobile } = useIsMobile(999)
  const { lists, currentListId, createList, editingListId } =
    useListPanelContext()
  const [isCollapsed, toggleSidebar] = useSidebarStore(state => [
    state.isCollapsed,
    state.toggleSidebar,
  ])

  return (
    <m.div className={listStyles.wrapper} {...wrapperAnimation} {...props}>
      <Button
        aria-label="Create new list"
        icon={<PlusIcon />}
        kind={Kind.Secondary}
        size={Size.Big}
        title={!isCollapsed ? t('main.sidebar.createButton') : ''}
        onClick={() => {
          createList()
          if (!isCollapsed && isMobile) toggleSidebar()
        }}
      />

      <m.ul
        className={listStyles.list}
        animate={{ marginTop: isCollapsed ? '38px' : '0px' }}
        transition={defaultTransition}
        {...props}
      >
        <AnimatePresence initial={false}>
          {lists.map(
            item =>
              item && (
                <ListItem
                  key={item.id}
                  item={item}
                  isSelected={currentListId === item.id}
                  isEditing={editingListId === item.id}
                />
              ),
          )}
        </AnimatePresence>
      </m.ul>
    </m.div>
  )
}

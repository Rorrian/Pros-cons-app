'use client'

import { AnimatePresence, m, Reorder } from 'framer-motion'

import { defaultTransition } from '@/shared/helpers/constants'
import { useProsConsStore } from '@/shared/store'
import { MotionElementProps } from '@/shared/types'
import { ProsConsItem, ProsConsType } from '@/shared/types/item'

import { tableStyles } from './Table.css'
import { MRow, Row, RowType } from '../../Row/Row'

interface TablesProps extends MotionElementProps {
  isSharedItems: boolean
  items?: ProsConsItem[]
  type: ProsConsType
}

const tableVariants = {
  left: { x: -100, opacity: 0 },
  right: { x: 100, opacity: 0 },
  show: { x: 0, opacity: 1 },
}

const rowAnimation = {
  initial: { y: 20, height: 0, opacity: 0 },
  animate: { y: 0, height: 'auto', opacity: 1 },
  exit: { y: -20, opacity: 0, height: 0, transition: defaultTransition },
}

export const Table = ({
  isSharedItems = false,
  items,
  type,
  ...props
}: TablesProps) => {
  const setItemsToCurrentList = useProsConsStore(
    state => state.setItemsToCurrentList,
  )

  const isInversion = type === ProsConsType.Cons
  const totalScore = (currItems: ProsConsItem[]) =>
    currItems?.reduce((acc, item) => acc + item.weight, 0)

  return (
    <m.div
      initial={!isInversion ? 'left' : 'right'}
      animate={'show'}
      variants={tableVariants}
      transition={defaultTransition}
      className={tableStyles.table}
      {...props}
    >
      <Row
        isEditable={!isSharedItems}
        isInversion={isInversion}
        type={RowType.Title}
      />

      {isSharedItems ? (
        <AnimatePresence initial={false}>
          {!!items?.length &&
            items.map(item => (
              <MRow
                key={item.id}
                item={item}
                isEditable={!isSharedItems}
                isInversion={isInversion}
                {...rowAnimation}
              />
            ))}
        </AnimatePresence>
      ) : (
        <Reorder.Group
          axis="y"
          values={items || []}
          onReorder={newItems => setItemsToCurrentList(newItems, type!)}
        >
          <AnimatePresence initial={false}>
            {!!items?.length &&
              items.map(item => (
                <Reorder.Item
                  key={item.id}
                  value={item}
                  whileDrag={{
                    scale: 1.05,
                  }}
                  {...rowAnimation}
                >
                  <Row
                    item={item}
                    isEditable={!isSharedItems}
                    isInversion={isInversion}
                  />
                </Reorder.Item>
              ))}
          </AnimatePresence>
        </Reorder.Group>
      )}

      <Row
        isInversion={isInversion}
        totalWeight={totalScore(items || [])}
        type={RowType.Total}
      />
    </m.div>
  )
}

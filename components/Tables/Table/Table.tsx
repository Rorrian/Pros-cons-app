'use client'

import { AnimatePresence, m, Reorder } from 'framer-motion'
import { forwardRef } from 'react'

import { Row } from '@/components/Row/Row'
import { defaultTransition } from '@/helpers/constants'
import { useProsConsStore } from '@/store'
import { Item, ItemType } from '@/types/item'

import { tableStyles } from './Table.css'

interface TablesProps {
  items: Item[]
  type?: ItemType
}

const tableVariants = {
  left: {
    x: -100,
    opacity: 0,
  },
  right: {
    x: 100,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
}

const rowAnimation = {
  initial: {
    y: 20,
    height: 0,
    opacity: 0,
  },
  animate: {
    y: 0,
    height: 'auto',
    opacity: 1,
  },
  exit: {
    y: -20,
    opacity: 0,
    height: 0,
    transition: defaultTransition,
  },
}

export const Table = forwardRef(
  (
    { items, type }: TablesProps,
    ref: React.Ref<HTMLDivElement> | undefined,
  ) => {
    const setItems = useProsConsStore(state => state.setItems)

    const isInversion = type === ItemType.Cons
    const totalScore = (currItems: Item[]) =>
      currItems?.reduce((acc, item) => acc + item.weight, 0)

    return (
      <m.div
        ref={ref}
        initial={!isInversion ? 'left' : 'right'}
        animate={'show'}
        variants={tableVariants}
        transition={defaultTransition}
        className={tableStyles.table}
      >
        <Row isTitle isInversion={isInversion} />

        <Reorder.Group
          axis="y"
          values={items}
          onReorder={newItems => setItems(newItems, type!)}
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
                  <Row item={item} isInversion={isInversion} />
                </Reorder.Item>
              ))}
          </AnimatePresence>
        </Reorder.Group>

        <Row
          isInversion={isInversion}
          isTotal
          totalWeight={totalScore(items || [])}
        />
      </m.div>
    )
  },
)

Table.displayName = 'Table'

export const MTable = m.create(Table)

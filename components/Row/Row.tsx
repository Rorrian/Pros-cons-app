'use client'

import { m } from 'framer-motion'
import { ArrowDown01, ArrowDownAZ, ArrowUp10, ArrowUpZA } from 'lucide-react'
import { forwardRef, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import CrossIcon from '@/public/icons/cross.svg'
import PlusIcon from '@/public/icons/plus.svg'
import { useProsConsStore } from '@/store'
import { Kind } from '@/types/button/enums'
import { Item, ItemType } from '@/types/item'

import { rowStyles } from './Row.css'
import { Button } from '../UI/Button/Button'
import { TextArea } from '../UI/InputBoxes/TextArea'
import { TextField } from '../UI/InputBoxes/TextField'

interface RowProps {
  item?: Item
  isInversion: boolean
  isTitle?: boolean
  isTotal?: boolean
  totalWeight?: number
}

/* TODO: Пересмотреть ширину колонок */

export const Row = forwardRef(
  (
    {
      item,
      isInversion = false,
      isTitle = false,
      isTotal = false,
      totalWeight,
    }: RowProps,
    ref: React.Ref<HTMLDivElement> | undefined,
  ) => {
    const [
      sortField,
      sortOrder,
      createItem,
      updateItem,
      removeItem,
      toggleSort,
    ] = useProsConsStore(state => [
      state.sortField,
      state.sortOrder,
      state.createItem,
      state.updateItem,
      state.removeItem,
      state.toggleSort,
    ])

    const [name, setName] = useState(item?.name)
    const [weight, setWeight] = useState(item?.weight)
    const [isValidWeight, setIsValidWeight] = useState(true)

    const { t } = useTranslation()

    const confirmWeightValue = (
      id: string,
      currName: string,
      currWeight: number,
    ) => {
      if (currWeight && currWeight > 10) {
        setIsValidWeight(false)
      } else {
        setIsValidWeight(true)
        updateItem(id, currName, currWeight)
      }
    }

    useEffect(() => {
      if (item) {
        setName(item.name)
        setWeight(item.weight)
      }
    }, [item])

    return (
      <m.div ref={ref} className={rowStyles.row({ isInversion })}>
        {isTitle && (
          <>
            <span
              className={rowStyles.col({ isInversion, isTitle })}
              onClick={() => toggleSort('name')}
            >
              {!isInversion ? t('main.columns.pros') : t('main.columns.cons')}

              <span
                className={rowStyles.sortIcon({
                  isSelected: sortField === 'name',
                })}
              >
                {sortOrder === 'asc' ? <ArrowDownAZ /> : <ArrowUpZA />}
              </span>
            </span>
            <span
              className={rowStyles.col({ isInversion, isTitle })}
              onClick={() => toggleSort('weight')}
            >
              {t('main.columns.weight')}
              <span
                className={rowStyles.sortIcon({
                  isSelected: sortField === 'weight',
                })}
              >
                {sortOrder === 'asc' ? <ArrowDown01 /> : <ArrowUp10 />}
              </span>
            </span>

            <Button
              aria-label="Add row"
              className={rowStyles.button({ isInversion })}
              icon={<PlusIcon />}
              kind={Kind.Transparent}
              onClick={() =>
                createItem('', 0, isInversion ? ItemType.Cons : ItemType.Pros)
              }
            />
          </>
        )}

        {item && (
          <>
            <div className={rowStyles.col({ isInversion })}>
              <TextArea
                className={rowStyles.input}
                value={name}
                onChange={e => setName(e.target.value)}
                onBlur={() => updateItem(item?.id, name || '', weight || 0)}
                onClearButtonClick={() => setName('')}
              />
            </div>
            <div
              className={rowStyles.col({ isInversion, isValid: isValidWeight })}
            >
              <TextField
                className={rowStyles.input}
                errorMessage={t('errors.weight.invalid')}
                isValid={isValidWeight}
                type="number"
                value={weight}
                onChange={e => setWeight(Number(e.target.value))}
                onBlur={() =>
                  confirmWeightValue(item?.id, name || '', weight || 0)
                }
              />
            </div>

            <Button
              aria-label="Remove row"
              className={rowStyles.button({ isInversion })}
              icon={<CrossIcon />}
              kind={Kind.Transparent}
              onClick={() => removeItem(item.id)}
            />
          </>
        )}

        {isTotal && (
          <>
            <span className={rowStyles.col({ isInversion, isTotal })}>
              {t('main.columns.total')}
            </span>
            <span className={rowStyles.col({ isInversion, isTotal })}>
              {totalWeight}
            </span>
          </>
        )}
      </m.div>
    )
  },
)

Row.displayName = 'Row'

export const MRow = m.create(Row)

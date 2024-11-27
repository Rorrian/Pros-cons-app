'use client'

import { HTMLMotionProps, m } from 'framer-motion'
import { ArrowDown01, ArrowDownAZ, ArrowUp10, ArrowUpZA } from 'lucide-react'
import React, {
  ComponentPropsWithRef,
  forwardRef,
  useEffect,
  useState,
} from 'react'
import { useTranslation } from 'react-i18next'

import CrossIcon from '@/public/icons/cross.svg'
import PlusIcon from '@/public/icons/plus.svg'
import { useProsConsStore } from '@/store'
import { SortField } from '@/store/useProsConsStore'
import { Kind } from '@/types/button/enums'
import { Item, ItemType } from '@/types/item'

import { rowStyles } from './Row.css'
import { Button, TextArea, TextField } from '../UI'
import { TitleColumn } from './TitleColumn'

export const enum RowType {
  Title = 'title',
  Data = 'data',
  Total = 'total',
}

// FIXME: рефакторинг

type RowProps = {
  item?: Item
  isEditable?: boolean
  isInversion: boolean
  type?: RowType
  totalWeight?: number
} & ComponentPropsWithRef<'div'> &
  HTMLMotionProps<'div'> &
  React.RefAttributes<HTMLDivElement>

export const Row = forwardRef(
  (
    {
      item,
      isEditable = true,
      isInversion = false,
      totalWeight,
      type = RowType.Data,
      ...props
    }: RowProps,
    ref,
  ) => {
    const { t } = useTranslation()
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

    const isTitle = type === RowType.Title
    const isTotal = type === RowType.Total

    // TODO: Проверить количество рендеров
    // console.log(`isTotal`)

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
      <m.div ref={ref} className={rowStyles.row({ isInversion })} {...props}>
        {type === RowType.Title && (
          <>
            <TitleColumn
              iconAsc={<ArrowDownAZ size={20} />}
              iconDesc={<ArrowUpZA size={20} />}
              isEditable={isEditable}
              isInversion={isInversion}
              isTitle={isTitle}
              label={
                !isInversion ? t('main.columns.pros') : t('main.columns.cons')
              }
              sortField={sortField}
              sortOrder={sortOrder}
              type={SortField.Name}
              onSort={() => toggleSort(SortField.Name)}
            />

            <TitleColumn
              iconAsc={<ArrowDown01 size={20} />}
              iconDesc={<ArrowUp10 size={20} />}
              isEditable={isEditable}
              isInversion={isInversion}
              isTitle={isTitle}
              label={t('main.columns.weight')}
              sortField={sortField}
              sortOrder={sortOrder}
              type={SortField.Weight}
              onSort={() => toggleSort(SortField.Weight)}
            />

            {isEditable && (
              <Button
                aria-label="Add row"
                className={rowStyles.button({ isInversion })}
                icon={<PlusIcon />}
                kind={Kind.Transparent}
                onClick={() =>
                  createItem('', 0, isInversion ? ItemType.Cons : ItemType.Pros)
                }
              />
            )}
          </>
        )}

        {type === RowType.Data && item && (
          <>
            <div className={rowStyles.col({ isInversion, isEditable })}>
              <TextArea
                className={rowStyles.input}
                disabled={!isEditable}
                value={name}
                onChange={e => setName(e.target.value)}
                onBlur={() => updateItem(item?.id, name || '', weight || 0)}
                onClearButtonClick={() => setName('')}
              />
            </div>
            <div
              className={rowStyles.col({
                isInversion,
                isValid: isValidWeight,
                isEditable,
              })}
            >
              <TextField
                className={rowStyles.input}
                disabled={!isEditable}
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

            {isEditable && (
              <Button
                aria-label="Remove row"
                className={rowStyles.button({ isInversion })}
                icon={<CrossIcon />}
                kind={Kind.Transparent}
                onClick={() => removeItem(item.id)}
              />
            )}
          </>
        )}

        {type === RowType.Total && (
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

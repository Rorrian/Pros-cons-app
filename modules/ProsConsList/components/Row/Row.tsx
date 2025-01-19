'use client'

import { m } from 'framer-motion'
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
import { Button, Kind, Size, TextArea, TextField } from '@/shared/components/UI'
import { useProsConsStore } from '@/shared/store'
import { SortField } from '@/shared/store/useProsConsStore/types'
import { MotionElementProps } from '@/shared/types'
import { ProsConsItem, ProsConsType } from '@/shared/types/item'

import { rowStyles } from './Row.css'
import { TitleColumn } from '../TitleColumn/TitleColumn'

export const enum RowType {
  Title = 'title',
  Data = 'data',
  Total = 'total',
}

type RowProps = {
  item?: ProsConsItem
  isEditable?: boolean
  isInversion: boolean
  type?: RowType
  totalWeight?: number
} & ComponentPropsWithRef<'div'> &
  MotionElementProps

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
      addItemToCurrentList,
      updateItemInCurrentList,
      removeItemFromCurrentList,
      sortField,
      sortOrder,
      toggleSort,
    ] = useProsConsStore(state => [
      state.addItemToCurrentList,
      state.updateItemInCurrentList,
      state.removeItemFromCurrentList,
      state.sortField,
      state.sortOrder,
      state.toggleSort,
    ])
    const [name, setName] = useState(item?.name)
    const [weight, setWeight] = useState(item?.weight)
    const [isValidWeight, setIsValidWeight] = useState(true)

    const isTitle = type === RowType.Title
    const isTotal = type === RowType.Total

    const confirmWeightValue = (
      id: string,
      currName: string,
      currWeight: number,
    ) => {
      if (currWeight && currWeight > 10) {
        setIsValidWeight(false)
      } else {
        setIsValidWeight(true)
        updateItemInCurrentList(id, currName, currWeight)
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
                size={Size.Big}
                onClick={() =>
                  addItemToCurrentList(
                    '',
                    0,
                    isInversion ? ProsConsType.Cons : ProsConsType.Pros,
                  )
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
                onBlur={() =>
                  updateItemInCurrentList(item?.id, name || '', weight || 0)
                }
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
                size={Size.Big}
                onClick={() => removeItemFromCurrentList(item.id)}
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

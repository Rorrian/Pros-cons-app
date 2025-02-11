'use client'

import React, { JSX } from 'react'

import { Position, Tooltip } from '@/shared/components/UI/Tooltip/Tooltip'
import { SortField, SortOrder } from '@/shared/store/useProsConsStore/types'

import { rowStyles } from '../Row/Row.css'

type TitleColumnProps = {
  iconAsc: JSX.Element
  iconDesc: JSX.Element
  isEditable?: boolean
  isInversion?: boolean
  isTitle?: boolean
  label: string
  sortField: SortField | null
  sortOrder: SortOrder | null
  type: SortField
  onSort: () => void
}

export const TitleColumn = ({
  iconAsc,
  iconDesc,
  isEditable = true,
  isInversion = false,
  isTitle = false,
  label,
  sortField,
  sortOrder,
  type,
  onSort,
}: TitleColumnProps) => {
  const renderSortIcon = () => {
    if (isEditable) {
      return (
        <span
          className={rowStyles.sortIcon({ isSelected: sortField === type })}
        >
          {sortOrder === SortOrder.ASC ? iconAsc : iconDesc}
        </span>
      )
    }

    return null
  }

  return (
    <div className={rowStyles.col({ isInversion, isTitle })} onClick={onSort}>
      {label}

      {type === SortField.Weight && (
        <div className={rowStyles.tooltipWrapper}>
          <Tooltip
            position={Position.Top}
            text="1-10"
            textClassName={rowStyles.tooltipText}
            withIcon={false}
          />
        </div>
      )}

      {renderSortIcon()}
    </div>
  )
}

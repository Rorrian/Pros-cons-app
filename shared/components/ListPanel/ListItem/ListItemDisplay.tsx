'use client'

import DeleteIcon from '@/public/icons/delete.svg'
import EditIcon from '@/public/icons/edit.svg'
import { MotionElementProps } from '@/shared/types/common'

import { Button, Kind } from '../../UI'
import { listStyles } from '../ListPanel.css'
import { useListPanelContext } from '../ListPanelContext/ListPanelContext'

interface ListItemDisplayProps extends MotionElementProps {
  itemId: string
  itemName: string
  isSelected: boolean
}

export const ListItemDisplay = ({
  itemId,
  itemName,
  isSelected,
}: ListItemDisplayProps) => {
  const { selectList, deleteList, startEditing } = useListPanelContext()

  return (
    <>
      <button
        className={listStyles.listItem}
        onClick={() => {
          if (!isSelected) {
            selectList(itemId)
          }
        }}
      >
        {itemName}
      </button>

      {isSelected && (
        <div className={listStyles.actionButtons({ isSelected })}>
          <Button
            className={listStyles.actionButton}
            aria-label="Edit list's title"
            icon={<EditIcon />}
            kind={Kind.Transparent}
            onClick={() => startEditing(itemId, itemName)}
          />
          <Button
            className={listStyles.actionButton}
            aria-label="Delete list"
            icon={<DeleteIcon />}
            kind={Kind.Transparent}
            onClick={() => deleteList(itemId)}
          />
        </div>
      )}
    </>
  )
}

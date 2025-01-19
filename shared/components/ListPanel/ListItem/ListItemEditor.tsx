'use client'

import { useTranslation } from 'react-i18next'

import CancelIcon from '@/public/icons/cancel.svg'
import SuccessIcon from '@/public/icons/success.svg'

import { Button, Kind } from '../../UI'
import { listStyles } from '../ListPanel.css'
import { useListPanelContext } from '../ListPanelContext/ListPanelContext'

export const ListItemEditor = ({ isSelected }: { isSelected: boolean }) => {
  const { t } = useTranslation()
  const {
    inputRef,
    newListName,
    setNewListName,
    submitEditing,
    cancelEditing,
  } = useListPanelContext()

  return (
    <>
      <input
        ref={inputRef}
        className={listStyles.listItem}
        placeholder={t('main.sidebar.listNamePlaceholder')}
        value={newListName}
        onBlur={submitEditing}
        onChange={e => setNewListName(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter') submitEditing()
          if (e.key === 'Escape') cancelEditing()
        }}
      />
      <div className={listStyles.actionButtons({ isSelected })}>
        <Button
          className={listStyles.actionButton}
          aria-label="Save new list's title"
          icon={<SuccessIcon />}
          kind={Kind.Transparent}
          onClick={submitEditing}
        />
        <Button
          className={listStyles.actionButton}
          aria-label="Cancel editing"
          icon={<CancelIcon />}
          kind={Kind.Transparent}
          onMouseDown={cancelEditing}
        />
      </div>
    </>
  )
}

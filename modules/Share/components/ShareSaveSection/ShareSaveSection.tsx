'use client'

import { m, MotionProps } from 'framer-motion'
import { BaseHTMLAttributes, useState } from 'react'
import { useTranslation } from 'react-i18next'

import ShareIcon from '@/public/icons/share.svg'
import SuccessIcon from '@/public/icons/success.svg'
import { Button } from '@/shared/components/UI'
import { defaultTransition } from '@/shared/helpers/constants'
import { useProsConsStore } from '@/shared/store'
import { Kind, Size } from '@/shared/types/button/enums'

import { shareSaveSectionStyles } from './ShareSaveSection.css'
import { generateShareableLink } from '../../helpers/utils'
import { useSharedItemsFromURL } from '../../hooks/useSharedItemsFromURL'
import { SaveListForm } from '../SaveListForm/SaveListForm'

type ShareSaveSectionProps = BaseHTMLAttributes<HTMLElement> & MotionProps

export const ShareSaveSection = (props: ShareSaveSectionProps) => {
  const { t } = useTranslation()
  const [isCopied, setIsCopied] = useState(false)
  const [lists, currentListId, sharedItems, sharedItemsError] =
    useProsConsStore(state => [
      state.lists,
      state.currentListId,
      state.sharedItems,
      state.sharedItemsError,
    ])

  useSharedItemsFromURL()

  const currentListItems = lists.find(list => list.id === currentListId)?.items
  const isSharedItems = !!sharedItems?.length

  const handleShareList = () => {
    if (currentListItems?.length) {
      const shareLink = generateShareableLink(currentListItems)
      navigator.clipboard.writeText(shareLink).then(() => {
        setIsCopied(true)

        setTimeout(() => {
          setIsCopied(false)
        }, 300)
      })
    }
  }

  if (sharedItemsError) return null

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={defaultTransition}
      {...props}
    >
      {isSharedItems ? (
        <SaveListForm />
      ) : (
        <Button
          aria-label="Share list"
          className={shareSaveSectionStyles.shareBtn}
          icon={!isCopied ? <ShareIcon /> : <SuccessIcon />}
          kind={Kind.Secondary}
          size={Size.Small}
          title={
            !isCopied
              ? t('main.footer.shareButton')
              : t('main.footer.shareButtonSuccess')
          }
          onClick={() => handleShareList()}
        />
      )}
    </m.div>
  )
}

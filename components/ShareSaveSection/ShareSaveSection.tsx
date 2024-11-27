'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { SaveListForm } from '@/components/SaveListForm/SaveListForm'
import { generateShareableLink } from '@/helpers'
import ShareIcon from '@/public/icons/share.svg'
import SuccessIcon from '@/public/icons/success.svg'
import { useProsConsStore } from '@/store'
import { Kind, Size } from '@/types/button/enums'

import { shareSaveSectionStyles } from './ShareSaveSection.css'
import { Button } from '../UI'

export const ShareSaveSection = () => {
  const { t } = useTranslation()
  const [isCopied, setIsCopied] = useState(false)
  const [items, sharedItems, sharedItemsError] = useProsConsStore(state => [
    state.items,
    state.sharedItems,
    state.sharedItemsError,
  ])

  const isSharedItems = !!sharedItems?.length

  const handleShareList = () => {
    if (items?.length) {
      const shareLink = generateShareableLink(items)
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
    <>
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
    </>
  )
}

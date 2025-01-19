'use client'

import { m } from 'framer-motion'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import ShareIcon from '@/public/icons/share.svg'
import SuccessIcon from '@/public/icons/success.svg'
import { Button, Kind } from '@/shared/components/UI'
import { opacityAnimation } from '@/shared/helpers/constants'
import { useProsConsStore } from '@/shared/store'
import { MotionElementProps } from '@/shared/types/common'

import { shareSaveSectionStyles } from './ShareSaveSection.css'
import { generateShareableLink } from '../../helpers/utils'
import { useSharedItemsFromURL } from '../../hooks/useSharedItemsFromURL'
import { SaveListForm } from '../SaveListForm/SaveListForm'

export const ShareSaveSection = (props: MotionElementProps) => {
  const { t } = useTranslation()
  const [isCopied, setIsCopied] = useState(false)
  const [currentListItems, isSharedItems, sharedItemsError] = useProsConsStore(
    state => [
      state.lists[state.currentListId]?.items,
      !!state.sharedItems.length,
      state.sharedItemsError,
    ],
  )

  useSharedItemsFromURL()

  const handleShareList = () => {
    if (currentListItems?.length) {
      const shareLink = generateShareableLink(currentListItems)
      navigator.clipboard.writeText(shareLink).then(() => {
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 300)
      })
    }
  }

  if (sharedItemsError) return null

  return (
    <m.div {...opacityAnimation} {...props}>
      {isSharedItems ? (
        <SaveListForm />
      ) : (
        <Button
          aria-label="Share list"
          className={shareSaveSectionStyles.shareBtn}
          icon={!isCopied ? <ShareIcon /> : <SuccessIcon />}
          kind={Kind.Secondary}
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

'use client'

import { m, MotionProps } from 'framer-motion'
import { BaseHTMLAttributes, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { SaveListForm } from '@/components/SaveListForm/SaveListForm'
import { generateShareableLink } from '@/helpers'
import { defaultTransition } from '@/helpers/constants'
import ShareIcon from '@/public/icons/share.svg'
import SuccessIcon from '@/public/icons/success.svg'
import { useProsConsStore } from '@/store'
import { Kind, Size } from '@/types/button/enums'

import { footerStyles } from './Footer.css'
import { Button } from '../../Button/Button'

export const Footer = (
  props: BaseHTMLAttributes<HTMLElement> & MotionProps,
) => {
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
    <m.footer
      className={footerStyles.wrapper}
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
          className={footerStyles.shareBtn}
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
    </m.footer>
  )
}

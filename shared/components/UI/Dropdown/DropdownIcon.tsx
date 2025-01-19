import { ICON_SIZE } from '@/shared/helpers/constants'

interface DropdownIconProps {
  src: string
  alt?: string
}
export const DropdownIcon = ({ src, alt = '' }: DropdownIconProps) => {
  return (
    <img
      aria-hidden="true"
      src={src}
      alt={alt}
      style={{ width: ICON_SIZE, height: ICON_SIZE, maxWidth: 'unset' }}
    />
  )
}

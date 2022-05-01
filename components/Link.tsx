import _Link from 'next/link'
import { UrlObject } from 'url'

export const Link: React.FC<{
  className?: string
  href: string | UrlObject
  itemProp?: string
  onClick?: () => void
}> = (props) => {
  return (
    <_Link href={props.href} prefetch={false}>
      <a
        className={props.className}
        itemProp={props.itemProp}
        onClick={props.onClick}
      >
        {props.children}
      </a>
    </_Link>
  )
}

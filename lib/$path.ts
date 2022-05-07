/* eslint-disable */
// prettier-ignore
export const pagesPath = {
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

// prettier-ignore
export type PagesPath = typeof pagesPath

// prettier-ignore
export const staticPath = {
  images: {
    emoji: {
      $1F600_png: '/images/emoji/1F600.png',
      $1F641_png: '/images/emoji/1F641.png',
      $1F642_png: '/images/emoji/1F642.png',
      $2764_png: '/images/emoji/2764.png',
      LICENSE_md: '/images/emoji/LICENSE.md'
    },
    icons: {
      LICENSE_md: '/images/icons/LICENSE.md',
      arrow_clockwise_svg: '/images/icons/arrow-clockwise.svg',
      arrow_counterclockwise_svg: '/images/icons/arrow-counterclockwise.svg',
      chat_square_quote_svg: '/images/icons/chat-square-quote.svg',
      chevron_down_svg: '/images/icons/chevron-down.svg',
      code_svg: '/images/icons/code.svg',
      journal_code_svg: '/images/icons/journal-code.svg',
      journal_text_svg: '/images/icons/journal-text.svg',
      justify_svg: '/images/icons/justify.svg',
      link_svg: '/images/icons/link.svg',
      list_ol_svg: '/images/icons/list-ol.svg',
      list_ul_svg: '/images/icons/list-ul.svg',
      pencil_fill_svg: '/images/icons/pencil-fill.svg',
      text_center_svg: '/images/icons/text-center.svg',
      text_left_svg: '/images/icons/text-left.svg',
      text_paragraph_svg: '/images/icons/text-paragraph.svg',
      text_right_svg: '/images/icons/text-right.svg',
      type_bold_svg: '/images/icons/type-bold.svg',
      type_h1_svg: '/images/icons/type-h1.svg',
      type_h2_svg: '/images/icons/type-h2.svg',
      type_h3_svg: '/images/icons/type-h3.svg',
      type_italic_svg: '/images/icons/type-italic.svg',
      type_strikethrough_svg: '/images/icons/type-strikethrough.svg',
      type_underline_svg: '/images/icons/type-underline.svg'
    }
  }
} as const

// prettier-ignore
export type StaticPath = typeof staticPath

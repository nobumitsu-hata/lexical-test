/* eslint-disable */
// prettier-ignore
export const pagesPath = {
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

// prettier-ignore
export type PagesPath = typeof pagesPath

// prettier-ignore
export const staticPath = {
  _DS_Store: '/.DS_Store',
  c__4_svg: '/c--4.svg',
  favicon_ico: '/favicon.ico',
  javascript_svg: '/javascript.svg',
  laravel_svg: '/laravel.svg',
  nextjs_svg: '/nextjs.svg',
  php_svg: '/php.svg',
  profile_JPG: '/profile.JPG',
  react_svg: '/react.svg'
} as const

// prettier-ignore
export type StaticPath = typeof staticPath

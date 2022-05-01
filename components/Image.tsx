import { motion } from '@soichiro_nitta/motion'
import clsx from 'clsx'
import _Image, { ImageProps } from 'next/image'
import { useEffect, useRef } from 'react'

export const Image = (props: ImageProps) => {
  const refs = {
    root: useRef<HTMLDivElement>(null),
  }

  useEffect(() => {
    const r = refs.root.current
    if (r) {
      const i = r.children[0].querySelector('img')
      if (i) {
        i.classList.add(
          'opacity-0',
          'scale-125',
          'blur-2xl',
          'w-full',
          'h-full'
        )
        i.style.willChange = 'opacity, transform, filter'
      }
    }
  }, [refs.root])

  return (
    <div ref={refs.root} className={clsx('relative', props.className)}>
      <_Image
        {...props}
        className={undefined}
        layout={props.layout || 'responsive'}
        lazyBoundary="300px"
        quality={90}
        onLoadingComplete={async () => {
          const r = refs.root.current
          if (r) {
            const i = r.children[0].querySelector('img')
            if (i) {
              await motion.to(i, 3, 'out', {
                filter: 'blur(0px)',
                opacity: 1,
                scale: 1,
              })
              motion.removeWillChange(i)
            }
          }
        }}
      />
    </div>
  )
}

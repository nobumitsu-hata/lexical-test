import { motion } from '@soichiro_nitta/motion'
import { RefObject, useEffect } from 'react'

export const useVideo = (params: {
  opened: boolean
  refs: RefObject<HTMLVideoElement>[]
}): void => {
  const { opened, refs } = params

  useEffect(() => {
    if (opened) {
      refs.forEach((ref) => {
        const video = ref.current
        if (video) {
          video.load()
          // video.addEventListener('loadedmetadata', () => {})
          video.addEventListener('canplay', () => {
            const observer = new IntersectionObserver(
              (entries) => {
                if (entries[0].isIntersecting) {
                  // その他のvideoを停止
                  refs.forEach((ref) => {
                    const other = ref.current
                    other?.pause()
                  })
                  // 今見えているvideoを再生
                  motion.to(video, 1, 'inout', { opacity: '1' })
                  video.play()
                } else {
                  video.pause()
                }
              },
              {
                rootMargin: '-30% 0%',
              }
            )
            observer.observe(video)
          })
        }
      })
    }
  }, [opened, refs])
}

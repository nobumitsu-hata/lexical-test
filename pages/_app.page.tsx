import '~/styles/global.css'

// import '~/styles/main.css'
// import '~/themes/PlaygroundEditorTheme.css'
import { AppProps } from 'next/app'
import { useEffect } from 'react'

const Page: React.FC<AppProps> = (props) => {
  useEffect(() => {
    const n = document.getElementById('__next')
    if (n) n.scrollTop = 0
  }, [props.router.asPath])

  return (
    <>
      <div className="w-full h-full">
        <props.Component {...props.pageProps} />
      </div>
    </>
  )
}

export default Page

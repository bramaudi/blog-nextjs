import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import siteMetadata from '@/data/siteMetadata'

const Cusdis = ({ mapping }) => {
  const { theme } = useTheme()
  const [enableLoadComments, setEnabledLoadComments] = useState(true)
  const COMMENTS_ID = 'cusdis_thread'

  function LoadComments() {
    setEnabledLoadComments(false)

    const script = document.createElement('script')
    script.src = '/static/js/cusdis.js'
    script.async = true
    script.defer = true

    const comments = document.getElementById(COMMENTS_ID)
    if (comments) comments.appendChild(script)
  }

  useEffect(() => {
    window.CUSDIS?.setTheme(theme)
  }, [theme])

  return (
    <div className="pt-6 pb-6 text-center text-gray-700 dark:text-gray-300">
      {enableLoadComments && <button onClick={LoadComments}>Load Comments</button>}
      <div
        id={COMMENTS_ID}
        className="cusdis"
        data-host="https://cusdis.com"
        data-theme={theme}
        data-app-id={siteMetadata.comment.cusdisConfig.appId}
        data-page-id={mapping}
        data-page-url={window.location.href}
        data-page-title={document.title}
      ></div>
    </div>
  )
}

export default Cusdis

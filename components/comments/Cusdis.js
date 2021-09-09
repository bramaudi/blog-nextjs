import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import siteMetadata from '@/data/siteMetadata'

const Cusdis = ({ mapping }) => {
  const [enableLoadComments, setEnabledLoadComments] = useState(true)
  const COMMENTS_ID = 'cusdis_thread'

  function LoadComments() {
    setEnabledLoadComments(false)

    const script = document.createElement('script')
    script.src = 'https://cusdis.com/js/cusdis.es.js'
    script.async = true
    script.defer = true

    const comments = document.getElementById(COMMENTS_ID)
    if (comments) comments.appendChild(script)
  }

  return (
    <div className="pt-6 pb-6 text-center text-gray-700 dark:text-gray-300">
      {enableLoadComments && <button onClick={LoadComments}>Load Comments</button>}
      <div
        id={COMMENTS_ID}
        className="giscus"
        data-host="https://cusdis.com"
        data-app-id={siteMetadata.comment.cusdisConfig.appId}
        data-page-id={mapping}
        data-page-url={window.location.href}
        data-page-title={document.title}
      ></div>
    </div>
  )
}

export default Cusdis

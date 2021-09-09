import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const PictureOfMe = () => {
  const { theme } = useTheme()
  const [source, setSource] = useState('/static/images/me-light.jpg')
  useEffect(() => {
    theme === 'dark'
      ? setSource('/static/images/me-dark.jpg')
      : setSource('/static/images/me-light.jpg')
  }, [theme])
  return (
    <div className="picture-of-me">
      <Image width="250" height="250" alt="Brama Udi" title="Me in Blitar" src={source} />
    </div>
  )
}

export default PictureOfMe

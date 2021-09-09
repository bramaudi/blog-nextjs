import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const PictureOfMe = () => {
  const { theme } = useTheme()
  const [source, setSource] = useState('')
  useEffect(() => {
    theme === 'dark'
      ? setSource('/static/images/me-dark.jpg')
      : setSource('/static/images/me-light.jpg')
  }, [])
  useEffect(() => {
    theme === 'dark'
      ? setSource('/static/images/me-dark.jpg')
      : setSource('/static/images/me-light.jpg')
  }, [theme])
  return <Image className="picture-of-me" alt="Brama Udi" title="Me in Blitar" src={source} />
}

export default PictureOfMe

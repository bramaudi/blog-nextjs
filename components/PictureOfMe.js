import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const PictureOfMe = () => {
  return (
    <div className="picture-of-me">
      <Image
        width="250"
        height="250"
        alt="Brama Udi"
        title="Me in Blitar"
        src={'/static/images/me-light.jpg'}
      />
      <Image
        width="250"
        height="250"
        alt="Brama Udi"
        title="Me in Blitar"
        src={'/static/images/me-dark.jpg'}
      />
    </div>
  )
}

export default PictureOfMe

import { createRef } from 'react'
import { PageSeo } from '@/components/SEO'
import Twemoji from '@/components/Twemoji'
import siteMetadata from '@/data/siteMetadata'
import { getAllEmoji } from '@/lib/twemoji-list.js'

export function getStaticProps() {
  return {
    props: { emojies: getAllEmoji() },
  }
}

function Tooltip({ tooltip, children }) {
  const tipRef = createRef(null)
  const inputRef = createRef(null)
  function handleMouseEnter() {
    tipRef.current.classList.add('opacity-100')
  }
  function handleMouseLeave() {
    tipRef.current.classList.remove('opacity-100')
  }
  function handleCopy() {
    inputRef.current.select()
    document.execCommand('copy')

    tipRef.current.classList.add('!bg-green-700')
    tipRef.current.textContent = 'Copied!'
    setTimeout(() => {
      tipRef.current.classList.remove('!bg-green-700')
      tipRef.current.textContent = tooltip
    }, 500)
  }
  return (
    <div className="relative flex items-center">
      <input
        type="text"
        className="opacity-0 w-0 p-0 m-0"
        ref={inputRef}
        value={tooltip}
        readOnly
      />
      <div
        className="absolute whitespace-nowrap px-2 bottom-12 -left-3 rounded flex items-center transition-all duration-150 opacity-0 bg-gray-600 text-white dark:bg-gray-800"
        ref={tipRef}
      >
        {tooltip}
      </div>
      <div
        className="select-none cursor-pointer"
        onClick={handleCopy}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleMouseEnter}
        onTouchEnd={handleMouseLeave}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  )
}

export default function Tags(props) {
  /** @type {string[]} */
  const emojies = props.emojies
  return (
    <>
      <PageSeo title={`Twemoji - ${siteMetadata.author}`} description="List of custom emoji" />
      <div className="pt-6 pb-8 space-x-2 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 md:px-6">
          Twemoji
        </h1>
      </div>
      <div className="pt-5">
        {emojies.map((path) => (
          <div className="inline-block mb-2" key={path}>
            <Tooltip tooltip={`:${path}:`}>
              <Twemoji size="twa-3x" emoji={path} />
            </Tooltip>
          </div>
        ))}
      </div>
    </>
  )
}

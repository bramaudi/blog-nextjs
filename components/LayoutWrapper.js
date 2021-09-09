import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import NextImage from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'

const LayoutWrapper = ({ children }) => {
  const [navShow, setNavShow] = useState(false)
  const [y, setY] = useState(0)
  const elementHeader = useRef()

  useEffect(() => {
    setY(window.scrollY)
  }, [])

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget
      if (y > window.scrollY) {
        elementHeader.current.classList.remove('-translate-y-full')
      } else if (y < window.scrollY) {
        elementHeader.current.classList.add('-translate-y-full')
      }
      setY(window.scrollY)
    },
    [y]
  )

  useEffect(() => {
    if (navShow) window.removeEventListener('scroll', handleNavigation)
    else window.addEventListener('scroll', handleNavigation)
  }, [navShow, handleNavigation])

  useEffect(() => {
    setY(window.scrollY)
    window.addEventListener('scroll', handleNavigation)

    return () => {
      window.removeEventListener('scroll', handleNavigation)
    }
  }, [handleNavigation])

  return (
    <SectionContainer>
      <div className="flex flex-col justify-between min-h-screen">
        <header
          ref={elementHeader}
          className="flex items-center justify-between py-6 sticky top-0 z-40 transition-header bg-gray-200 dark:bg-gray-900"
        >
          <div>
            <Link href="/" aria-label="Bram's Blog">
              <div className="flex items-center justify-between">
                <div className="mr-3 flex justify-center items-center">
                  <NextImage
                    src="/static/images/me.jpg"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav useNav={[navShow, setNavShow]} />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper

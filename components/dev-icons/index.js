import Git from './git.svg'
import PHP from './php.svg'

const icons = {
  git: Git,
  php: PHP,
}

const DevIcon = ({ type }) => {
  if (!icons[type]) return 'Missing Dev Icon'

  const DevSvg = icons[type]
  return <DevSvg className="h-16 w-16 lg:h-14 lg:w-14 xl:h-24 xl:w-24" fill="currentColor" />
}

export default DevIcon

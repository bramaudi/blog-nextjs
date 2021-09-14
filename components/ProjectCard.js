import Image from './Image'
import Link from './Link'

const ProjectCard = ({ title, description, imgSrc, href, repoGithub }) => {
  const [repoUser, repoName] = repoGithub?.split('/')
  return (
    <div className="p-4 md:w-1/2">
      <div className="overflow-hidden border-2 border-gray-200 rounded-md border-opacity-60 dark:border-gray-700">
        <Image alt={title} src={imgSrc} width={544} height={306} />
        <div className="p-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-2xl font-bold leading-8 tracking-tight">
              {href ? (
                <Link href={href} aria-label={`Link to ${title}`}>
                  {title}
                </Link>
              ) : (
                title
              )}
            </h2>
          </div>
          <p className="mb-3 prose text-gray-500 max-w-none dark:text-gray-400">{description}</p>
          {!repoGithub ? null : (
            <div className="w-40 flex-shrink-0 -ml-10 mb-2">
              <a href={`//github.com/${repoUser}/${repoName}`} target="_blank" rel="noreferrer">
                <Image
                  alt={title}
                  src={`https://img.shields.io/github/stars/${repoUser}/${repoName}.svg?style=social&label=Stars&maxAge=2592000`}
                  shouldOpenLightbox={false}
                  width={112}
                  height={28}
                />
              </a>
            </div>
          )}
          {href && (
            <Link
              href={href}
              className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={`Link to ${title}`}
            >
              Learn more &rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

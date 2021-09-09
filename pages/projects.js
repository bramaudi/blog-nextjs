import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import ProjectCard from '@/components/ProjectCard'
import { PageSeo } from '@/components/SEO'

const ProjectContainer = ({ title, data }) => {
  return (
    <div className="container py-12">
      <h3 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 mb-4">
        {title}
      </h3>
      <div className="flex flex-wrap -m-4">
        {data.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            imgSrc={project.imgSrc}
            href={project.href}
            repoName={project.repoName}
          />
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <>
      <PageSeo title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            My open source side projects and stuff
          </p>
        </div>

        <ProjectContainer title="Side Projects" data={projectsData} />
      </div>
    </>
  )
}

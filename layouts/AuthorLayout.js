import Image from '@/components/Image'
import { PageSeo } from '@/components/SEO'

export default function AuthorLayout({ children, frontMatter }) {
  const {
    name,
    avatar,
    occupation,
    company,
    email,
    twitter,
    facebook,
    linkedin,
    github,
  } = frontMatter

  return (
    <>
      <PageSeo title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="divide-y dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About {name}
          </h1>
        </div>
        <div className="items-start xl:grid xl:grid-cols-3 pt-8">
          <Image
            src={avatar}
            alt="avatar"
            shouldOpenLightbox={true}
            width="300px"
            height="300px"
            className="object-cover rounded-md"
          />
          <div className="mt-10 pb-8 xl:pl-8 prose prose-lg dark:prose-dark max-w-none xl:col-span-2">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

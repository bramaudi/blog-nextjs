import Link from '@/components/Link'
import { PageSeo } from '@/components/SEO'
import Tag from '@/components/Tag'
import Twemoji from '@/components/Twemoji.js'
import PictureOfMe from '@/components/PictureOfMe.js'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSeo title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <PictureOfMe />
          <h1 className="pt-5 text-3xl text-center font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:leading-14">
            Brama Udi <Twemoji emoji="clown-honker" size="inherit" />
          </h1>
          <p className="text-lg leading-7 text-gray-900 dark:text-gray-200">
            <p className="my-4">
              Hallo kawan! Saya adalah seorang pengembang web, pengguna linux, pecinta nasi pecel
              dan ini adalah blog yang saya buat dengan tujuan untuk mengabadikan hal-hal yang
              menurut saya penting dan akan berguna dikemudian hari seperti tutorial,
              troubleshooting / debugging, tips & trik, dan lain sebagainya seputar pemrogramman
              web.
            </p>
            <p className="my-4">
              Namun meski begitu tidak menutup kemungkinan juga saya akan menulis beberapa topik
              diluar pemrograman seperti tentang kehidupan saya pribadi misalnya, atau bahkan topik
              yang random hehe.
            </p>
            <p className="my-4">
              Yah selamat datang di blog pribadi saya <Twemoji emoji="pepe-noice" />
            </p>
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-3xl font-bold mb-1 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}

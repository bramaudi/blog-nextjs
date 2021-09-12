import siteMetadata from '@/data/siteMetadata'
import dynamic from 'next/dynamic'

const CusdisComponent = dynamic(
  () => {
    return import('@/components/comments/Cusdis')
  },
  { ssr: false }
)

const Comments = ({ frontMatter }) => {
  return (
    <>
      {siteMetadata.comment && siteMetadata.comment.provider === 'cusdis' && (
        <CusdisComponent mapping={frontMatter.slug} />
      )}
    </>
  )
}

export default Comments

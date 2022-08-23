import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ArticleCell from 'src/components/ArticleCell'

interface ArticlePageProps {
  id: string
}

const ArticlePage = ({ id }: ArticlePageProps) => {
  return (
    <>
      <MetaTags title="Article" description="Article page" />
      <ArticleCell id={id} />
    </>
  )
}

export default ArticlePage

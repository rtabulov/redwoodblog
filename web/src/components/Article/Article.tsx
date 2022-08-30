import { Link, routes } from '@redwoodjs/router'
import { format } from 'date-fns'

import type { Post } from 'types/graphql'

const truncate = (text: string, length: number) => {
  if (text && text.length > length) {
    return text.substring(0, length) + '...'
  }

  return text
}

interface Props {
  article: Post
  summary?: boolean
}

const Article = ({ article, summary = false }: Props) => {
  return (
    <article className="mt-10">
      <header>
        <h2 className="text-xl font-semibold text-blue-700">
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>
      <div className="mt-2 font-light text-gray-900">
        {summary ? truncate(article.body, 100) : article.body}
      </div>
    </article>
  )
}

export default Article

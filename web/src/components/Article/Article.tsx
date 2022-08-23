import { Link, routes } from '@redwoodjs/router'
import { format } from 'date-fns'

import type { Post } from 'types/graphql'

interface Props {
  article: Post
}

const Article = ({ article }: Props) => {
  return (
    <article>
      <header>
        <h2>
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>
      <div>{article.body}</div>
      <div>
        Posted at: {format(new Date(article.createdAt), 'MMMM dd, HH:mm')}
      </div>
    </article>
  )
}

export default Article

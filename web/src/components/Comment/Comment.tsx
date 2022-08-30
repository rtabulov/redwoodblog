import { format } from 'date-fns'

// Just a temporary type. We'll replace this later
interface Props {
  comment: {
    name: string
    createdAt: string
    body: string
  }
}

const Comment = ({ comment }: Props) => {
  return (
    <div className="rounded-lg bg-gray-200 p-8">
      <header className="flex justify-between">
        <h2 className="font-semibold text-gray-700">{comment.name}</h2>
        <time className="text-xs text-gray-500" dateTime={comment.createdAt}>
          {format(new Date(comment.createdAt), 'd MMMM yyyy')}
        </time>
      </header>
      <p className="mt-2 text-sm">{comment.body}</p>
    </div>
  )
}

export default Comment

import CommentForm from './CommentForm'
import cuid from 'cuid'

export const generated = (args) => {
  mockGraphQLMutation('CreateCommentMutation', (variables, { ctx }) => {
    ctx.delay(1000)

    return {
      createComment: {
        id: cuid(),
        name: variables.input.name,
        body: variables.input.body,
        createdAt: new Date().toISOString(),
      },
    }
  })

  return <CommentForm {...args} />
}

export default { title: 'Components/CommentForm' }

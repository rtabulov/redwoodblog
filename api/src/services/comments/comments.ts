import type { QueryResolvers, CommentResolvers } from 'types/graphql'
import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'

export const comments: QueryResolvers['comments'] = () => {
  return db.comment.findMany()
}

export const Comment: CommentResolvers = {
  post: (_obj, { root }) =>
    db.comment.findUnique({ where: { id: root.id } }).post(),
}

interface CreateCommentArgs {
  input: Prisma.CommentCreateInput
}

export const createComment = ({ input }: CreateCommentArgs) => {
  return db.comment.create({
    data: input,
  })
}

export const deleteComment = ({ id }: Prisma.CommentWhereUniqueInput) => {
  return db.comment.delete({
    where: { id },
  })
}

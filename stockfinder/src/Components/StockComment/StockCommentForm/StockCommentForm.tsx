import React from 'react'
import * as Yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

type Props = {
    symbol: string;
    handleComment: (e: CommentFormInputs) => void;
}

type CommentFormInputs = {
    title: string;
    content: string;
}

const validation = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    content: Yup.string().required("Content is required"),
})

const StockCommentForm = ({ symbol, handleComment }: Props) => {
    const { register, handleSubmit, formState: { errors }
    } = useForm<CommentFormInputs>({ resolver: yupResolver(validation)})
  return (
    <form onSubmit={handleSubmit(handleComment)}>
      <div className="space-y-3">
        <div>
          <input
            type="text"
            id="title"
            className="w-full px-3 py-2 bg-background-primary border border-border rounded-medium text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors duration-150"
            placeholder="Comment title"
            {...register("title")}
          />
          {errors.title && (
            <p className="mt-1 text-xs text-status-error">{errors.title.message}</p>
          )}
        </div>
        <div>
          <textarea
            id="comment"
            rows={4}
            className="w-full px-3 py-2 bg-background-primary border border-border rounded-medium text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors duration-150 resize-none"
            placeholder="Share your thoughts on this stock..."
            {...register("content")}
          />
          {errors.content && (
            <p className="mt-1 text-xs text-status-error">{errors.content.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-accent text-text-inverse hover:bg-accent-hover active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface transition-all duration-150 font-medium rounded-medium text-sm"
        >
          Post comment
        </button>
      </div>
    </form>
  )
}

export default StockCommentForm

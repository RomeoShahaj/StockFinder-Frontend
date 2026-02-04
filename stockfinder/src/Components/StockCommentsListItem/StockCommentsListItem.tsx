import React from 'react'
import { CommentGet } from '../../Models/Comment';

type Props = {
    comment: CommentGet;
}

const StockCommentsListItem = ({comment}: Props) => {
  return (
    <div className="p-3 bg-background-primary border border-border-muted rounded-medium hover:border-border transition-colors duration-150">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium text-text-primary truncate">
              {comment.title}
            </p>
          </div>
          <p className="text-xs text-text-tertiary mt-0.5">@{comment.createdBy}</p>
        </div>
      </div>
      <p className="mt-2 text-sm text-text-secondary leading-relaxed">
        {comment.content}
      </p>
    </div>
  )
}

export default StockCommentsListItem

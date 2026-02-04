import React from 'react'
import { CommentGet } from '../../Models/Comment';
import StockCommentsListItem from '../StockCommentsListItem/StockCommentsListItem';

type Props = {
    comments: CommentGet[];
};

const StockCommentsList = ({comments}: Props) => {
  if (!comments || comments.length === 0) {
    return (
      <p className="text-sm text-text-tertiary text-center py-4">
        No comments yet. Be the first to share your thoughts!
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {comments.map((comment, index) => (
        <StockCommentsListItem key={index} comment={comment} />
      ))}
    </div>
  );
}

export default StockCommentsList

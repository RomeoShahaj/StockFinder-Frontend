import React, { useEffect, useState } from 'react'
import StockCommentForm from './StockCommentForm/StockCommentForm'
import { commentGetAPI, commentPostAPI } from '../../Services/CommentService'
import { toast } from 'react-toastify'
import { CommentGet } from '../../Models/Comment'
import StockCommentsList from '../StockCommentsList/StockCommentsList'
import Spinner from '../Spinner/Spinner'

type Props = {
    stockSymbol: string
}
type CommentFormInputs = {
    title: string;
    content: string;
}

const StockComment = ({ stockSymbol }: Props) => {

    const [comments, setComment] = useState<CommentGet[] | null>(null);
    const [loading, setLoading] = useState<boolean>();

    useEffect(() => {
        getComments();
    }, [])

    const handleComment = (e: CommentFormInputs) => {
        commentPostAPI(e.title, e.content, stockSymbol)
        .then((res) => {
            if(res) {
                toast.success("Comment created succesfully!");
                getComments();
            }
        }).catch((e) => 
        toast.warning(e));

    }

    const getComments = () => {
        setLoading(true);
        commentGetAPI(stockSymbol)
        .then((res) => {
            setLoading(false);
            setComment(res?.data!);
        })
    }
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold text-text-primary mb-4">Comments</h2>
      <div className="bg-surface border border-border rounded-medium p-4">
        <StockCommentForm symbol={stockSymbol} handleComment={handleComment}/>
        <div className="mt-6">
          {loading ? <Spinner /> : <StockCommentsList comments={comments!}/>}
        </div>
      </div>
    </div>
  )
}

export default StockComment

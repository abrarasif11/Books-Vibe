import React from 'react'
import { useParams } from 'react-router-dom'

const BookDetail = () => {
    const {bookId} = useParams();
  return (
    <div>
      boi details : {bookId}
    </div>
  )
}

export default BookDetail

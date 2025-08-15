import React from "react";

const Book = ({ book }) => {
  return (
    <div className="card bg-base-100 w-96 p-6 shadow-sm">
      <figure className="bg-[#F3F3F3] p-8 rounded-2xl">
        <img src={book.image} alt={book.bookName} className="h-[166px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{book.bookName}</h2>
        <p>By : {book.author}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default Book;

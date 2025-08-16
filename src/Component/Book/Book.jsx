import { key } from "localforage";
import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, image, bookName, author, tags, category, rating } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 w-96 p-6 mb-10 shadow-sm">
        <figure className="bg-[#F3F3F3] p-8 rounded-2xl">
          <img src={image} alt={bookName} className="h-[166px]" />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-2">
            {tags.map((tag, index) => (
              <button
                key={index}
                className="btn btn-xs btn-disabled bg-green-50 text-green-800 rounded-2xl"
              >
                {book.tags}
              </button>
            ))}
          </div>
          <h2 className="card-title">{bookName}</h2>
          <p>By : {author}</p>
          <div className="border-t-2 border-dashed"></div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">Ratings : {rating}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;

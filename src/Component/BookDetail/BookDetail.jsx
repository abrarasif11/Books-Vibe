import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetail = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);
  const book = data.find((book) => book.bookId === id);
  const { image,author,bookName,category,review } = book;
  return (
    <div className="hero bg-[#F3F3F3] mx-auto mt-10 mb-10">
      <div className="hero-content flex-col lg:flex-row">
        <figure>
        <img
          src={image}
          className="bg-[#F3F3F3] p-8 rounded-2xl shadow-2xl h-[564px] w-[3215px]"
        />
        </figure>
        <div className="ml-10">
          <h1 className="text-5xl font-bold">{bookName}</h1>
          <p className="py-6">
            By : {author}
          </p>
          <div className="border-t-2 border-dashed mb-4"></div>
          <p className="mb-3">
           {category}
          </p>
          <div className="border-t-2 border-dashed mb-5"></div>
          <p>Review : {review}</p>
          <div className="flex mt-10 ">
          <button className="btn btn-outline mr-10 p-3 rounded-lg">Read</button>
          <button className="btn bg-[#50B1C9] text-white rounded-lg">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;

import React from "react";
import bannerImg from "../../assets/books.jpg";
const Banner = () => {
  return (
    <div className="hero bg-base-200 w-[#1170px]  h-[#554px] mb-10 mt-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">
            Books to freshen up 
            <br />
            your bookshelf
          </h1>
          <button className="btn mt-10 bg-[#23BE0A] text-white rounded">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../Utility/AddToDb";
import Book from "../Book/Book";

const ListedBooks = () => {
  const allBooks = useLoaderData();
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState('');

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );
    setReadList(readBookList);
  }, []);
  const handleSort = sortType => {
    setSort(sortType);
    if(sortType === 'Number of Pages'){
      const sortReadList = [...readList].sort((a, b) => a.totalPages - b.totalPages);
      setReadList(sortReadList)
    }
    if(sortType === 'Ratings'){
      const sortRating = [...readList].sort((a, b) => a.rating -b.rating);
      setReadList(sortRating)
    }
  }
  return (
    <div>
      <h1 className="text-center font-semibold mt-5 text-3xl">Book List </h1>

      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-center font-semibold mt-5 text-3xl">
            Book I Read
          </h2>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn bg-green-500 text-white rounded-lg m-1">
             {
              sort ? `Sort By: ${ sort }` : 'Sort By'
             }
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li onClick={() => handleSort('Ratings') }>
                <a>Ratings</a>
              </li>
              <li onClick={() => handleSort('Number of Pages')}>
                <a>Number of Pages</a>
              </li>
            </ul>
          </div>
          {readList.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;

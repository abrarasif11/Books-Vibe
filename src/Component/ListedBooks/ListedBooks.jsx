import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../Utility/AddToDb";
import Book from "../Book/Book";

const ListedBooks = () => {
    const allBooks = useLoaderData();
    const [readList,setReadList] = useState([])

    useEffect( () => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
        setReadList(readBookList);    
    },[])
  return (
    <div>
      <h1>Book List </h1>

      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <h2>Book I Read</h2>
          {
            readList.map(book => <Book
            key={book.bookId}
            book={book}
            ></Book>)
          }
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;

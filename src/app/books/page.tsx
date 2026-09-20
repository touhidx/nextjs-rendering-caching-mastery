import { error } from "console";
import React from "react";
import BookCard from "../components/BookCard";
const getBooks = async () => {
  const res = await fetch("http://localhost:5000/books", {
    cache: "force-cache",
    // cache:"no-cache"
    // cache:"no-store"
    // cache: "reload",
    // next:{revalidate:20}
  });
  if (!res.ok) {
    throw new Error("response is not getting ");
  }
  return res.json();
};
const BookPage = async () => {
  const books = await getBooks();
  return (
    <div className="grid grid-cols-3 gap-3 my-3">
      {books.map((book) => (
        <BookCard key={book.id} book={book}></BookCard>
      ))}
    </div>
  );
};

export default BookPage;

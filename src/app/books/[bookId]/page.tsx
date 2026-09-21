import React from "react";

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/books");
  const books = await res.json();
  return books.slice(1, 4).map((book) => ({ bookId: book.id }));
};

const BookDetailsPage = async ({ params }) => {
  const { bookId } = await params;
  const res = await fetch(`http://localhost:5000/books/${bookId}`);
  const book = await res.json();
  const { title, id, description } = book;
  return (
    <div className="container mx-auto my-5">
      <h1>id : {id}</h1>
      <h1>id : {title}</h1>
      <h1>id : {description}</h1>
    </div>
  );
};

export default BookDetailsPage;

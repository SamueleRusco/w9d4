import { useState } from "react";
import { Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = (props) => {
  const [ricerca, setRicerca] = useState("");

  const filtraLibri = (books, filtro) => {
    if (filtro === "" || filtro === null) {
      return books;
    }
    return books.filter((book) => {
      const splittedTitle = book.title
        .replace(/[^\w\s]/gi, "")
        .toLowerCase()
        .split(" ");
      const splittedSearch = filtro
        .replace(/[^\w\s]/gi, "")
        .toLowerCase()
        .split(" ");

      let libro = true;

      splittedSearch.forEach((singleWord) => {
        if (!splittedTitle.includes(singleWord)) {
          libro = false;
        }
      });

      return libro;
    });
  };
  return (
    <>
      <input type="text" onChange={(e) => setRicerca(e.target.value)} />
      <Row>
        {filtraLibri(props.fantasyBooks, ricerca).map((book) => (
          <SingleBook
            key={book.asin}
            immagine={book.img}
            titolo={book.title}
            asin={book.asin}
          />
        ))}
      </Row>
    </>
  );
};
export default BookList;

import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { BookCard } from "./BookCard";
import styled, { css } from "styled-components";

export const Grid = styled.div`
 add required style here
`;

const Books = () => {
  const [data, setData] = useState([]);
  let {id}=useParams();
  useEffect(() => {
    // make a GET request to http://localhost:8080/books to get all the books data
    axios.get(` http://localhost:8080/books${id}`).then((res)=>{
      setData(res.data)
    })
  }, []);

  return (
    <>
      <h1>Books</h1>
      <Grid data-testid="books-container">
        {/* {!!data && 
          // map thorugh the data and use <BookCard/> component to display each book
          } */
          <div className="bookContainer">
            <h2 className="title">{Books.title}</h2>
            <img className="image" src={`$books.imageUrl`} alt="#"/>
            <div className="author">{books.author}</div>
            <div className="description">{books.description}</div>
            <div className="price">{books.price}</div>
            <div className="section">{books.section}</div>
            <div className="isbnNumber">{books.isbnNumber}</div>
            <ul className="reviews"></ul>

          </div>
          }
      </Grid>
    </>
  );
};
export default Books;

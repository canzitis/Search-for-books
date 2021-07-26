import React from "react";
import { NavLink } from "react-router-dom";
import s from "./SearchResultPage.module.css";
import booksDefault from "../../img/booksDefault.jpg";

const SearchResultPage = (props) => {
  debugger;
  if (!props.loadingBooks) {
    <div>Loading...</div>;
  }
  return (
    <div className={s.pageBooks}>
      <div className={s.searchResultPage}>
        {props.books.map((b) => (
          <div key={b.id} className={s.bookResult}>
            <NavLink to={"/books/" + b.id}>
              {b.volumeInfo.imageLinks ? (
                <img src={b.volumeInfo.imageLinks.thumbnail} alt="" />
              ) : (
                <img src={booksDefault} alt="" />
              )}
            </NavLink>

            <div>
              <b>Название:</b>
              <p>{b.volumeInfo.title}</p>
            </div>
            <div>
              <b>Автор:</b>
              <p>{b.volumeInfo.authors}</p>
            </div>
            <div>
              <b>Дата публикации:</b>
              <p>{b.volumeInfo.publishedDate}</p>
            </div>
            <div>
              <b>Издатель:</b>
              <p>{b.volumeInfo.publisher}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResultPage;

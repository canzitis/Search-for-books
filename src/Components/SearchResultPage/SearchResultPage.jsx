import React from "react";
import { NavLink } from "react-router-dom";
import s from "./SearchResultPage.module.css";
import booksDefault from "../../img/booksDefault.jpg";
import Preloader from "../Preloader/Preloader";

const SearchResultPage = (props) => {
  if (!props.loadingBooks) {
    return <Preloader />;
  }
  return (
    <div className={s.pageBooks}>
      <div className={s.searchResultPage}>
        {props.books.map((b) => (
          <div key={b.id} className={s.bookResult}>
            <NavLink to={"/book/" + b.id}>
              {b.volumeInfo.imageLinks ? (
                <img src={b.volumeInfo.imageLinks.thumbnail} alt="" />
              ) : (
                <img src={booksDefault} alt="" />
              )}
            </NavLink>
            <div className={s.infoBook}>
              <div>
                <b>Название:</b>
                <p>{b.volumeInfo.title}</p>
              </div>
              <div>
                <b>Автор:</b>
                {b.volumeInfo.authors ? (
                  <p>{b.volumeInfo.authors}</p>
                ) : (
                  <p>-</p>
                )}
              </div>
              <div>
                <b>Дата публикации:</b>
                {b.volumeInfo.publishedDate ? (
                  <p>{b.volumeInfo.publishedDate}</p>
                ) : (
                  <p>-</p>
                )}
              </div>
              <div>
                <b>Издатель:</b>
                {b.volumeInfo.publisher ? (
                  <p>{b.volumeInfo.publisher}</p>
                ) : (
                  <p>-</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResultPage;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./SearchResultPage.module.css";
import booksDefault from "../../img/booksDefault.jpg";
import Preloader from "../Preloader/Preloader";
import leftPortionPageImg from "../../img/leftPortion.png";
import rightPortionPagImg from "../../img/RightPortion.png";

const SearchResultPage = (props) => {
  debugger;

  const pagesCount = Math.ceil(props.totalItems / props.pageSize);
  const pagesPortionSize = Math.ceil(pagesCount / props.portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
  const rightPortionPageNumber = portionNumber * props.portionSize;
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  if (!props.loadingBooks) {
    return <Preloader />;
  }
  return (
    <div className={s.pageBooks}>
      <div className={s.PagesBloc}>
        {portionNumber > 1 && (
          <div className={s.chevronBoubleLeft}>
            <img
              onClick={() => {
                setPortionNumber(portionNumber - 1);
              }}
              src={leftPortionPageImg}
              alt=""
            />
          </div>
        )}
        {pages
          .filter(
            (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
          )
          .map((p) => {
            debugger;

            return (
              <span className={s.activBtnPages} key={p.id}>
                <button
                  className={props.currentPage === p && s.buttonAktive}
                  onClick={() => {
                    props.onPageChanged(p);
                  }}
                >
                  {p}
                </button>
              </span>
            );
          })}
        {pagesPortionSize > portionNumber && (
          <div className={s.chevronBoubleRight}>
            <img
              onClick={() => {
                setPortionNumber(portionNumber + 1);
              }}
              src={rightPortionPagImg}
              alt=""
            />
          </div>
        )}
      </div>

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

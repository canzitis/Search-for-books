import React from "react";
import { NavLink } from "react-router-dom";
import s from "./SearchResultPage.module.css";
const SearchResultPage = (props) => {
  return (
    <div className={s.pageBooks}>
      <div className={s.searchResultPage}>
        {props.books.map((b) => (
          <div key={b.id} className={s.bookResult}>
            <NavLink to={"/books/" + b.id}>
              <img src={b.volumeInfo.imageLinks.smallThumbnail} alt="" />
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResultPage;

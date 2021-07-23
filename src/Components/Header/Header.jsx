import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.logoCompany}>
        <img src="" alt="" />
        <div>
          <h5>Самая большая библиотека в мире</h5>
        </div>
      </div>
      <div className={s.sitePages}>
        <a href="">Домой</a>
        <a href="">О нас</a>
        <a href="">Контакты</a>
      </div>
    </div>
  );
};

export default Header;

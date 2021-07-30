import { NavLink } from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import s from "./ProfileBooks.module.css";
import defaultImgBook from "../../img/booksDefault.jpg";
import backImg from "../../img/backImg.png";
import shopImg from "../../img/shopping-cart.png";

const ProfileBooks = (props) => {
  if (!props.setupBooks) {
    return <Preloader />;
  }
  return (
    <div className={s.blockInfoBook}>
      <NavLink to={"/search"}>
        <img src={backImg} alt="" className={s.btnBack} />
      </NavLink>
      <div className={s.blockFlex}>
        <div className={s.blockA}>
          {props.book.volumeInfo.imageLinks ? (
            <img src={props.book.volumeInfo.imageLinks.thumbnail} alt="" />
          ) : (
            <img src={defaultImgBook} alt="" />
          )}
          <div className={s.blockInfoBookA}>
            <b>Автор:</b>
            <p>{props.book.volumeInfo.authors}</p>
            <b>Издатель:</b>
            <p>{props.book.volumeInfo.publisher}</p>
            <b>Дата публикации:</b>
            <p>{props.book.volumeInfo.publishedDate}</p>
            <b>Кол-во страниц:</b>
            <p>{props.book.volumeInfo.pageCount}</p>
            <b>Тип печати:</b>
            <p>{props.book.volumeInfo.printType}</p>
            {props.book.volumeInfo.dimensions ? (
              <div>
                <b>Габаритные размеры:</b>
                <ul>
                  <li>Высота: {props.book.volumeInfo.dimensions.height}</li>
                  <li>Ширина: {props.book.volumeInfo.dimensions.width}</li>
                  <li>Толщина: {props.book.volumeInfo.dimensions.thickness}</li>
                </ul>
              </div>
            ) : null}
          </div>
        </div>
        <div className={s.blockB}>
          <div className={s.blockInfoBookB}>
            <b>Название:</b>
            <p>{props.book.volumeInfo.title}</p>
            <b>Подзаголовок:</b>
            <p>{props.book.volumeInfo.subtitle}</p>
            <b>Категория:</b>
            <p>{props.book.volumeInfo.categories}</p>
            <b>Описание:</b>
            <p>{props.book.volumeInfo.description}</p>
            <div className={s.descriptionBorder}></div>
          </div>
          <div className={s.webReaderLink}>
            <b>Бесплатный фрагмент: </b>
            <a target="_blank" href={props.book.accessInfo.webReaderLink}>
              Читать
            </a>
            <div className={s.price}>
              <h3>Цена: </h3>
              <div className={s.priceBlockFlex}>
                <p>
                  {props.book.saleInfo.listPrice
                    ? props.book.saleInfo.listPrice.amount
                    : '-'}{" "}
                  {props.book.saleInfo.listPrice
                    ? props.book.saleInfo.listPrice.currencyCode
                    : null}
                </p>
              </div>
              <div className={s.shop}>
                <div>
                  <img src={shopImg} alt="" />
                </div>
                <div>
                  <button>
                    <h4>Купить</h4>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBooks;

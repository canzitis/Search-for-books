import s from "./SearchPage.module.css";
import SearchPageForm from "./SearchPageForm/SearchPageForm";

const SearchPage = (props) => {
  return (
    <div className={s.searchPage}>
      <div className={s.searchPageImgLogo}>
        <img src="" alt="" />
      </div>
      <div>
        <SearchPageForm {...props} />
      </div>
      <div>
        <h5>Прикоснись быстрому поиску книг </h5>
      </div>
    </div>
  );
};

export default SearchPage;

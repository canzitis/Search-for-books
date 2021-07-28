import s from "./SearchPage.module.css";
import SearchPageForm from "./SearchPageForm/SearchPageForm";
import logoimg from "../../img/logo.png";

const SearchPage = (props) => {
  return (
    <div className={s.searchPage}>
      <img className={s.logoImg} src={logoimg} alt="" />
      <div className={s.searchPageForm}>
        <SearchPageForm {...props} />
      </div>
    </div>
  );
};

export default SearchPage;

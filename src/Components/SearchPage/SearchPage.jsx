import s from "./SearchPage.module.css";
import SearchPageForm from "./SearchPageForm/SearchPageForm";

const SearchPage = (props) => {
  return (
    <div className={s.searchPage}>
      <div className={s.searchPageForm}>
        <SearchPageForm {...props} />
      </div>
    </div>
  );
};

export default SearchPage;

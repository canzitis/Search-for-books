import { Formik } from "formik";
import s from "./SearchPageForm.module.css";
import serachImg from "../../../img/search.png";

const SearchPageForm = (props) => {
  const addSearch = (values) => {
    props.getBooks(values.searchText);
  };
  return (
    <Formik
      className={s.fomBlock}
      initialValues={{ searchText: "" }}
      onSubmit={addSearch}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <form onSubmit={handleSubmit} className={s.fromBlock}>
          <input
            placeholder="Введите название книги"
            className={s.searchFromInput}
            type="text"
            name="searchText"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <button className={s.searchBtn} type="submit">
            <img src={serachImg} alt="" />
          </button>
        </form>
      )}
    </Formik>
  );
};

export default SearchPageForm;

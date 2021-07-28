import { Formik } from "formik";
import s from "./SearchPageForm.module.css";
import serachImg from "../../../img/search.png";

const SearchPageForm = (props) => {
  const validateTextPost = (values) => {
    const errors = {};
    if (!values.searchText || values.searchText.length > 200) {
      errors.text = "Длина не может быть меньше 1 символа или больше 200";
    }
    return errors;
  };
  const addSearch = (values) => {
    props.setmodeActivationBooks();
    props.getBooks(values.searchText);
  };
  return (
    <Formik
      validate={validateTextPost}
      className={s.fomBlock}
      initialValues={{ searchText: "" }}
      onSubmit={addSearch}
    >
      {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className={s.fromBlock}>
            <input
              placeholder="Введите название книги"
              className={s.searchFromInput}
              type="text"
              name="searchText"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />

            <div>
              <button className={s.searchBtn} type="submit">
                <img src={serachImg} alt="" />
              </button>
            </div>
          </div>
          <div className={s.errorsText}>{errors.text && errors.text}</div>
        </form>
      )}
    </Formik>
  );
};

export default SearchPageForm;

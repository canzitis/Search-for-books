import { Field, Formik } from "formik";
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
    props.getBooks(
      values.startIndex,
      values.searchText,
      values.printType,
      values.orderBy
    );
  };
  return (
    <Formik
      validate={validateTextPost}
      className={s.fomBlock}
      initialValues={{
        searchText: "",
        printType: "all",
        orderBy: "relevance",
      }}
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
          <div className={s.printTypeBlockFlex}>
            <div className={s.printTypeBlock}>
              <h5>Тип печати: </h5>
              <Field as="select" name="printType">
                <option value="all">Все</option>
                <option value="books">Книги</option>
                <option value="magazines">Журналы</option>
              </Field>
            </div>
            <div className={s.orderByBlock}>
              <h5>Сортировка:</h5>
              <Field as="select" name="orderBy">
                <option value="relevance">По релевантности</option>
                <option value="newest">От новых к старым</option>
              </Field>
            </div>
          </div>

          <div className={s.errorsText}>{errors.text && errors.text}</div>
        </form>
      )}
    </Formik>
  );
};

export default SearchPageForm;

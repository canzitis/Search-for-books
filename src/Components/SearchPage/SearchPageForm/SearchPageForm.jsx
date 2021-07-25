import { Formik } from "formik";
import s from "./SearchPageForm.css";

const SearchPageForm = (props) => {
  const addSearch = (values) => {
    props.getBooks(values.searchText);
  };
  /*  validate={(values) => {
    const errors = {};
    if (!values.search) {
      errors.search = "Required";
    }
    return errors;
  }}
   */
  return (
    <Formik
      className={s.fomBlock}
      initialValues={{ searchText: "" }}
      onSubmit={addSearch}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="searchText"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <div>{errors.email && touched.email && errors.email}</div>
          <button type="submit" disabled="" className={s.searchBtn}>
            Search
          </button>
        </form>
      )}
    </Formik>
  );
};

export default SearchPageForm;

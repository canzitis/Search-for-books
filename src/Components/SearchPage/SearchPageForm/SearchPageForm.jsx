import { Formik } from "formik";
import s from "./SearchPageForm.css";

const SearchPageForm = () => {
  return (
    <Formik
      className={s.fomBlock}
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
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
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <div>{errors.email && touched.email && errors.email}</div>
          <button type="submit" disabled={isSubmitting} className={s.searchBtn}>
            Search
          </button>
        </form>
      )}
    </Formik>
  );
};

export default SearchPageForm;

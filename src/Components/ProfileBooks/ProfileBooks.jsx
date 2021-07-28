import { NavLink } from "react-router-dom";
import Preloader from "../Preloader/Preloader";

const ProfileBooks = (props) => {
  debugger;
  /*  if (!props.setupBooks) {
    return <Preloader />;
  } */
  return (
    <div>
      {props.book.volumeInfo.imageLinks ? (
        <img src={props.book.volumeInfo.imageLinks.thumbnail} alt="" />
      ) : (
        <img src={props.book.volumeInfo.imageLinks.small} alt="" />
      )}
      <NavLink to={""}>
        <button>Back</button>
      </NavLink>
    </div>
  );
};

export default ProfileBooks;

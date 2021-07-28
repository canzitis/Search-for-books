import SearchPage from "./SearchPage";
import React from "react";
import { connect } from "react-redux";
import {
  getBooks,
  setmodeActivationBooks,
} from "../../Redux/searchBooks-reducer";

class SearchPageContainer extends React.PureComponent {
  render() {
    return <SearchPage {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.serchBooksPage.books,
  };
};

export default connect(mapStateToProps, { getBooks, setmodeActivationBooks })(
  SearchPageContainer
);

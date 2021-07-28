import React from "react";
import { connect } from "react-redux";
import { getBooks } from "../../Redux/searchBooks-reducer";
import SearchResultPage from "./SearchResultPage";

class SearchResultPageContainer extends React.Component {
  render() {
    return <SearchResultPage {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.serchBooksPage.books,
    loadingBooks: state.serchBooksPage.loadingBooks,
  };
};

export default connect(mapStateToProps, { getBooks })(
  SearchResultPageContainer
);

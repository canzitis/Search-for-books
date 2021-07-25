import React from "react";
import { connect } from "react-redux";
import { getBooks } from "../../Redux/searchBooks-reducer";
import SearchResultPage from "./SearchResultPage";

class SearchResultPageContainer extends React.PureComponent {
  render() {
    return <SearchResultPage {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.serchBooksPage.books,
  };
};

export default connect(mapStateToProps, { getBooks })(
  SearchResultPageContainer
);

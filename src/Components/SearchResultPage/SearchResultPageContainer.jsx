import React from "react";
import { connect } from "react-redux";
import { getBooks, getcurrentPage } from "../../Redux/searchBooks-reducer";
import SearchResultPage from "./SearchResultPage";

class SearchResultPageContainer extends React.Component {
  onPageChanged = (currentPage) => {
    debugger;
    if (currentPage > this.props.currentPage) {
      this.props.getBooks(this.props.searchName, this.props.startIndex + 10);
      this.props.getcurrentPage(currentPage);
    } else {
      this.props.getBooks(this.props.searchName, this.props.startIndex - 10);
      this.props.getcurrentPage(currentPage);
    }
  };
  render() {
    return (
      <SearchResultPage {...this.props} onPageChanged={this.onPageChanged} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.serchBooksPage.books,
    loadingBooks: state.serchBooksPage.loadingBooks,
    currentPage: state.serchBooksPage.currentPage,
    pageSize: state.serchBooksPage.pageSize,
    totalItems: state.serchBooksPage.totalItems,
    portionSize: state.serchBooksPage.portionSize,
    searchName: state.serchBooksPage.searchName,
    startIndex: state.serchBooksPage.startIndex,
  };
};
export default connect(mapStateToProps, { getBooks, getcurrentPage })(
  SearchResultPageContainer
);

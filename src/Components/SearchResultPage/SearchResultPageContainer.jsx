import React from "react";
import { connect } from "react-redux";
import { getBooks, getcurrentPage } from "../../Redux/searchBooks-reducer";
import SearchResultPage from "./SearchResultPage";

class SearchResultPageContainer extends React.Component {
  onPageChanged = (currentPage) => {
    if (currentPage > this.props.currentPage) {
      this.props.getBooks(
        this.props.startIndex + 10,
        this.props.search,
        this.props.printType,
        this.props.orderBy
      );
      this.props.getcurrentPage(currentPage);
    } else {
      this.props.getBooks(
        this.props.startIndex - 10,
        this.props.search,
        this.props.printType,
        this.props.orderBy
      );
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
    search: state.serchBooksPage.search,
    startIndex: state.serchBooksPage.startIndex,
    printType: state.serchBooksPage.printType,
    orderBy: state.serchBooksPage.orderBy,
  };
};
export default connect(mapStateToProps, { getBooks, getcurrentPage })(
  SearchResultPageContainer
);

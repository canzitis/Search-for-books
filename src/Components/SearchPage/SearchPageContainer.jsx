import SearchPage from "./SearchPage";
import React from "react";
import s from "./SearchPage.module.css";
import { connect } from "react-redux";
import { getBooks } from "../../Redux/searchBooks-reducer";

class SearchPageContainer extends React.PureComponent {
  render() {
    return <SearchPage {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { getBooks })(SearchPageContainer);

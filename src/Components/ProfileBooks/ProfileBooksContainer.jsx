import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { getBookPage } from "../../Redux/pageBooks-reducer";
import ProfileBooks from "./ProfileBooks";

class ProfileBooksContainer extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getBookPage(id);
  }
  render() {
    return <ProfileBooks {...this.props} />;
  }
}
const mapStateToProps = (state) => {
  return {
    book: state.pageBook.book,
    setupBooks: state.pageBook.setupBooks,
  };
};
export default compose(
  connect(mapStateToProps, { getBookPage }),
  withRouter
)(ProfileBooksContainer);

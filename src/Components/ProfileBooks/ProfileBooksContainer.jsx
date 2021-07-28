import { connect } from "react-redux";
import React from "react";
import ProfileBooks from "./ProfileBooks";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { getBookPage } from "../../Redux/pageBooks-reducer";

class ProfileBooksContainer extends React.Component {
  componentDidMount() {
    debugger;
    let id = this.props.match.params.id;
    this.props.getBookPage(id);
  }
  componentDidUpdate() {
    let id = this.props.match.params.id;
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

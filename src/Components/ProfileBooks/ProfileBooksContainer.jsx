import { connect } from "react-redux";
import React from "react";
import ProfileBooks from "./ProfileBooks";
import { getBookPage } from "../../Redux/pageBooks-reducer";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

class ProfileBooksContainer extends React.Component {
  componentDidMount() {
    debugger;
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
  };
};

export default compose(
  connect(mapStateToProps, { getBookPage }),
  withRouter
)(ProfileBooksContainer);

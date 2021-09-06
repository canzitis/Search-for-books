import "./App.css";
import s from "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import SearchPageContainer from "./Components/SearchPage/SearchPageContainer";
import SearchResultPageContainer from "./Components/SearchResultPage/SearchResultPageContainer";
import ProfileBooksContainer from "./Components/ProfileBooks/ProfileBooksContainer";
import logoGit from "./img/github.png";
import logoVk from "./img/vk.png";
import logoInsta from "./img/instagram.png";
import bookImg from "./img/book-black.png";

class App extends React.Component {
  render() {
    return (
      <div className={s.sitePage}>
        <div className="App">
          <Route path="/search" render={() => <SearchPageContainer />} />
          <Route path="/search" render={() => <SearchResultPageContainer />} />
          <Route path="/book/:id?" render={() => <ProfileBooksContainer />} />
        </div>
        <div className="boxSocialNetworks">
          <div className="box-social">
            <a target="blank" href="https://github.com/canzitis">
              <img src={logoGit} alt="" />
            </a>
            <a  className="img2" target="blank" href="https://vk.com/canzit">
              <img src={logoVk} alt="" />
            </a>
            <a target="blank" href="https://www.instagram.com/canzit">
              <img src={logoInsta} alt="" />
            </a>
          </div>
        </div>
        <div className="copyright">
          <span>© 2021 Search for books, Inc</span>
          <img src={bookImg} alt="" />
        </div>
      </div>
    );
  }
}

export default App;

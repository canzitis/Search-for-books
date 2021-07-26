import "./App.css";
import s from "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import SearchPageContainer from "./Components/SearchPage/SearchPageContainer";
import SearchResultPageContainer from "./Components/SearchResultPage/SearchResultPageContainer";
import ProfileBooksContainer from "./Components/ProfileBooks/ProfileBooksContainer";

class App extends React.Component {
  render() {
    return (
      <div className={s.sitePage}>
        <div className="App">
          <Route
            path="/bookPage/:id?"
            render={() => <ProfileBooksContainer />}
          />
          <Route path="" render={() => <SearchPageContainer />} />
          <Route path="" render={() => <SearchResultPageContainer />} />
        </div>
      </div>
    );
  }
}

export default App;

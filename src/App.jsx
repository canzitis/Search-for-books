import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import s from "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import SearchPageContainer from "./Components/SearchPage/SearchPageContainer";

class App extends React.Component {
  render() {
    return (
      <div className={s.sitePage}>
        <div className="App">
          <div className={s.header}>
            <Header />
          </div>
          <div className={s.appWraperContent}>
          <Route path="" render={() => <SearchPageContainer />} />
          </div>
          <div className={s.footer}>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import SearchPage from "./Components/SearchPage/SearchPage";
import s from "./App.css";

function App() {
  return (
    <div className={s.sitePage}>
      <div className="App">
        <div className={s.header}>
          <Header />
        </div>
        <div className={s.appWraperContent}>
          <SearchPage />
        </div>
        <div className={s.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

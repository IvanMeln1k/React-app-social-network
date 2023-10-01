import { BrowserRouter, Route, Routes } from "react-router-dom";
import s from "./App.module.scss";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className={s.app}>
        <div className={s.wrapper}>
          <Header />
          <Navbar />
          <div className={s.contentblock}>
            <Routes>
              <Route
                path="/profile"
                element={<Profile store={props.store} />}
              />
              <Route
                path="/dialogs/*"
                element={<DialogsContainer store={props.store} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

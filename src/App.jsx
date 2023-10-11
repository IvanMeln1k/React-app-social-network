import { Route, Routes } from "react-router-dom";
import s from "./App.module.scss";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
  return (
    <div className={s.app}>
      <div className={s.wrapper}>
        <HeaderContainer />
        <Navbar />
        <div className={s.contentblock}>
          <Routes>
            <Route path="/profile/:id?" element={<ProfileContainer />} />
            <Route
              path="/dialogs/*"
              element={<DialogsContainer store={props.store} />}
            />
            <Route path="/users/*" element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;

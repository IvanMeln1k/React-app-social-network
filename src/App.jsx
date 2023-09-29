import s from "./App.module.scss";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";

const App = () => {
  return (
    <div className={s.app}>
      <div className={s.wrapper}>
        <Header />
        <Navbar />
        <div className={s.contentblock}>
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default App;

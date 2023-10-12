import { Route, Routes } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";

const App = (props) => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="gap-[10px] grid grid-cols-5 [&>*]:p-[10px] [&>*]:rounded-[5px] grid-rows-[auto_1fr] py-[15px] min-h-[100vh]">
        <HeaderContainer />
        <NavbarContainer />
        <div className="bg-indigo-200 col-span-4">
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

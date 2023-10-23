import React from "react";
import { Route, Routes } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import { compose } from "redux";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import preloader from "./assets/gifs/preloader.gif";
const UsersContainer = React.laze(() =>
  import("./components/Users/UsersContainer")
);
const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);
const LoginContainer = React.lazy(() =>
  import("./components/Login/LoginContainer")
);

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.isInitialized) {
      return (
        <div className="flex w-full h-[100vh] items-center justify-center">
          <img className="max-w-full" src={preloader} />
        </div>
      );
    }

    return (
      <div className="max-w-[1200px] mx-auto">
        <div className="gap-[10px] grid grid-cols-5 [&>*]:p-[10px] [&>*]:rounded-[5px] grid-rows-[auto_1fr] py-[15px] min-h-[100vh]">
          <HeaderContainer />
          <NavbarContainer />
          <div className="bg-indigo-200 col-span-4">
            <Routes>
              <Route
                path="/login"
                element={
                  <React.Suspense fallback={<div>Loading...</div>}>
                    <LoginContainer />
                  </React.Suspense>
                }
              />
              <Route
                path="/profile/:id?"
                element={
                  <React.Suspense fallback={<div>Loading...</div>}>
                    <ProfileContainer />
                  </React.Suspense>
                }
              />
              <Route
                path="/dialogs/*"
                element={
                  <React.Suspense fallback={<div>Loading...</div>}>
                    <DialogsContainer />
                  </React.Suspense>
                }
              />
              <Route
                path="/users/*"
                element={
                  <React.Suspense fallback={<div>Loading...</div>}>
                    <UsersContainer />
                  </React.Suspense>
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isInitialized: state.app.isInitialized,
});

export default compose(connect(mapStateToProps, { initializeApp }))(App);

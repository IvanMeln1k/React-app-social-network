import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const initialState = {
  userData: {
    id: null,
    email: null,
    login: null,
  },
  isAuth: false,
};

const SET_USER_DATA = "SET_USER_DATA";

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        userData: {
          ...action.userData,
        },
        isAuth: action.isAuth,
      };
    default:
      return state;
  }
};

//Thunk creators
export const auth = () => (dispatch) => {
  authAPI.authMe().then((data) => {
    if (data.resultCode == 0) {
      dispatch(setUserData(data.data, true));
    }
  });
};
export const login =
  (email, password, rememberMe = false) =>
  (dispatch) => {
    authAPI.login(email, password, rememberMe).then((data) => {
      if (data.resultCode == 0) {
        dispatch(auth());
      } else {
        const message =
          data.messages.length > 0 ? data.messages[0] : "Some error";
        dispatch(stopSubmit("login", { _error: message }));
      }
    });
  };
export const logout = () => (dispatch) => {
  authAPI.logout().then((data) => {
    if (data.resultCode == 0) {
      dispatch(
        setUserData(
          {
            id: null,
            email: null,
            login: null,
          },
          false
        )
      );
    }
  });
};

//Action creators
export const setUserData = (userData, isAuth) => {
  return {
    type: SET_USER_DATA,
    userData,
    isAuth,
  };
};

export default authReducer;

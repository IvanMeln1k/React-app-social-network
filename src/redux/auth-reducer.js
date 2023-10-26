import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const initialState = {
  userData: {
    id: null,
    email: null,
    login: null,
  },
  isAuth: false,
  captcha: null,
};

const SET_USER_DATA = "React-app-social-network/auth-reducer/SET_USER_DATA";
const SET_CAPTCHA = "React-app-social-network/auth-reducer/SET_CAPTCHA";

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
    case SET_CAPTCHA:
      return {
        ...state,
        captcha: action.captcha,
      };
    default:
      return state;
  }
};

//Thunk creators
export const auth = () => async (dispatch) => {
  const data = await authAPI.authMe();
  if (data.resultCode == 0) {
    dispatch(setUserData(data.data, true));
  }
};
export const getCaptcha = () => async (dispatch) => {
  const data = await securityAPI.getCaptcha();
  dispatch(setCaptcha(data.url));
};
export const login =
  (email, password, rememberMe = false, captcha = null) =>
  async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode == 0) {
      dispatch(auth());
    } else if (data.resultCode == 10) {
      dispatch(getCaptcha());
      dispatch(stopSubmit("login", { _error: "Captcha" }));
    } else {
      const message =
        data.messages.length > 0 ? data.messages[0] : "Some error";
      dispatch(stopSubmit("login", { _error: message }));
    }
  };
export const logout = () => async (dispatch) => {
  const data = await authAPI.logout();
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
};

//Action creators
export const setUserData = (userData, isAuth) => {
  return {
    type: SET_USER_DATA,
    userData,
    isAuth,
  };
};
export const setCaptcha = (captcha) => {
  return {
    type: SET_CAPTCHA,
    captcha,
  };
};

export default authReducer;

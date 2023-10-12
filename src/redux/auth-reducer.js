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
        isAuth: true,
      };
    default:
      return state;
  }
};

//Thunk creators
export const auth = () => (dispatch) => {
  authAPI.authMe().then((data) => {
    if (data.resultCode == 0) {
      dispatch(setUserData(data.data));
    }
  });
};

//Action creators
export const setUserData = (userData) => {
  return {
    type: SET_USER_DATA,
    userData,
  };
};

export default authReducer;

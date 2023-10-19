import { profileAPI } from "../api/api";

const initialState = {
  isFetching: false,
  profile: null,
  status: null,
  id: null,
};

const SET_PROFILE = "SET_PROFILE";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_STATUS = "SET_STATUS";

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};

//Thunk creators
export const getProfile = (id) => (dispatch) => {
  dispatch(setIsFetching(true));
  profileAPI.getProfile(id).then((data) => {
    dispatch(setProfile(data));
    dispatch(setIsFetching(false));
  });
};
export const getStatus = (id) => (dispatch) => {
  profileAPI.getStatus(id).then((data) => {
    dispatch(setStatus(data));
  });
};
export const updateStatus = (status) => (dispatch) => {
  debugger;
  profileAPI.updateStatus(status).then((data) => {
    if (data.resultCode == 0) {
      dispatch(setStatus(status));
    }
  });
};

//Action creators
export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status,
  };
};
export const setProfile = (profile) => {
  return {
    type: SET_PROFILE,
    profile,
  };
};
export const setIsFetching = (isFetching) => {
  return {
    type: SET_IS_FETCHING,
    isFetching,
  };
};

export default profileReducer;

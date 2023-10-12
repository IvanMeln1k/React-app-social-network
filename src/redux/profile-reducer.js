import { profileAPI } from "../api/api";

const initialState = {
  isFetching: false,
  profile: null,
  id: null,
};

const SET_PROFILE = "SET_PROFILE";
const SET_IS_FETCHING = "SET_IS_FETCHING";

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
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

//Action creators
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

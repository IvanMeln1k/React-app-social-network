import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";

const initialState = {
  isFetching: false,
  profile: null,
  status: null,
  id: null,
};

const SET_PROFILE = "React-app-social-network/profile-reducer/SET_PROFILE";
const SET_IS_FETCHING =
  "React-app-social-network/profile-reducer/SET_IS_FETCHING";
const SET_STATUS = "React-app-social-network/profile-reducer/SET_STATUS";
const UPDATE_PHOTO_SUCCESS =
  "React-app-social-network/profile-reducer/UPDATE_PHOTO_SUCCESS";

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
    case UPDATE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          photos: { ...action.photos },
        },
      };
    default:
      return state;
  }
};

//Thunk creators
export const getProfile = (id) => async (dispatch) => {
  dispatch(setIsFetching(true));
  const data = await profileAPI.getProfile(id);
  dispatch(setProfile(data));
  dispatch(setIsFetching(false));
};
export const getStatus = (id) => async (dispatch) => {
  const data = await profileAPI.getStatus(id);
  dispatch(setStatus(data));
};
export const updateStatus = (status) => async (dispatch) => {
  const data = await profileAPI.updateStatus(status);
  if (data.resultCode == 0) {
    dispatch(setStatus(status));
  }
};
export const updatePhoto = (photo) => async (dispatch) => {
  const data = await profileAPI.updatePhoto(photo);
  if (data.resultCode == 0) {
    dispatch(updatePhotoSuccess(data.data.photos));
  }
};
export const updateProfile = (profile) => async (dispatch, getState) => {
  const id = getState().auth.userData.id;
  const data = await profileAPI.updateProfile(profile);
  if (data.resultCode == 0) {
    dispatch(getProfile(id));
  } else {
    dispatch(stopSubmit("profileForm", { _error: data.messages[0] }));
  }
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
const updatePhotoSuccess = (photos) => {
  return {
    type: UPDATE_PHOTO_SUCCESS,
    photos,
  };
};

export default profileReducer;

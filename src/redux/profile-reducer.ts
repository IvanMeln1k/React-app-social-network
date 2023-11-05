import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";

const initialState = {
  isFetching: false,
  profile: null as ProfileType | null,
  status: null as string | null,
  id: null as number | null,
};
export type ContactsType = {
  github: string | null;
  vk: string | null;
  facebook: string | null;
  instagram: string | null;
  twitter: string | null;
  website: string | null;
  youtube: string | null;
  mainLink: string | null;
};
export type PhotosType = {
  small: string | null;
  large: string | null;
};
export type ProfileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string | null;
  fullName: string | null;
  aboutMe: string | null;
  contacts: ContactsType;
  photos: PhotosType;
};
export type StateType = typeof initialState;

const SET_PROFILE = "React-app-social-network/profile-reducer/SET_PROFILE";
const SET_IS_FETCHING =
  "React-app-social-network/profile-reducer/SET_IS_FETCHING";
const SET_STATUS = "React-app-social-network/profile-reducer/SET_STATUS";
const UPDATE_PHOTO_SUCCESS =
  "React-app-social-network/profile-reducer/UPDATE_PHOTO_SUCCESS";

const profileReducer = (state = initialState, action: any): StateType => {
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
        } as ProfileType,
      };
    default:
      return state;
  }
};

//Thunk creators
export const getProfile = (id: number) => async (dispatch: any) => {
  dispatch(setIsFetching(true));
  const data = await profileAPI.getProfile(id);
  dispatch(setProfile(data));
  dispatch(setIsFetching(false));
};
export const getStatus = (id: number) => async (dispatch: any) => {
  const data = await profileAPI.getStatus(id);
  dispatch(setStatus(data));
};
export const updateStatus = (status: string) => async (dispatch: any) => {
  const data = await profileAPI.updateStatus(status);
  if (data.resultCode == 0) {
    dispatch(setStatus(status));
  }
};
export const updatePhoto = (photo: PhotosType) => async (dispatch: any) => {
  const data = await profileAPI.updatePhoto(photo);
  if (data.resultCode == 0) {
    dispatch(updatePhotoSuccess(data.data.photos));
  }
};
export const updateProfile =
  (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const id = getState().auth.userData.id;
    const data = await profileAPI.updateProfile(profile);
    if (data.resultCode == 0) {
      dispatch(getProfile(id));
    } else {
      dispatch(stopSubmit("profileForm", { _error: data.messages[0] }));
    }
  };

//Action creators
type SetStatusActionType = {
  type: typeof SET_STATUS;
  status: string;
};
export const setStatus = (status: string): SetStatusActionType => {
  return {
    type: SET_STATUS,
    status,
  };
};
type SetProfileActionType = {
  type: typeof SET_PROFILE;
  profile: ProfileType;
};
export const setProfile = (profile: ProfileType): SetProfileActionType => {
  return {
    type: SET_PROFILE,
    profile,
  };
};
type SetIsFetchingActionType = {
  type: typeof SET_IS_FETCHING;
  isFetching: boolean;
};
export const setIsFetching = (isFetching: boolean): SetIsFetchingActionType => {
  return {
    type: SET_IS_FETCHING,
    isFetching,
  };
};
type UpdatePhotoSuccessActionType = {
  type: typeof UPDATE_PHOTO_SUCCESS;
  photos: PhotosType;
};
const updatePhotoSuccess = (
  photos: PhotosType
): UpdatePhotoSuccessActionType => {
  return {
    type: UPDATE_PHOTO_SUCCESS,
    photos,
  };
};

export default profileReducer;

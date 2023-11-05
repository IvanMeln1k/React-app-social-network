import { usersAPI } from "../api/api";
import { PhotosType } from "./profile-reducer";

const initialState = {
  users: [] as Array<UserType>,
  totalCount: 0,
  page: 1,
  count: 5,
  pagePage: 1,
  pageCount: 5,
  isFetching: false,
  inProcess: [] as Array<number>,
};
export type UserType = {
  id: number;
  name: string;
  status: string;
  photos: PhotosType;
};
export type StateType = typeof initialState;

const SET_IS_FETCHING =
  "React-app-social-network/users-reducer/SET_IF_FETCHING";
const SET_USERS = "React-app-social-network/users-reducer/SET_USERS";
const FOLLOW = "React-app-social-network/users-reducer/FOLLOW";
const UNFOLLOW = "React-app-social-network/users-reducer/UNFOLLOW";
const SET_TOTAL_COUNT =
  "React-app-social-network/users-reducer/SET_TOTAL_COUNT";
const SET_PAGE = "React-app-social-network/users-reducer/SET_PAGE";
const SET_COUNT = "React-app-social-network/users-reducer/SET_COUNT";
const SET_PAGE_PAGE = "React-app-social-network/users-reducer/SET_TOTAL_PAGES";
const SET_PAGE_COUNT = "React-app-social-network/users-reducer/SET_PAGE_COUNT";
const ADD_IN_PROCESS = "React-app-social-network/users-reducer/ADD_IN_PROCESS";
const DELETE_IN_PROCESS =
  "React-app-social-network/users-reducer/DELETE_IN_PROCESS";

const usersReducer = (state = initialState, action: any): StateType => {
  switch (action.type) {
    case ADD_IN_PROCESS:
      return {
        ...state,
        inProcess: [state.inProcess, action.id],
      };
    case DELETE_IN_PROCESS:
      return {
        ...state,
        inProcess: state.inProcess.filter((id) => id != action.id),
      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case SET_PAGE_COUNT:
      return {
        ...state,
        pageCount: action.pageCount,
      };
    case SET_PAGE_PAGE:
      return {
        ...state,
        pagePage: action.pagePage,
      };
    case SET_COUNT:
      return {
        ...state,
        count: action.count,
      };
    case SET_PAGE:
      return {
        ...state,
        page: action.page,
      };
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.totalCount,
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id == action.id) {
            return {
              ...user,
              followed: true,
            };
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id == action.id) {
            return {
              ...user,
              followed: false,
            };
          }
          return user;
        }),
      };
    default:
      return state;
  }
};

export default usersReducer;

//Thunk creators
export const getUsers =
  (count: number, page: number) => async (dispatch: any) => {
    dispatch(setIsFetching(true));
    const data = await usersAPI.getUsers(count, page);
    dispatch(setUsers(data.items));
    dispatch(setTotalCount(data.totalCount));
    dispatch(setPage(page));
    dispatch(setIsFetching(false));
  };
export const follow = (id: number) => async (dispatch: any) => {
  dispatch(addInProcess(id));
  const data = await usersAPI.follow(id);
  if (data.resultCode == 0) {
    dispatch(followSuccess(id));
    dispatch(deleteInProcess(id));
  }
};
export const unfollow = (id: number) => async (dispatch: any) => {
  dispatch(addInProcess(id));
  const data = await usersAPI.unfollow(id);
  if (data.resultCode == 0) {
    dispatch(unfollowSuccess(id));
    dispatch(deleteInProcess(id));
  }
};

//Action creators
type AddInProcessActionType = {
  type: typeof ADD_IN_PROCESS;
  id: number;
};
export const addInProcess = (id: number): AddInProcessActionType => {
  return {
    type: ADD_IN_PROCESS,
    id,
  };
};
type DeleteInProcessActionType = {
  type: typeof DELETE_IN_PROCESS;
  id: number;
};
export const deleteInProcess = (id: number): DeleteInProcessActionType => {
  return {
    type: DELETE_IN_PROCESS,
    id,
  };
};
type SetIsFetchingType = {
  type: typeof SET_IS_FETCHING;
  isFetching: boolean;
};
export const setIsFetching = (isFetching: boolean): SetIsFetchingType => {
  return {
    type: SET_IS_FETCHING,
    isFetching,
  };
};
type SetPageCountActionType = {
  type: typeof SET_PAGE_COUNT;
  pageCount: number;
};
export const setPageCount = (pageCount: number): SetPageCountActionType => {
  return {
    type: SET_PAGE_COUNT,
    pageCount,
  };
};
type SetPagePageActionType = {
  type: typeof SET_PAGE_PAGE;
  pagePage: number;
};
export const setPagePage = (pagePage: number): SetPagePageActionType => {
  return {
    type: SET_PAGE_PAGE,
    pagePage,
  };
};
type SetCountActionType = {
  type: typeof SET_COUNT;
  count: number;
};
export const setCount = (count: number): SetCountActionType => {
  return {
    type: SET_COUNT,
    count,
  };
};
type SetPageActionType = {
  type: typeof SET_PAGE;
  page: number;
};
export const setPage = (page: number): SetPageActionType => {
  return {
    type: SET_PAGE,
    page,
  };
};
type SetTotalCountActionType = {
  type: typeof SET_TOTAL_COUNT;
  totalCount: number;
};
export const setTotalCount = (totalCount: number): SetTotalCountActionType => {
  return {
    type: SET_TOTAL_COUNT,
    totalCount,
  };
};
type FollofSuccessActionType = {
  type: typeof FOLLOW;
  id: number;
};
export const followSuccess = (id: number): FollofSuccessActionType => {
  return {
    type: FOLLOW,
    id: id,
  };
};
type UnfollowSuccesActionType = {
  type: typeof UNFOLLOW;
  id: number;
};
export const unfollowSuccess = (id: number): UnfollowSuccesActionType => {
  return {
    type: UNFOLLOW,
    id: id,
  };
};
type SetUsersActionType = {
  type: typeof SET_USERS;
  users: Array<UserType>;
};
export const setUsers = (users: Array<UserType>): SetUsersActionType => {
  return {
    type: SET_USERS,
    users: users,
  };
};

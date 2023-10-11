const initialState = {
  users: [],
  totalCount: 0,
  page: 1,
  count: 5,
  pagePage: 1,
  pageCount: 5,
  isFetching: false,
  inProcess: [],
};

const SET_IS_FETCHING = "SET_IF_FETCHING";
const SET_USERS = "SET_USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_PAGE = "SET_PAGE";
const SET_COUNT = "SET_COUNT";
const SET_PAGE_PAGE = "SET_TOTAL_PAGES";
const SET_PAGE_COUNT = "SET_PAGE_COUNT";
const ADD_IN_PROCESS = "ADD_IN_PROCESS";
const DELETE_IN_PROCESS = "DELETE_IN_PROCESS";

const usersReducer = (state = initialState, action) => {
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
      return {
        ...state,
        totalPages: action.totalPages,
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

export const addInProcess = (id) => {
  return {
    type: ADD_IN_PROCESS,
    id,
  };
};
export const deleteInProcess = (id) => {
  return {
    type: DELETE_IN_PROCESS,
    id,
  };
};
export const setIsFetching = (isFetching) => {
  return {
    type: SET_IS_FETCHING,
    isFetching,
  };
};
export const setPageCount = (pageCount) => {
  return {
    type: SET_PAGE_COUNT,
    pageCount,
  };
};
export const setPagePage = (pagePage) => {
  return {
    type: SET_PAGE_PAGE,
    pagePage,
  };
};
export const setCount = (count) => {
  return {
    type: SET_COUNT,
    count,
  };
};
export const setPage = (page) => {
  return {
    type: SET_PAGE,
    page,
  };
};
export const setTotalCount = (totalCount) => {
  return {
    type: SET_TOTAL_COUNT,
    totalCount,
  };
};
export const follow = (id) => {
  return {
    type: FOLLOW,
    id: id,
  };
};
export const unfollow = (id) => {
  return {
    type: UNFOLLOW,
    id: id,
  };
};
export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users: users,
  };
};

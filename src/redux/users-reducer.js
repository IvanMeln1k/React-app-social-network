const initialState = {
  users: [],
  totalCount: 0,
  page: 1,
  count: 5,
  pagePage: 1,
  pageCount: 5,
};

const SET_USERS = "SET_USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_PAGE = "SET_PAGE";
const SET_COUNT = "SET_COUNT";
const SET_PAGE_PAGE = "SET_TOTAL_PAGES";
const SET_PAGE_COUNT = "SET_PAGE_COUNT";

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
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
              isFollowed: true,
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
              isFollowed: false,
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

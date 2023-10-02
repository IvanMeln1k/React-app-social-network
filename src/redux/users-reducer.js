const initialState = {
  users: [
    {
      id: 1,
      name: "Ivan",
      surname: "Melnik",
      follow: true,
    },
    {
      id: 2,
      name: "Marat",
      surname: "Ubaidatov",
      follow: true,
    },
    {
      id: 3,
      name: "Alex",
      surname: "Some",
      follow: false,
    },
  ],
};

const SET_USERS = "SET_USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
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
              follow: true,
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
              follow: false,
            };
            return user;
          }
        }),
      };
    default:
      return state;
  }
};

export default usersReducer;

export const followAC = (id) => {
  return {
    type: FOLLOW,
    id: id,
  };
};

export const unfollowAC = (id) => {
  return {
    type: UNFOLLOW,
    id: id,
  };
};

export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users: users,
  };
};
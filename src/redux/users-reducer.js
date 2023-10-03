const initialState = {
  users: [
    {
      id: 1,
      avatar:
        "https://i.pinimg.com/1200x/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg",
      name: "Ivan",
      surname: "Melnik",
      isFollowed: true,
    },
    {
      id: 2,
      avatar:
        "https://i.pinimg.com/1200x/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg",
      name: "Marat",
      surname: "Ubaidatov",
      isFollowed: true,
    },
    {
      id: 3,
      avatar:
        "https://i.pinimg.com/1200x/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg",
      name: "Alex",
      surname: "Some",
      isFollowed: false,
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

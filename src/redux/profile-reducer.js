const ADD_POST = "ADD_POST";
const CHANGE_NEW_POST_TEXT = "CHANGE_NEW_POST_TEXT";

const initialState = {
  posts: [
    { id: 1, text: "yo" },
    { id: 2, text: "hello world!" },
    { id: 3, text: "yo yo yo" },
    { id: 4, text: "sometext" },
  ],
  newPostText: "new post text",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      state.posts.push({
        id: 5,
        text: state.newPostText,
      });
      break;
    case CHANGE_NEW_POST_TEXT:
      state.newPostText = action.text;
      break;
    default:
  }

  return state;
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});
export const changeNewPostTextActionCreator = (text) => ({
  type: CHANGE_NEW_POST_TEXT,
  text: text,
});

export default profileReducer;

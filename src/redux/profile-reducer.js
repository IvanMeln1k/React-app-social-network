const ADD_POST = "ADD_POST";
const CHANGE_NEW_POST_TEXT = "CHANGE_NEW_POST_TEXT";

const profileReducer = (state, action) => {
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

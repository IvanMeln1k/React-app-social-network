let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, text: "yo" },
        { id: 2, text: "hello world!" },
        { id: 3, text: "yo yo yo" },
        { id: 4, text: "sometext" },
      ],
      newPostText: "new post text",
    },
    dialogsPage: {
      chats: [
        { id: 1, name: "Ivan" },
        { id: 2, name: "Marat" },
        { id: 3, name: "Denis" },
        { id: 4, name: "Yaroslav" },
        { id: 5, name: "Vlad" },
      ],
      messages: [
        { id: 1, message: "Hello!" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Norm" },
      ],
      newMessageBody: "Some text",
    },
  },
  _subscriber() {
    console.log("state was changed");
  },
  subscribe(observer) {
    this._subscriber = observer;
  },
  getState() {
    return this._state;
  },

  dispatch(action) {
    switch (action.type) {
      case ADD_POST:
        this._state.profilePage.posts.push({
          id: 5,
          text: this._state.profilePage.newPostText,
        });
        break;
      case CHANGE_NEW_POST_TEXT:
        this._state.profilePage.newPostText = action.text;
        break;
      case ADD_MESSAGE:
        this._state.dialogsPage.messages.push({
          id: 4,
          message: this._state.dialogsPage.newMessageBody,
        });
        break;
      case CHANGE_NEW_MESSAGE_BODY:
        this._state.dialogsPage.newMessageBody = action.body;
        break;
      default:
    }
    this._subscriber(this._state);
  },
};

const ADD_MESSAGE = "ADD_MESSAGE";
const CHANGE_NEW_MESSAGE_BODY = "CHANGE_NEW_MESSAGE_BODY";
const ADD_POST = "ADD_POST";
const CHANGE_NEW_POST_TEXT = "CHANGE_NEW_POST_TEXT";

export const addMessageActionCreator = () => ({
  type: ADD_MESSAGE,
});
export const changeNewMessageBodyActionCreator = (body) => ({
  type: CHANGE_NEW_MESSAGE_BODY,
  body: body,
});

export const addPostActionCreator = () => ({
  type: ADD_POST,
});
export const changeNewPostTextActionCreator = (text) => ({
  type: CHANGE_NEW_POST_TEXT,
  text: text,
});

export default store;

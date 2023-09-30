import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._subscriber(this._state);
  },
};

export default store;

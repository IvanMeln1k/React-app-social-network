const ADD_MESSAGE = "ADD_MESSAGE";
const CHANGE_NEW_MESSAGE_BODY = "CHANGE_NEW_MESSAGE_BODY";

const initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      state.messages.push({
        id: 4,
        message: state.newMessageBody,
      });
      break;
    case CHANGE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      break;
    default:
  }

  return state;
};

export const addMessageActionCreator = () => ({
  type: ADD_MESSAGE,
});
export const changeNewMessageBodyActionCreator = (body) => ({
  type: CHANGE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;
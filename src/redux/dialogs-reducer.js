const ADD_MESSAGE = "ADD_MESSAGE";
const CHANGE_NEW_MESSAGE_BODY = "CHANGE_NEW_MESSAGE_BODY";

const dialogsReducer = (state, action) => {
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

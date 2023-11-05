const ADD_MESSAGE = "React-app-social-network/dialogs-reducer/DD_MESSAGE";
const CHANGE_NEW_MESSAGE_BODY =
  "React-app-social-network/dialogs-reducer/CHANGE_NEW_MESSAGE_BODY";

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
export type StateType = typeof initialState;
export type MessageType = {
  id: number;
  messsage: string;
};

const dialogsReducer = (state = initialState, action: any): StateType => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: 4,
            message: state.newMessageBody,
          },
        ],
      };
    case CHANGE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };
    default:
      return state;
  }
};

type AddMessageActionType = {
  type: typeof ADD_MESSAGE;
};
export const addMessage = (): AddMessageActionType => ({
  type: ADD_MESSAGE,
});
type ChangeNewMessageBody = {
  type: typeof CHANGE_NEW_MESSAGE_BODY;
  body: string;
};
export const changeNewMessageBody = (body: string): ChangeNewMessageBody => ({
  type: CHANGE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;

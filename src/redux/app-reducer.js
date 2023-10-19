import { auth } from "./auth-reducer";

const initialState = {
  isInitialized: false,
};

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCES";

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        isInitialized: true,
      };
    default:
      return state;
  }
};

export default appReducer;

//Thunk creators
export const initializeApp = () => (dispatch) => {
  dispatch(auth()).then(() => {
    dispatch(initializedSuccess());
  });
};

//Actions creators
const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});

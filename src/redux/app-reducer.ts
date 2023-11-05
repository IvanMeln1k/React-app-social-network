import { auth } from "./auth-reducer";

const initialState = {
  isInitialized: false,
};
export type StateType = typeof initialState;

const INITIALIZED_SUCCESS =
  "React-app-social-network/app-reducer/INITIALIZED_SUCCES";

const appReducer = (state = initialState, action: any): StateType => {
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
export const initializeApp = () => async (dispatch: any) => {
  await dispatch(auth());
  dispatch(initializedSuccess());
};

//Actions creators
type InitializedSuccesActionType = {
  type: typeof INITIALIZED_SUCCESS;
};
const initializedSuccess = (): InitializedSuccesActionType => ({
  type: INITIALIZED_SUCCESS,
});

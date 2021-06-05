import {AuthState} from '../initialStates/InitialStates';
import {AuthActionTypes} from '../actionTypes/AuthActionTypes';

export type AuthAction = {
  type: AuthActionTypes;
  payload?: AuthState;
};

const AuthReducers = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_LOAD_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case AuthActionTypes.LOGIN_LOAD_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        email: action.payload,
      };
    }
    case AuthActionTypes.LOGIN_LOAD_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};

export default AuthReducers;

import {IAuthState, InitialState} from '../initialState/InitialState';
import {AuthActionTypes} from '../types/ActionTypes';
import {AnyAction} from 'redux';

const AuthReducers = (state: IAuthState = InitialState, action: AnyAction) => {
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
    case AuthActionTypes.LOGOUT: {
      return {
        ...state,
        email: '',
      };
    }

    default:
      return state;
  }
};

export default AuthReducers;

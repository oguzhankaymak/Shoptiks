import {AuthActionTypes} from '../types/ActionTypes';

export const loginAction = (email: string) => {
  return async (dispatch: any) => {
    dispatch({type: AuthActionTypes.LOGIN_LOAD_LOADING});

    setTimeout(() => {
      dispatch({type: AuthActionTypes.LOGIN_LOAD_SUCCESS, payload: email});
    }, 5000);
  };
};

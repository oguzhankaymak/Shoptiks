import {AuthActionTypes} from './../actionTypes/AuthActionTypes';

export default () => (dispatch: any | null, email: string) => {
  dispatch({
    type: AuthActionTypes.LOGIN_LOAD_LOADING,
  });

  setTimeout(() => {
    dispatch({
      type: AuthActionTypes.LOGIN_LOAD_SUCCESS,
      payload: email,
    });
  }, 3000);
};

import {ICartProductState, InitialState} from '../initialState/InitialState';
import {CartActionTypes} from '../types/ActionTypes';
import {AnyAction} from 'redux';

const CartReducers = (
  state: ICartProductState = InitialState,
  action: AnyAction,
) => {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART: {
      return {
        cartItem: [...action.payload],
      };
    }
    case CartActionTypes.REMOVE_FROM_CART: {
      return {
        cartItem: [...action.payload],
      };
    }
    case CartActionTypes.CLEAR_CART: {
      return {
        cartItem: [],
      };
    }

    default:
      return state;
  }
};

export default CartReducers;

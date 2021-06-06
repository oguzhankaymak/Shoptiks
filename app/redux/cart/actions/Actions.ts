import {ICartProduct} from './../initialState/InitialState';
import {CartActionTypes} from './../types/ActionTypes';
import {IProduct} from './../../../containers/bottomTab/homeStack/controllers/data';

export const addToCartAction = (product: IProduct) => {
  return async (dispatch: any, getState: any) => {
    const state = getState();

    var newCartArray = [...state.cartReducer.cartItem];

    //check product
    var objIndex = newCartArray?.findIndex(obj => obj.id === product.id);

    //state has product
    if (objIndex !== -1) {
      newCartArray[objIndex].quantity = newCartArray[objIndex].quantity + 1;
      return dispatch({
        type: CartActionTypes.ADD_TO_CART,
        payload: newCartArray,
      });
    }

    //interface mapper
    let cartProduct = <ICartProduct>{
      id: product.id,
      name: product.name,
      unitPrice: product.price,
      quantity: 1,
    };

    dispatch({
      type: CartActionTypes.ADD_TO_CART,
      payload: [...newCartArray, cartProduct],
    });
  };
};

export const deleteProductFromCartAction = (cartProduct: ICartProduct) => {
  return async (dispatch: any, getState: any) => {
    const state = getState();

    var newCartArray = [...state.cartReducer.cartItem];

    //check product
    var objIndex = newCartArray?.findIndex(obj => obj.id === cartProduct.id);

    if (objIndex !== -1) {
      //check quantity
      if (newCartArray[objIndex].quantity > 1) {
        newCartArray[objIndex].quantity = newCartArray[objIndex].quantity - 1;
        return dispatch({
          type: CartActionTypes.ADD_TO_CART,
          payload: newCartArray,
        });
      }

      newCartArray.splice(objIndex, 1);

      return dispatch({
        type: CartActionTypes.ADD_TO_CART,
        payload: newCartArray,
      });
    }
  };
};

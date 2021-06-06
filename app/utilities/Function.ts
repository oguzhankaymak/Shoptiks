import {ICartProduct} from './../redux/cart/initialState/InitialState';
const emailIsValid = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const calcuateTotalPrice = (cartProducts: ICartProduct[]) => {
  let totalPrice = 0;
  let unitPrice = 0;
  cartProducts.forEach((cartProduct: ICartProduct) => {
    unitPrice = Number(cartProduct.unitPrice.split('$')[0]);
    totalPrice += unitPrice * cartProduct.quantity;
  });
  return totalPrice;
};

export {emailIsValid, calcuateTotalPrice};

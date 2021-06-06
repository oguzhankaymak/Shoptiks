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

const fullNameIsValid = (text: string) => {
  if (text.length < 5 || !text.includes(' ')) {
    return false;
  }
  return true;
};

const subjectIsValid = (text: string) => {
  if (text.length < 4) {
    return false;
  }
  return true;
};

const messageIsValid = (text: string) => {
  if (text.length < 15) {
    return false;
  }
  return true;
};

export {
  emailIsValid,
  calcuateTotalPrice,
  fullNameIsValid,
  subjectIsValid,
  messageIsValid,
};

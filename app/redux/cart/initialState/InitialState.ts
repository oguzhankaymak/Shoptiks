export const InitialState: ICartProductState = {
  cartItem: [],
};

export interface ICartProductState {
  cartItem: ICartProduct[];
}

export interface ICartProduct {
  id: number;
  name: string;
  unitPrice: string;
  quantity: number;
}

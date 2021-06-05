export const InitialState: IAuthState = {
  email: '',
  isLoading: false,
  error: '',
};

export interface IAuthState {
  email: string;
  isLoading: boolean;
  error: string;
}

export const InitialState: AuthState = {
  email: '',
  isLoading: false,
  error: '',
};

export interface AuthState {
  email: string;
  isLoading: boolean;
  error: string;
}

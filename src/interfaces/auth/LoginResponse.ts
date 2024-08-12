export interface User {
  id: number;
  name: string;
  email: string;
}

export interface LoginResponse {
  message: string;
  user?: User;
}

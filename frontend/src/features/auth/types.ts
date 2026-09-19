export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    token: string;
    username: string;
    roles: string[];
  };
}

export interface User {
  username: string;
  roles: string[];
}

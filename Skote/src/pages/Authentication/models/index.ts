export type LoginModel = {
  email: string;
  password: string;
};

export type RegisterModel = {
  email: string;
  password: string;
  confirmPassword: string;
};

export type LoginResult = {
  accessToken: string;
};

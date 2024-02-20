export type UserCredentials = {
  name: string;
  password: string;
};

export type User = UserCredentials & {
  index: number;
};

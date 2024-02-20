import { type UserCredentials, type User } from '../types/user.types.ts';

const usersDB: User[] = [];

const exist = (name: UserCredentials['name']) => {
  return Boolean(usersDB.find(user => user.name === name));
};

const find = (name: UserCredentials['name']) => {
  return usersDB.find(user => user.name === name);
};

const add = (credentials: UserCredentials) => {
  if (exist(credentials.name)) {
    throw new Error('User already exist');
  }

  const newUser = { ...credentials, index: usersDB.length };
  usersDB.push(newUser);

  return newUser;
};

export default {
  exist,
  find,
  add,
};

import { type WebSocket } from 'ws';

import db from '../db/index.ts';

import { type Data, type Message } from '../types/message.types.ts';
import { type User, type UserCredentials } from '../types/user.types.ts';
import { createMessage } from '../helpers/message.helpers.ts';

const isUserCredentials = (data: Data): data is UserCredentials => {
  return (
    typeof data === 'object' &&
    'string' &&
    typeof data?.password === 'string'
  );
};

const checkCredentials = (credentials: UserCredentials, user: User) => {
  const isValidPassword = credentials.password === user.password;

  if (!isValidPassword) {
    throw new Error('Invalid credentials');
  }
};

const prepareRegResponseData = (user: User, error?: Error) => {
  return {
    name: user.name,
    index: user.index,
    error: Boolean(error),
    errorText: error?.message ?? '',
  };
};

export const handleRegistration = (message: Message, ws: WebSocket) => {
  if (!isUserCredentials(message.data)) {
    console.log('User credentials is invalid');
    return;
  }

  const credentials = message.data;
  let user = db.find(credentials.name);
  let error: Error | undefined;

  try {
    if (!user) {
      user = db.add(credentials);
    } else {
      checkCredentials(credentials, user);
    }
  } catch (err) {
    if (err instanceof Error) {
      error = err;
    }
  }

  const preparedData = prepareRegResponseData(user!, error);
  const preparedResponse = createMessage(message.type, preparedData);

  ws.send(preparedResponse);
};

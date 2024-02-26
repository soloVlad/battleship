import { WebSocketServer } from 'ws';

import { handleRegistration } from './handlers/registration.handler.ts';
import { parseMessage } from './helpers/json.helpers.ts';
import { isMessage } from './helpers/message.helpers.ts';
import { Command } from './enums/index.ts';

const WS_PORT = 3000;

const wsServer = new WebSocketServer({ port: WS_PORT });

wsServer.on('connection', (ws) => {
  console.log('New client');

  ws.on('message', (message: string) => {
    try {
      const messageObj: Record<string, unknown> = parseMessage(message);

      if (!isMessage(messageObj)) {
        throw new Error('Invalid message.');
      }

      if (messageObj.type === Command.REGISTRATION) {
        handleRegistration(messageObj, ws);
      }

      console.log(`Received message: ${JSON.stringify(messageObj)}`);
    } catch (error) {
      console.log(error);
    }
  });
});

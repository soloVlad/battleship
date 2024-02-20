import { Command } from '../enums/index.ts';
import { type Data, type Message } from '../types/message.types.ts';

export const isMessage = (message: Record<string, unknown>): message is Message => {
  return (
    typeof message?.type === 'string' &&
    Object.values(Command).includes(message.type as Command) &&
    typeof message?.id === 'number' &&
    (typeof message?.data === 'object' || typeof message?.data === 'string')
  );
};

export const createMessage = (command: Command, data: Data) => {
  return JSON.stringify({
    type: command,
    data: JSON.stringify(data),
    id: 0,
  });
};

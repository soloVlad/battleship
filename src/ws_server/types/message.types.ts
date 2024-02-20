import { type Command } from '../enums/index.ts';

export type Data = Record<string, unknown> | string;

export type Message = {
  type: Command;
  data: Data;
  id: number;
};

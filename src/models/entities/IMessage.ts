export interface IMessage {
  topic: string;
  partition: number;
  message?: string;
  key?: string;
  timestamp?: string;
}

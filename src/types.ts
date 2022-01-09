export interface NatsirtUser {
  username: string;
  reply: (message: string) => void;
}

import { type Message } from 'ai'

export interface Chat extends Record<string, unknown> {
  id: string
  title: string
  createdAt: Date
  userId: string
  path: string
  messages: Message[]
  sharePath?: string
}

export type ServerActionResult<Result> = Promise<
  | Result
  | {
      error: string
    }
>

export type JsonifyMessage = {
  [P in keyof Message]: Message[P] extends Date ? string : Message[P]
}

export type JsonifyChat = {
  [P in keyof Chat]: Chat[P] extends Date ? string : Chat[P] extends Message[] ? JsonifyMessage[] : Chat[P];
};

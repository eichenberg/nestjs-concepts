import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  private messages: string[] = [
    'Message 1',
    'Message 2',
    'Message 3',
    'Message 4',
    'Message 5',
  ];

  getListOfMessages(): string[] {
    return this.messages;
  }

  getSingleMessage(id: number): string {
    this.validateMessageId(id);
    return this.messages[--id];
  }

  createMessage(message: Message): void {
    this.messages.push(message.content);
  }

  updateMessage(id: number, message: Message): void {
    this.validateMessageId(id);
    this.messages[--id] = message.content;
  }

  private validateMessageId(id: number): void {
    if (id < 0 || id > this.messages.length) {
      throw new Error(`Message ID not found: ${id}`);
    }
  }
}

export interface Message {
  content: string;
}

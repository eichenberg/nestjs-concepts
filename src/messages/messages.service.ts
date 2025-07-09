import { Injectable, NotFoundException } from '@nestjs/common';
import { Message } from './entity/message.entity';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

@Injectable()
export class MessagesService {
  private lastId = 1;

  private messages: Message[] = [
    {
      id: 1,
      content: 'Message 1',
      from: 'User A',
      to: 'User B',
      isRead: false,
      date: new Date(),
    },
  ];

  getListOfMessages(): Message[] {
    return this.messages;
  }

  getSingleMessage(id: number): Message {
    const message = this.messages.find(message => message.id == id);

    if (message) {
      return message;
    }

    throw new NotFoundException(`Message not found for id: ${id}`);
  }

  createMessage(createMessageDto: CreateMessageDto): Message {
    const id = ++this.lastId;
    const newMessage = {
      id,
      ...createMessageDto,
      isRead: false,
      date: new Date(),
    };
    this.messages.push(newMessage);
    return newMessage;
  }

  updateMessage(id: number, updateMessageDto: UpdateMessageDto): Message {
    const messageIndex = this.messages.findIndex(message => message.id == id);

    if (messageIndex < 0) {
      throw new NotFoundException(`Message not found for id: ${id}`);
    }

    this.messages[messageIndex] = {
      ...this.messages[messageIndex],
      ...updateMessageDto,
    };

    return this.messages[messageIndex];
  }

  deleteMessage(id: number): Message {
    const messageIndex = this.messages.findIndex(message => message.id == id);

    if (messageIndex < 0) {
      throw new NotFoundException(`Message not found for id: ${id}`);
    }

    const messageDeleted = this.messages[messageIndex];
    this.messages.splice(messageIndex, 1);
    return messageDeleted;
  }
}

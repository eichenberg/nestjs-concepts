import { Injectable, NotFoundException } from '@nestjs/common';
import { Message } from './entity/message.entity';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
  ) {}

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

  async getListOfMessages(): Promise<Message[]> {
    return this.messageRepository.find();
  }

  async getSingleMessage(id: number): Promise<Message> {
    const message = await this.messageRepository.findOne({ where: { id } });

    if (message) {
      return message;
    }

    throw new NotFoundException(`Message not found for id: ${id}`);
  }

  async createMessage(createMessageDto: CreateMessageDto): Promise<Message> {
    const newMessage = {
      ...createMessageDto,
      isRead: false,
      date: new Date(),
    };

    const recado = this.messageRepository.create(newMessage);

    return await this.messageRepository.save(recado);
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

  async deleteMessage(id: number): Promise<Message> {
    const message = await this.messageRepository.findOneBy({ id });

    if (!message) {
      throw new NotFoundException(`Message not found for id: ${id}`);
    }

    return await this.messageRepository.remove(message);
  }
}

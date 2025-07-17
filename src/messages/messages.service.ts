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

  async updateMessage(
    id: number,
    updateMessageDto: UpdateMessageDto,
  ): Promise<Message> {
    const message = await this.messageRepository.preload({
      id,
      ...updateMessageDto,
    });

    if (!message) {
      throw new NotFoundException(`Message not found for id: ${id}`);
    }

    return this.messageRepository.save(message);
  }

  async deleteMessage(id: number): Promise<Message> {
    const message = await this.messageRepository.findOneBy({ id });

    if (!message) {
      throw new NotFoundException(`Message not found for id: ${id}`);
    }

    return await this.messageRepository.remove(message);
  }
}

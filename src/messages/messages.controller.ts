import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Message, MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get()
  findAll(): string[] {
    return this.messagesService.getListOfMessages();
  }

  @Get(':id')
  findOne(@Param('id') id: number): string {
    return this.messagesService.getSingleMessage(id);
  }

  @Post()
  create(@Body() message: Message): void {
    this.messagesService.createMessage(message);
  }
}

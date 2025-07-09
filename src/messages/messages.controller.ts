import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
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

  @Patch(':id')
  update(@Param('id') id: number, @Body() message: Message): void {
    this.messagesService.updateMessage(id, message);
  }

  @Delete(':id')
  delete(@Param('id') id: number): void {
    this.messagesService.deleteMessage(id);
  }
}

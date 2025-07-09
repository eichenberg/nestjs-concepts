import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { Message } from './entity/message.entity';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get()
  findAll(): Message[] {
    return this.messagesService.getListOfMessages();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Message {
    return this.messagesService.getSingleMessage(id);
  }

  @Post()
  create(@Body() message: Message): Message {
    return this.messagesService.createMessage(message);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() message: Message): Message {
    return this.messagesService.updateMessage(id, message);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Message {
    return this.messagesService.deleteMessage(id);
  }
}

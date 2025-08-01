import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { Message } from './entity/message.entity';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get()
  findAll(): Promise<Message[]> {
    return this.messagesService.getListOfMessages();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Message> {
    return this.messagesService.getSingleMessage(id);
  }

  @Post()
  create(@Body() createMessageDto: CreateMessageDto): Promise<Message> {
    return this.messagesService.createMessage(createMessageDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMessageDto: UpdateMessageDto,
  ): Promise<Message> {
    return this.messagesService.updateMessage(id, updateMessageDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<Message> {
    return this.messagesService.deleteMessage(id);
  }
}

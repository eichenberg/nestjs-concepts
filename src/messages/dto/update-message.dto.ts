import { PartialType } from '@nestjs/mapped-types';
import { CreateMessageDto } from './create-message.dto';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateMessageDto extends PartialType(CreateMessageDto) {
  @IsBoolean()
  @IsOptional()
  readonly isRead?: boolean;
}

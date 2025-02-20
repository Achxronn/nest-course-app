/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { UtilityModule } from 'src/shared/utility/utility.module';

@Module({
  imports: [UtilityModule],
  controllers: [ChatController],
})
export class ChatModule {}

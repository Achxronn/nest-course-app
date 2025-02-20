/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UtilityModule } from 'src/shared/utility/utility.module';
import { UserService } from './user.service';

@Module({
  imports: [UtilityModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}

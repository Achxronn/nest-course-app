/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { UtilityModule } from 'src/shared/utility/utility.module';


@Module({
  imports: [UtilityModule],
  controllers: [OrderController],
})
export class OrderModule {}

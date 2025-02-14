import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() //localhost:3000
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/showname') //localhost:3000/showname
  showName(): string {
    return this.appService.getName();
  }

  @Get('/showinformation') //localhost:3000/showinformation
  showInfo(): string {
    return this.appService.getInfo();
  }

  @Get('/showjson') //localhost:3000/showjson
  myJSON() {
    return this.appService.myJSON();
  }
}

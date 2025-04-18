/* eslint-disable prettier/prettier */
import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get() //localhost:3000
  // @Render('index') //the return value of
  // getHello() {
  //   return this.appService.getHello();
  // }

  @Get() //localhost:3000
  @Render('index') //the return value of
  showInfo() {
    return this.appService.getInfo()
  }

  // @Get('/showinformation') //localhost:3000/showinformation
  // showInfo(){
  //   return this.appService.getInfo();
  // }

  @Get('/showjson') //localhost:3000/showjson
  myJSON() {
    return this.appService.myJSON();
  }

  @Get('/showGIT') //localhost:3000/showGIT
  showGIT(): string {
    return this.appService.testGIT();
  }

  @Get('/usepostman') //localhost:3000/usepostman
  usePostman(): string {
    return this.appService.UPostman();
  }
}

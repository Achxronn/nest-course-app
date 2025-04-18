/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {message: 'My Info'};
  }

  // getInfo() : {data : {name:string,age:number,email:string,hobby:string}}{ 
  //   const data = {
  //     name: 'Summer Civilian',
  //     age: 13,
  //     email: 'again@gmail.com',
  //     hobby: 'playgame'
  //   };
  //     return { data };
  // }

  getInfo(){ 
    return {
      name: 'Summer Civilian',
      age: 13,
      email: 'again@gmail.com',
      hobby: 'playgame'
    };
  }

  // getInfo(): string {
  //   return 'Hello, I am Andrew, 19 years old';
  // }

  myJSON() {
    return {
      name: 'Nianis',
      lastname: 'Watanasiriwanich',
      age: 13,
      version: process.env.API_VERSION,
    };
  }

  testGIT(): string {
    return 'Git and Github using';
  }

  UPostman(): string {
    return 'we use postman';
  }
}

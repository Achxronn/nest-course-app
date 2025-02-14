import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'We love nestJS!';
  }

  getName(): string {
    return 'I am Atomic';
  }

  getInfo(): string {
    return 'Hello, I am Andrew, 19 years old';
  }

  myJSON() {
    return {
      name: 'Nianis',
      lastname: 'Watanasiriwanich',
      age: 13,
    };
  }

  testGIT(): string {
    return 'Git and Github using';
  }
}

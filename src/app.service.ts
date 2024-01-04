import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  saySomething(): string {
    return 'Something';
  }

  async getData() {
    const result = await fetch('https://dummyjson.com/products');
    return result ? result.json() : {};
  }
}

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/say-something')
  saySomething(): string {
    return this.appService.saySomething();
  }

  @Get('/get-data')
  async getData(): Promise<any> {
    const data = await this.appService.getData();
    return data;
  }
}

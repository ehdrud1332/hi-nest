import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // @Get이라는 데코레이터. == 이것이 express의 get router 같은 역할은 한다. (비유하자면)
  // controller는 express.js의 controller/router 같은 역할이다. 다시 한 번 상기하자.
  @Get()
  // getHello라는 string을 반환하는 함수.
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hello')
  sayHello(): string {
    return 'Hello everyone';
  }
}

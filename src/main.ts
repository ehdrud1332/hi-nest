// nestJS는 main.ts 파일을 가지고 있다, 무조건 이 이름이여야 함
// NestJS APP은 여기 main.ts에서 시작한다.
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 유효성 검사용 파이프를 만든다. pipe
  // pipe는 미들웨어 같은 거라고 생각 할 수 있다.
  app.useGlobalPipes(
    // 우리가 쓰고 싶은 파이프를 NestJS 어플리케이션에게 넘겨줘야한다.
    // validationPipe는 매우 유용함,cuz 이게 유효성을 검사해주기 때문.
    new ValidationPipe({
      // whitelist는 true로 설정하면 아무 데코레이터도 없는 어떠한 property의 object를 거른다.
      whitelist: true,
      forbidNonWhitelisted: true,
      // transform은 유저들이 보낸 것을 우리가 원하는 실제 타입으로 변환해준다.
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();

// nestJS는 main.ts 파일을 가지고 있다, 무조건 이 이름이여야 함
// NestJS APP은 여기 main.ts에서 시작한다.
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

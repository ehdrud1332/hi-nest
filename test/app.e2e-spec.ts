import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
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
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Welcome to my Movie API');
  });

  describe('/movies', () => {
    it('GET', () => {
      return request(app.getHttpServer()).get('/movies').expect(200).expect([]);
    });

    it('POST', () => {
      return request(app.getHttpServer())
        .post('/movies')
        .send({
          title: 'Test',
          year: 1999,
          genres: ['test'],
        })
        .expect(201);
    });

    it('DELETE', () => {
      return request(app.getHttpServer()).delete('/movies').expect(404);
    });
  });

  describe('/movies/:id', () => {
    it('GET 200', () => {
      return request(app.getHttpServer()).get('/movies/1').expect(200);
    });
    it('GET 404', () => {
      return request(app.getHttpServer()).get('/movies/99').expect(404);
    });
    it.todo('DELETE');
    it.todo('PATCH');
  });
});

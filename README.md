## 주요기능

- End to End Testing
- Unit Testing
- CRUD 구축
- Pipes로 유효성 검사
- Type 부여를 위한 DTO 생성 및 유효성 검사

## 사용한 패키지

~~~ts
"packages": [
"Typescript"
"NestJS"
"Jest"
]
~~~

## 테스팅 화면 


|Feature|Photo|Description|
|--|--|--|
|Feature1|<img src="https://user-images.githubusercontent.com/60862525/111949914-e01ccf00-8b24-11eb-87fc-a053b6e37364.png" width=500/>|Unit Test|
|Feature2|<img src="https://user-images.githubusercontent.com/60862525/111950105-2d993c00-8b25-11eb-8e50-f93f63ff6bd9.png" width=500/>|End To End(e2e) Test|

## Code Note

#### DTO
- class validator를 사용한 DTO 생성
- 코드를 더 간결하게 하고, Query에 대해 유효성 검사 가능
- mapped-types를 사용해서 DTO 변환 도와주기

~~~ts
// create DTO
export class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsOptional()
  @IsString({ each: true })
  readonly genres: string[];
}

// update DTO
import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto'

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
~~~

#### controller와 service의 관계
- controller는 url을 가져오는 역할과 함수를 실행함
- service는 로직을 관리하는 역할을 가지고 있다.
- dependency injection에 대한 이해

~~~ts
// service.ts
create(movieData: CreateMovieDto) {
  this.movies.push({
    id: this.movies.length + 1,
    ...movieData,
  });
}

update(id: number, updateData: UpdateMovieDto) {
  const movie = this.getOne(id);
  this.deleteOne(id);
  this.movies.push({ ...movie, ...updateData });
}
  
// controller.ts
@Post()
create(@Body() movieData: CreateMovieDto) {
  return this.moviesService.create(movieData);
  }
@Patch('/:id')
  patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.update(movieId, updateData);
  }
~~~

#### Pipes
- 유효성 검사용 파이프를 만든다.
- validationPipe는 매우 유용하다. 왜냐면 유효성 검사를 해주기 때문이다.
- whitelist가 true면 decorator 없는 property의 object를 거른다.
- transform이 true면 유저들이 보낸 data를 우리가 원하는 실제 타입으로 변환해준다.

~~~ts
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
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
~~~

## TO DO LIST
- [ ]  다양한 API만들어 보기
- [ ]  TypeScript 더 알아보기

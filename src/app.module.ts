// 앱 모듈은 모든것의 루트 모듈 같은 것!!
// 모듈은 어플리케이션의 일부분이다.
import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

//데코레이터는 클래스에 함수기능을 추가할 수 있다.
//데코레이터는 클래스 위의 함수이고, 클래스를 위해 움직인다고 생각하면 좋다.
//controller, provider가 중요하다
//controller가 하는 일은 기본적으로 url을 가져오고 함수를 실행한다. == express의 router같은 존재이다.
//이 함수를 데코레이터라고 부른다. 이것을 쓰는데 익숙해져야함.
@Module({
  // imports에 여러가지 모듈을 import하고 nestJS가 앱을 구동하면 모든 걸 하나의 모듈로 생성해준다.
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})
// root module 이라고 이해하면 좋을 것 같다.
// AppModule에서는 우리가 하는 모든걸 import 한다.
export class AppModule {}

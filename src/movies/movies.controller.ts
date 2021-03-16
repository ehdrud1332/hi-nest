import { Controller, Get, Param, Post, Delete, Patch } from '@nestjs/common';

// controller 데코레이터의 인수부분이 url의 엔트리 포인트를 컨트롤한다.
// nestjs는 무언가가 필요하면 내가 무조건 요청해야한다.
@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `This will return one movie with the id: ${id}`;
  }
  @Post()
  create() {
    return 'This will create a movie';
  }
  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will remove a movie with the id: ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string) {
    return `This will patch a movie with the id ${movieId}`;
  }
}

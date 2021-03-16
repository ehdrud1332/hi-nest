import { IsNumber, IsOptional, IsString } from 'class-validator';
// 이렇게 타입을 만들었다.
// 사람들이 보낼 수 있는거, 보냈으면 하는 것들을 !!
export class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsOptional()
  @IsString({ each: true })
  readonly genres: string[];
}

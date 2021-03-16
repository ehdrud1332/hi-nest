import { IsNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

// updateMovieDto는 읽기전용이고 필수는 아니게 설정한다.
// required로 하지 않는 이유는 각각 수정을 하고 싶을 때가 있을 수 있기때문.
// export class UpdateMovieDto {
//   @IsString()
//   readonly title?: string;
//
//   @IsNumber()
//   readonly year?: number;
//
//   @IsString({ each: true })
//   readonly genres?: string[];
// }

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}

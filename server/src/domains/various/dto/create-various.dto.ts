import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

class CreateVariousDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  date: string;

  @IsOptional()
  fileSrc?: string;
}

export { CreateVariousDto };

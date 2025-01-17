import { IsNotEmpty, IsString } from 'class-validator';

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

  @IsNotEmpty()
  fileSrc: BinaryType;
}

export { CreateVariousDto };
